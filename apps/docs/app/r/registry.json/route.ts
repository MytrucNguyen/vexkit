import { buildRegistryManifest } from "@/lib/registry/build-manifest";

export async function GET(): Promise<Response> {
  const manifest = buildRegistryManifest();
  return Response.json(manifest, {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
