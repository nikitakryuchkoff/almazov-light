import { CONTACT_INFO_STATIC } from "@/constants/contact-info";
import { CONTACT_PUBLIC_ENV_KEYS } from "@/constants/contact-form";
import type { ContactInfo } from "@/types/contact";
import {
  getRequiredEnv,
  getRequiredNormalizedUrlEnv,
  getRequiredNumericEnv,
} from "@/utils/env";

export const contactInfo: ContactInfo = {
  email: getRequiredEnv(CONTACT_PUBLIC_ENV_KEYS.email),
  phone: getRequiredEnv(CONTACT_PUBLIC_ENV_KEYS.phone),
  phoneDisplay: getRequiredEnv(CONTACT_PUBLIC_ENV_KEYS.phoneDisplay),
  telegram: getRequiredNormalizedUrlEnv(CONTACT_PUBLIC_ENV_KEYS.telegram),
  whatsapp: getRequiredNormalizedUrlEnv(CONTACT_PUBLIC_ENV_KEYS.whatsapp),
  instagram: getRequiredNormalizedUrlEnv(CONTACT_PUBLIC_ENV_KEYS.instagram),
  // Approximate coordinates for the Aviasozlar area, Yashnabad district, Tashkent.
  // The Yandex Map widget itself resolves the pin via mapQuery, so this only
  // backs the LocalBusiness JSON-LD; verify and refine if exact coords are needed.
  geo: {
    lat: getRequiredNumericEnv(CONTACT_PUBLIC_ENV_KEYS.geoLat),
    lng: getRequiredNumericEnv(CONTACT_PUBLIC_ENV_KEYS.geoLng),
  },
  city: CONTACT_INFO_STATIC.city,
  country: CONTACT_INFO_STATIC.country,
  hours: CONTACT_INFO_STATIC.hours,
  address: CONTACT_INFO_STATIC.address,
  mapQuery: getRequiredEnv(CONTACT_PUBLIC_ENV_KEYS.mapQuery),
};
