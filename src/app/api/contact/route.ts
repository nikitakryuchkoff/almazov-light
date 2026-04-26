import { Resend } from "resend";
import { jsx } from "react/jsx-runtime";
import {
  CONTACT_FORM_ENV_KEYS,
  CONTACT_FORM_ERROR_MESSAGES,
} from "@/constants/contact-form";
import { ContactLeadEmail } from "@/emails/ContactLeadEmail";
import {
  buildContactLeadSubject,
  isBotContactFormSubmission,
  validateContactFormPayload,
} from "@/utils/contact-form";
import { getRequiredEnv } from "@/utils/env";
import { getSiteUrl } from "@/utils/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: CONTACT_FORM_ERROR_MESSAGES.invalidJsonPayload }, { status: 400 });
  }

  const validation = validateContactFormPayload(payload);

  if (!validation.ok) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  const submission = validation.data;

  if (isBotContactFormSubmission(submission)) {
    return Response.json({ ok: true });
  }

  try {
    const resend = new Resend(getRequiredEnv(CONTACT_FORM_ENV_KEYS.apiKey));
    const to = getRequiredEnv(CONTACT_FORM_ENV_KEYS.toEmail);

    const { data, error } = await resend.emails.send({
      from: getRequiredEnv(CONTACT_FORM_ENV_KEYS.fromEmail),
      to: [to],
      replyTo: submission.email,
      subject: buildContactLeadSubject(submission),
      react: jsx(ContactLeadEmail, {
        name: submission.name,
        email: submission.email,
        topic: submission.topic,
        brief: submission.brief,
        locale: submission.locale,
        submittedAt: new Date().toISOString(),
        siteUrl: getSiteUrl(),
      }),
    });

    if (error) {
      console.error("Resend rejected contact form email:", error);
      return Response.json({ error: CONTACT_FORM_ERROR_MESSAGES.sendFailed }, { status: 502 });
    }

    return Response.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    console.error("Failed to process contact form submission:", error);
    return Response.json({ error: CONTACT_FORM_ERROR_MESSAGES.sendFailed }, { status: 500 });
  }
}
