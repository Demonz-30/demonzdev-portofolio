const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset URL for deployments hosted below a pathname. */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export { basePath };
