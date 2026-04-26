import { SITE_ENV_KEYS } from "@/constants/site";
import { getRequiredNormalizedUrlEnv } from "@/utils/env";

export function getSiteUrl(): string {
  return getRequiredNormalizedUrlEnv(SITE_ENV_KEYS.url);
}

export function getAbsoluteSiteUrl(path = ""): string {
  return new URL(path, `${getSiteUrl()}/`).toString();
}
