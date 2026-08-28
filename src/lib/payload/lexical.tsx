import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { LexicalContent, LexicalNode, PayloadMedia, PayloadPost } from "./types";
import { mediaUrl } from "./client";
import ImageLightboxGrid from "@/components/insight/ImageLightboxGrid";

const FORMAT_BOLD = 1;
const FORMAT_ITALIC = 2;
const FORMAT_STRIKETHROUGH = 4;
const FORMAT_UNDERLINE = 8;
const FORMAT_CODE = 16;

function renderText(node: LexicalNode, key: number): React.ReactNode {
  let text: React.ReactNode = node.text ?? "";
  const format = Number(node.format ?? 0);

  if (format & FORMAT_CODE) text = <code key={key}>{text}</code>;
  if (format & FORMAT_BOLD) text = <strong key={key}>{text}</strong>;
  if (format & FORMAT_ITALIC) text = <em key={key}>{text}</em>;
  if (format & FORMAT_UNDERLINE) text = <u key={key}>{text}</u>;
  if (format & FORMAT_STRIKETHROUGH) text = <s key={key}>{text}</s>;

  return <React.Fragment key={key}>{text}</React.Fragment>;
}

function plainNodeText(node: LexicalNode): string | null {
  if (!node.children || node.children.length === 0) return null;
  if (!node.children.every((c) => c.type === "text")) return null;
  return node.children.map((c) => c.text ?? "").join("").trim();
}

/**
 * Some migrated content (e.g. journal spec sheets) encodes "Key Highlights"
 * style data as alternating h2 (label) / h3 (value) heading pairs instead of
 * an actual table. Detect runs of 2+ consecutive pairs and collapse them into
 * a single synthetic key/value table node so they render as a clean table
 * instead of a wall of identical-looking headings.
 */
function groupKeyValuePairs(nodes: LexicalNode[]): LexicalNode[] {
  const result: LexicalNode[] = [];
  let i = 0;

  while (i < nodes.length) {
    const pairs: { key: string; value: string }[] = [];
    let j = i;

    while (j + 1 < nodes.length) {
      const a = nodes[j];
      const b = nodes[j + 1];
      if (a.type !== "heading" || a.tag !== "h2" || b.type !== "heading" || b.tag !== "h3") break;
      const keyText = plainNodeText(a);
      const valueText = plainNodeText(b);
      if (!keyText || !valueText) break;
      pairs.push({ key: keyText, value: valueText });
      j += 2;
    }

    if (pairs.length >= 2) {
      result.push({ type: "keyValueTable", pairs });
      i = j;
    } else {
      result.push(nodes[i]);
      i += 1;
    }
  }

  return result;
}

/**
 * Journal spec sheets also encode small stat icons as (upload, h3 label,
 * paragraph value) triples — e.g. an icon, "Impact Factor", "3.6". Collapse
 * runs of 2+ consecutive triples into an icon-stat grid instead of rendering
 * each icon at full content width.
 */
function groupIconStatTriples(nodes: LexicalNode[]): LexicalNode[] {
  const result: LexicalNode[] = [];
  let i = 0;

  while (i < nodes.length) {
    const items: { icon: NonNullable<LexicalNode["value"]>; label: string; value: string }[] = [];
    let j = i;

    while (j + 2 < nodes.length + 1) {
      const a = nodes[j];
      const b = nodes[j + 1];
      const c = nodes[j + 2];
      if (a?.type !== "upload" || !a.value) break;
      if (b?.type !== "heading" || b.tag !== "h3") break;
      if (c?.type !== "paragraph") break;
      const label = plainNodeText(b);
      const value = plainNodeText(c);
      if (!label || !value) break;
      items.push({ icon: a.value, label, value });
      j += 3;
    }

    if (items.length >= 2) {
      result.push({ type: "iconStatGrid", iconStats: items });
      i = j;
    } else {
      result.push(nodes[i]);
      i += 1;
    }
  }

  return result;
}

/**
 * The full journal spec sheet is: cover image + journal name + icon stats,
 * immediately followed by a "Key Highlights" heading + key/value table.
 * When both halves are present, combine them into the reference site's
 * two-column layout instead of rendering them as separate stacked blocks.
 */
