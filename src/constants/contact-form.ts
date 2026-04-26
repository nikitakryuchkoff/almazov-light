export const CONTACT_FORM_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_FORM_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 160,
  topicMin: 2,
  topicMax: 120,
  briefMax: 2000,
  websiteMax: 120,
} as const;

export const CONTACT_FORM_ENV_KEYS = {
  apiKey: "RESEND_API_KEY",
  fromEmail: "RESEND_FROM_EMAIL",
  toEmail: "CONTACT_FORM_TO_EMAIL",
} as const;

export const CONTACT_PUBLIC_ENV_KEYS = {
  email: "NEXT_PUBLIC_CONTACT_EMAIL",
  phone: "NEXT_PUBLIC_CONTACT_PHONE",
  phoneDisplay: "NEXT_PUBLIC_CONTACT_PHONE_DISPLAY",
  telegram: "NEXT_PUBLIC_CONTACT_TELEGRAM",
  whatsapp: "NEXT_PUBLIC_CONTACT_WHATSAPP",
  instagram: "NEXT_PUBLIC_CONTACT_INSTAGRAM",
  geoLat: "NEXT_PUBLIC_CONTACT_GEO_LAT",
  geoLng: "NEXT_PUBLIC_CONTACT_GEO_LNG",
  mapQuery: "NEXT_PUBLIC_CONTACT_MAP_QUERY",
} as const;

export const CONTACT_FORM_ERROR_MESSAGES = {
  invalidJsonPayload: "Invalid JSON payload.",
  invalidRequestBody: "Invalid request body.",
  invalidName: "Name must be between 2 and 80 characters.",
  invalidEmail: "Email address is invalid.",
  invalidTopic: "Topic must be between 2 and 120 characters.",
  invalidBrief: "Brief must be 2000 characters or fewer.",
  invalidWebsite: "Website is invalid.",
  sendFailed: "Unable to send email.",
} as const;

export const CONTACT_FORM_SUBJECT_PREFIX = "New enquiry";
