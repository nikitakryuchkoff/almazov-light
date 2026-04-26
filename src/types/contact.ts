import type { Locale } from "@/i18n/config";

export type LocalizedContactText = Record<Locale, string>;

export type ContactInfo = {
  email: string;
  phone: string;
  phoneDisplay: string;
  telegram: string;
  whatsapp: string;
  instagram: string;
  geo: {
    lat: number;
    lng: number;
  };
  city: LocalizedContactText;
  country: string;
  hours: LocalizedContactText;
  address: LocalizedContactText;
  mapQuery: string;
};

export type ContactFormSubmission = {
  name: string;
  email: string;
  topic: string;
  brief: string;
  locale: Locale;
  website: string;
};

export type ContactFormFields = Pick<ContactFormSubmission, "name" | "email" | "topic" | "brief">;

export type ContactFormFieldName = keyof ContactFormFields;

export type ContactFormFieldErrorCode = "required" | "invalid_email";

export type ContactFormFieldErrors = Partial<Record<ContactFormFieldName, ContactFormFieldErrorCode>>;

export type ContactFormValidationSuccess = {
  ok: true;
  data: ContactFormSubmission;
};

export type ContactFormValidationFailure = {
  ok: false;
  error: string;
};

export type ContactFormValidationResult = ContactFormValidationSuccess | ContactFormValidationFailure;

export type ContactLeadEmailProps = {
  name: string;
  email: string;
  topic: string;
  brief?: string;
  locale: Locale;
  submittedAt: string;
  siteUrl?: string;
};
