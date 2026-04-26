export function getTrimmedEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();

  return value || undefined;
}

export function getRequiredEnv(name: string): string {
  const value = getTrimmedEnv(name);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getNormalizedUrlEnv(name: string): string | undefined {
  const value = getTrimmedEnv(name);

  return value ? value.replace(/\/+$/, "") : undefined;
}

export function getRequiredNumericEnv(name: string): number {
  const value = getRequiredEnv(name);
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    throw new Error(`Environment variable must be numeric: ${name}`);
  }

  return parsed;
}

export function getRequiredNormalizedUrlEnv(name: string): string {
  const value = getNormalizedUrlEnv(name);

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}
