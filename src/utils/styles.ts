export const createCssVariables = (kv: Record<string, string | number | undefined>): string =>
  Object.entries(kv)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
