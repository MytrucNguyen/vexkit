import { buildRegistryItem } from "@/lib/registry/build-item";

const JSON_SUFFIX = ".json";

export async function GET(
  _request: Request,
  ctx: { params: Promise<{ slug: string[] }> }
): Promise<Response> {
  const { slug } = await ctx.params;

  if (!slug || slug.length !== 1) {
    return Response.json(
      { error: "Registry items are addressed as /r/<name>.json." },
      { status: 404 }
    );
  }

  const segment = slug[0];
  if (!segment.endsWith(JSON_SUFFIX)) {
    return Response.json(
      { error: "Registry item URLs must end in .json." },
      { status: 404 }
    );
  }

  const name = segment.slice(0, -JSON_SUFFIX.length);
  if (name.length === 0) {
    return Response.json({ error: "Missing item name." }, { status: 404 });
  }

  const result = await buildRegistryItem(name);
  if (!result.ok) {
    return Response.json(
      { error: result.message },
      { status: result.status }
    );
  }

  return Response.json(result.item, {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
