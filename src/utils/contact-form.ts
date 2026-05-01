import { defaultLocale, isLocale } from "@/i18n/config";
import {
  CONTACT_FORM_EMAIL_PATTERN,
  CONTACT_FORM_ERROR_MESSAGES,
  CONTACT_FORM_HONEYPOT_FIELD,
  CONTACT_FORM_LIMITS,
  CONTACT_FORM_SUBJECT_PREFIX,
} from "@/constants/contact-form";
import type {
  ContactFormFieldErrors,
  ContactFormFields,
  ContactFormSubmission,
  ContactFormValidationResult,
} from "@/types/contact";

function getTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function getContactFormFieldErrors(values: ContactFormFields): ContactFormFieldErrors {
  const errors: ContactFormFieldErrors = {};

  if (values.name.trim().length < CONTACT_FORM_LIMITS.nameMin) {
    errors.name = "required";
  }

  const normalizedEmail = values.email.trim().toLowerCase();

  if (!normalizedEmail) {
    errors.email = "required";
  } else if (!CONTACT_FORM_EMAIL_PATTERN.test(normalizedEmail)) {
    errors.email = "invalid_email";
  }

  if (values.topic.trim().length < CONTACT_FORM_LIMITS.topicMin) {
    errors.topic = "required";
  }

  return errors;
}

export function validateContactFormPayload(payload: unknown): ContactFormValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidRequestBody };
  }

  const record = payload as Record<string, unknown>;
  const name = getTrimmedString(record.name);
  const email = getTrimmedString(record.email).toLowerCase();
  const topic = getTrimmedString(record.topic);
  const brief = getTrimmedString(record.brief);
  const contactMethodConfirmation = getTrimmedString(record[CONTACT_FORM_HONEYPOT_FIELD]);
  const localeValue = getTrimmedString(record.locale);
  const locale = isLocale(localeValue) ? localeValue : defaultLocale;

  const clientErrors = getContactFormFieldErrors({ name, email, topic, brief });

  if (clientErrors.name) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidName };
  }

  if (clientErrors.email) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidEmail };
  }

  if (clientErrors.topic) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidTopic };
  }

  if (email.length > CONTACT_FORM_LIMITS.emailMax) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidEmail };
  }

  if (topic.length > CONTACT_FORM_LIMITS.topicMax) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidTopic };
  }

  if (brief.length > CONTACT_FORM_LIMITS.briefMax) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidBrief };
  }

  if (contactMethodConfirmation.length > CONTACT_FORM_LIMITS.honeypotMax) {
    return { ok: false, error: CONTACT_FORM_ERROR_MESSAGES.invalidHoneypot };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      topic,
      brief,
      locale,
      contactMethodConfirmation,
    },
  };
}

export function isBotContactFormSubmission(submission: ContactFormSubmission): boolean {
  return Boolean(submission.contactMethodConfirmation);
}

export function buildContactLeadSubject(submission: ContactFormSubmission): string {
  return `${CONTACT_FORM_SUBJECT_PREFIX} - ${submission.topic} - ${submission.name}`;
}