function groupJournalSpecSection(nodes: LexicalNode[]): LexicalNode[] {
  const result: LexicalNode[] = [];
  let i = 0;

  while (i < nodes.length) {
    const cover = nodes[i];
    const nameHeading = nodes[i + 1];
    const iconGrid = nodes[i + 2];
    const highlightsHeading = nodes[i + 3];
    const table = nodes[i + 4];

    const matches =
      cover?.type === "upload" &&
      cover.value &&
      nameHeading?.type === "heading" &&
      plainNodeText(nameHeading) &&
      iconGrid?.type === "iconStatGrid" &&
      highlightsHeading?.type === "heading" &&
      plainNodeText(highlightsHeading) &&
      table?.type === "keyValueTable";

    if (matches) {
      result.push({
        type: "journalSpecSection",
        spec: {
          coverImage: cover.value,
          journalName: plainNodeText(nameHeading) ?? undefined,
          iconStats: iconGrid.iconStats ?? [],
          keyHighlightsTitle: plainNodeText(highlightsHeading) ?? "Key Highlights",
          pairs: table.pairs ?? [],
        },
      });
      i += 5;
    } else {
      result.push(nodes[i]);
      i += 1;
    }
  }

  return result;
}

/**
 * "Journey"-style posts encode a sequence of infographic steps as a long run
 * of consecutive image uploads (each caption baked into altText). Pubrica.com
 * renders these as a multi-column card grid rather than stacked full-width
 * images — collapse runs of 2+ consecutive images into a gallery grid node.
 */
function groupImageGallery(nodes: LexicalNode[]): LexicalNode[] {
  const result: LexicalNode[] = [];
  let i = 0;

  while (i < nodes.length) {
    const images: PayloadMedia[] = [];
    let j = i;

    while (j < nodes.length) {
      const node = nodes[j];
      if (node.type !== "upload" || !node.value || !node.value.mimeType?.startsWith("image/")) break;
      images.push(node.value);
      j += 1;
    }

    if (images.length >= 2) {
      result.push({ type: "imageGallery", images });
      i = j;
    } else {
      result.push(nodes[i]);
      i += 1;
    }
  }

  return result;
}

function renderChildren(nodes: LexicalNode[] | undefined): React.ReactNode {
  if (!nodes) return null;
  const grouped = groupImageGallery(
    groupJournalSpecSection(groupKeyValuePairs(groupIconStatTriples(nodes)))
  );
  return grouped.map((node, i) => renderNode(node, i));
}

function KeyValueTable({ pairs }: { pairs: { key: string; value: string }[] }) {
  return (
    <div className="my-6 bg-white border border-slate-200 rounded-lg overflow-hidden">
      {pairs.map((pair, i) => (
        <div
          key={i}
          className={`flex items-center justify-between gap-4 px-4 py-2.5 text-sm ${
            i % 2 === 1 ? "bg-slate-50" : ""
          } ${i !== 0 ? "border-t border-slate-100" : ""}`}
        >
          <span className="font-semibold text-slate-700">{pair.key}</span>
          <span className="text-right text-slate-600">{pair.value}</span>
        </div>
      ))}
    </div>
  );
}

