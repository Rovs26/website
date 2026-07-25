export function isInternalPreviewAvailable(
  environment: string | undefined,
): boolean {
  return environment === "development";
}
