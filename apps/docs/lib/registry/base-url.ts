export const REGISTRY_BASE_URL_FALLBACK = "http://localhost:3000";

export function getRegistryBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_REGISTRY_BASE_URL;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv.replace(/\/$/, "");
  }
  return REGISTRY_BASE_URL_FALLBACK;
}

export function getRegistryItemUrl(name: string): string {
  return `${getRegistryBaseUrl()}/r/${name}.json`;
}