function IconStatGrid({
  items,
}: {
  items: { icon: NonNullable<LexicalNode["value"]>; label: string; value: string }[];
}) {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((item, i) => {
        const iconSrc = mediaUrl(item.icon);
        return (
          <div key={i} className="flex items-start gap-2.5">
            {iconSrc && (
              <span className="relative w-8 h-8 flex-shrink-0 mt-0.5">
                <Image src={iconSrc} alt="" fill className="object-contain" />
              </span>
            )}
            <span>
              <span className="block text-xs font-bold text-slate-800">{item.label}</span>
              <span className="block text-xs text-slate-500 leading-snug">{item.value}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

const FILENAME_LIKE = /\.(png|jpe?g|webp|gif|svg)$/i;

function ImageGallery({ images }: { images: PayloadMedia[] }) {
  const items = images
    .map((img) => {
      const src = mediaUrl(img);
      if (!src) return null;
      const caption = img.altText || img.title || "";
      return { title: FILENAME_LIKE.test(caption) ? "" : caption, img: src };
    })
    .filter((item): item is { title: string; img: string } => item !== null);

  return (
    <div className="my-6">
      <ImageLightboxGrid items={items} />
    </div>
  );
}

function renderNode(node: LexicalNode, key: number): React.ReactNode {
  switch (node.type) {
    case "text":
      return renderText(node, key);

    case "linebreak":
      return <br key={key} />;

    case "paragraph":
      return (
        <p key={key} className="mb-4 text-sm md:text-base leading-relaxed text-slate-700">
          {renderChildren(node.children)}
        </p>
      );

    case "heading": {
      const Tag = (node.tag || "h2") as keyof React.JSX.IntrinsicElements;
      const headingClasses: Record<string, string> = {
        h1: "text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 mt-6",
        h2: "text-xl md:text-2xl font-bold text-slate-900 mb-3 mt-8",
        h3: "text-lg md:text-xl font-bold text-slate-900 mb-3 mt-6",
        h4: "text-base md:text-lg font-bold text-slate-900 mb-2 mt-4",
        h5: "text-sm md:text-base font-bold text-slate-900 mb-2 mt-4",
        h6: "text-sm font-bold text-slate-900 mb-2 mt-4",
      };
      return (
        <Tag key={key} className={headingClasses[node.tag || "h2"]}>
          {renderChildren(node.children)}
        </Tag>
      );
    }

    case "keyValueTable":
      return <KeyValueTable key={key} pairs={node.pairs ?? []} />;

    case "iconStatGrid":
      return <IconStatGrid key={key} items={node.iconStats ?? []} />;

    case "imageGallery":
      return <ImageGallery key={key} images={node.images ?? []} />;

    case "journalSpecSection": {
      const spec = node.spec;
      if (!spec) return null;
      const coverSrc = mediaUrl(spec.coverImage);
      return (
        <div key={key} className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: cover image + journal specs */}
          <div>
            {coverSrc && (
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-slate-200 mb-4">
                <Image src={coverSrc} alt={spec.journalName || "Journal cover"} fill className="object-cover" />
              </div>
            )}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              {spec.journalName && (
                <h4 className="text-sm font-bold text-slate-800 mb-3">{spec.journalName}</h4>
              )}
              <IconStatGrid items={spec.iconStats} />
            </div>
          </div>

          {/* Right: Key Highlights table + CTA */}
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h4 className="text-base font-bold text-slate-900 mb-4">{spec.keyHighlightsTitle}</h4>
            <KeyValueTable pairs={spec.pairs} />
            <Link
              href="/contact"
              className="mt-4 block text-center bg-[#004d40] hover:bg-[#00332a] text-white text-xs font-bold uppercase tracking-wide py-3 rounded-md transition-colors"
            >
              Click here to download
            </Link>
          </div>
        </div>
      );
    }

    case "list": {
      const Tag = node.tag === "ol" ? "ol" : "ul";
      const listClass =
        Tag === "ol"
          ? "mb-4 list-decimal pl-6 space-y-1.5 text-sm md:text-base text-slate-700"
          : "mb-4 list-disc pl-6 space-y-1.5 text-sm md:text-base text-slate-700";
      return (
        <Tag key={key} className={listClass}>
          {renderChildren(node.children)}
        </Tag>
      );
    }

    case "listitem":
      return <li key={key}>{renderChildren(node.children)}</li>;

    case "link": {
      const href = node.fields?.url || "#";
      const newTab = node.fields?.newTab;
      return (
        <a
          key={key}
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="text-[#004d40] font-medium underline hover:text-[#00332a]"
        >
          {renderChildren(node.children)}
        </a>
      );
    }

    case "upload": {
      const src = mediaUrl(node.value ?? null);
      if (!src) return null;

      const isImage = node.value?.mimeType?.startsWith("image/") ?? false;
      const isPdf = node.value?.mimeType === "application/pdf";

      if (isPdf) {
        return (
          <span key={key} className="block my-6">
            <span className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-t-lg px-4 py-2">
              <span className="text-xs font-medium text-slate-600 truncate">
                📄 {node.value?.title || node.value?.filename || "PDF document"}
              </span>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#004d40] underline hover:text-[#00332a] flex-shrink-0 ml-3"
              >
                Open in new tab
              </a>
            </span>
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(src)}&embedded=true`}
              title={node.value?.title || node.value?.filename || "PDF preview"}
              className="w-full h-[600px] border border-t-0 border-slate-200 rounded-b-lg"
            />
          </span>
        );
      }

      if (!isImage) {
        return (
          <a
            key={key}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="my-4 flex items-center gap-2 text-sm font-medium text-[#004d40] underline hover:text-[#00332a]"
          >
            📎 {node.value?.title || node.value?.filename || "Download attachment"}
          </a>
        );
      }

      const width = node.value?.width || 800;
      const height = node.value?.height || 450;
      return (
        <span key={key} className="block relative my-6 rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={node.value?.altText || node.value?.title || ""}
            width={width}
            height={height}
            className="w-full h-auto object-cover rounded-lg"
          />
        </span>
      );
    }

    case "table":
      return (
        <div key={key} className="my-6 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>{renderChildren(node.children)}</tbody>
          </table>
        </div>
      );

    case "tablerow":
      return <tr key={key}>{renderChildren(node.children)}</tr>;

    case "tablecell": {
      const isHeader = Number(node.headerState ?? 0) !== 0;
      const Tag = isHeader ? "th" : "td";
      return (
        <Tag
          key={key}
          colSpan={node.colSpan && node.colSpan > 1 ? node.colSpan : undefined}
          rowSpan={node.rowSpan && node.rowSpan > 1 ? node.rowSpan : undefined}
          className={`border border-slate-200 px-4 py-2.5 align-top text-slate-700 ${
            isHeader ? "bg-slate-50 font-semibold text-left" : ""
          }`}
        >
          {renderChildren(node.children)}
        </Tag>
      );
    }

    case "quote":
      return (
        <blockquote
          key={key}
          className="my-6 border-l-4 border-[#004d40] pl-4 italic text-slate-600 text-sm md:text-base"
        >
          {renderChildren(node.children)}
        </blockquote>
      );

    default:
      return node.children ? (
        <React.Fragment key={key}>{renderChildren(node.children)}</React.Fragment>
      ) : null;
  }
}

function headingText(node: LexicalNode): string {
  return (node.children ?? [])
    .filter((c) => c.type === "text")
    .map((c) => c.text ?? "")
    .join("")
    .trim();
}

function normalizeForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/^q\s*[:.]?\s*/, "")
    .replace(/^\d+[.)]\s*/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Payload post content commonly repeats the post title as its own leading H1.
 * Since every detail page already renders the title separately, drop that
 * leading heading here so it isn't shown (or excerpted) twice.
 */
function getBodyChildren(content?: LexicalContent | null, title?: string): LexicalNode[] {
  let children = content?.root?.children ?? [];

  // Q&A forum posts open with a "Q & A Forum | <Topic>" marker paragraph,
  // then repeat the question as a heading prefixed with "Q: ". Some posts in
  // this dataset have content merged in from other Q&A entries (multiple
  // unrelated "Q:" headings before the real one) — search for the heading
  // that actually matches this post's title and start there, rather than
  // assuming it's immediately after the marker.
  const marker = children[0];
  const markerText = marker?.type === "paragraph" ? headingText(marker).toLowerCase() : "";
  if (markerText.startsWith("q & a forum") || markerText.startsWith("q&a forum")) {
    if (title) {
      const normalizedTitle = normalizeForMatch(title);
      const matchIndex = children.findIndex(
        (node, i) => i > 0 && node.type === "heading" && normalizeForMatch(headingText(node)).includes(normalizedTitle)
      );
      if (matchIndex !== -1) {
        return children.slice(matchIndex + 1);
      }
    }
    return children.slice(1);
  }

  const first = children[0];
  if (
    title &&
    first?.type === "heading" &&
    first.tag === "h1" &&
    headingText(first).toLowerCase() === title.trim().toLowerCase()
  ) {
    children = children.slice(1);
  }
  return children;
}

export function LexicalRenderer({ content, title }: { content?: LexicalContent | null; title?: string }) {
  const children = getBodyChildren(content, title);
  if (children.length === 0) return null;
  return <div>{renderChildren(children)}</div>;
}

/** Walk lexical JSON and pull the first `maxLen` characters of plain text, for card excerpts. */
export function extractExcerpt(content?: LexicalContent | null, maxLen = 160, title?: string): string {
  const children = getBodyChildren(content, title);
  if (children.length === 0) return "";

  let text = "";
  function walk(node: LexicalNode) {
    if (text.length >= maxLen) return;
    if (node.type === "text" && node.text) {
      text += (text ? " " : "") + node.text;
    }
    node.children?.forEach(walk);
  }
  children.forEach(walk);

  text = text.replace(/\s+/g, " ").trim();
  return text.length > maxLen ? `${text.slice(0, maxLen).trim()}…` : text;
}

/**
 * Some migrated posts have their title baked twice into seo.metaDescription
 * (e.g. "Title Title Actual summary…"), a data artifact from the source CMS.
 * Strip a leading title repeated once or twice so the card copy reads clean.
 */
function stripLeadingTitle(text: string, title?: string): string {
  if (!title) return text;
  const t = title.trim();
  const doubled = `${t} ${t}`;
  if (text.toLowerCase().startsWith(doubled.toLowerCase())) {
    return text.slice(doubled.length).trim();
  }
  if (text.toLowerCase().startsWith(t.toLowerCase())) {
    return text.slice(t.length).trim();
  }
  return text;
}

/** Best-effort short description for a post card: cleaned SEO description, falling back to the body excerpt. */
export function getDescription(post: Pick<PayloadPost, "title" | "seo" | "content">, maxLen = 160): string {
  const raw = post.seo?.metaDescription?.trim();
  if (raw) {
    const cleaned = stripLeadingTitle(raw, post.title);
    if (cleaned) return cleaned.length > maxLen ? `${cleaned.slice(0, maxLen).trim()}…` : cleaned;
  }
  return extractExcerpt(post.content, maxLen, post.title);
}
