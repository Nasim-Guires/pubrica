import { NextRequest, NextResponse } from "next/server";
import { getPosts, mediaUrl } from "@/lib/payload/client";

// Some Payload meta descriptions have page-chrome text leaked into them
// ("No results See all results...", "Home Academy <category>...") instead of
// a real summary; there's no reliable way to recover the summary from it, so
// just omit the snippet for those rather than show garbled text.
const NAV_JUNK_PATTERNS = [/No results/i, /^.*Home\s+(Academy|Blog)\b/i];
function cleanSnippet(raw?: string | null): string {
  if (!raw) return "";
  const trimmed = raw.trim();
  if (NAV_JUNK_PATTERNS.some((re) => re.test(trimmed))) return "";
  return trimmed;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categorySlug = searchParams.get("categorySlug") ?? undefined;
  const limit = Number(searchParams.get("limit") ?? 3);

  try {
    let result = await getPosts({ source: "academy", limit, categorySlug });

    // Niche services can have zero posts in their own category — fall back to latest overall.
    if (result.docs.length === 0 && categorySlug) {
      result = await getPosts({ source: "academy", limit });
    }

    const items = result.docs
      .filter((doc) => doc.urlPath || doc.slug)
      .map((doc) => ({
        title: doc.title,
        href: `/academy/${doc.urlPath || doc.slug}`,
        image: mediaUrl(doc.heroImage),
        snippet: cleanSnippet(doc.seo?.metaDescription),
      }));

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}
