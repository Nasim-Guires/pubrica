import React from 'react';
import Image from 'next/image';

export type ArticleBlock =
  | { type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; rows: string[][] }
  | { type: 'img'; src: string; alt?: string }
  | { type: 'faq'; items: { q: string; a: string }[] };

const LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const [, label, rawHref] = match;
    // Keep pubrica.com content links on our own domain instead of sending visitors to the live production site.
    const pubricaContentLink = rawHref.match(/^https?:\/\/(www\.)?pubrica\.com(\/(?!wp-content)[^\s]*)?\/?$/);
    const href = pubricaContentLink ? (pubricaContentLink[2] ? pubricaContentLink[2].replace(/\/$/, '') || '/' : '/') : rawHref;
    const isExternal = /^https?:\/\//.test(href);
    if (label) {
      nodes.push(
        <a
          key={`${keyPrefix}-l${i++}`}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={isExternal ? 'text-[#004d40] underline hover:text-[#00332a]' : 'text-blue-600 no-underline hover:no-underline'}
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

const HEADING_CLASS: Record<string, string> = {
  h1: 'text-2xl font-bold text-gray-900 mt-8 mb-4',
  h2: 'text-xl font-bold text-gray-900 mt-8 mb-4',
  h3: 'text-base font-semibold text-gray-800 mt-6 mb-3',
  h4: 'text-base font-semibold text-gray-800 mt-4 mb-2',
  h5: 'text-sm font-semibold text-gray-800 mt-4 mb-2',
  h6: 'text-sm font-semibold text-gray-800 mt-4 mb-2',
};

export default function ServiceArticleRenderer({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `b${i}`;
        switch (b.type) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return (
              <h2 key={key} id={slugifyHeading(b.text)} className={HEADING_CLASS[b.type]}>
                {renderInline(b.text, key)}
              </h2>
            );
          case 'p':
            return (
              <p key={key} className="text-gray-600 leading-relaxed text-sm mb-4">
                {renderInline(b.text, key)}
              </p>
            );
          case 'ul':
            return (
              <ul key={key} className="list-disc pl-5 space-y-1.5 text-gray-600 text-sm mb-4">
                {b.items.map((it, j) => (
                  <li key={`${key}-${j}`}>{renderInline(it, `${key}-${j}`)}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} className="list-decimal pl-5 space-y-1.5 text-gray-600 text-xs mb-4">
                {b.items.map((it, j) => (
                  <li key={`${key}-${j}`}>{renderInline(it, `${key}-${j}`)}</li>
                ))}
              </ol>
            );
          case 'table':
            return (
              <div key={key} className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
                      {b.rows[0]?.map((cell, j) => (
                        <th key={j} className="p-2 border border-gray-300">
                          {renderInline(cell, `${key}-h${j}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {b.rows.slice(1).map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className="p-2 border border-gray-300">
                            {renderInline(cell, `${key}-${r}-${c}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          // case 'img':
          //   return (
          //     <span key={key} className="block relative my-6 rounded-lg overflow-hidden aspect-[16/9]">
          //       <Image src={b.src} alt={b.alt || ''} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
          //     </span>
          //   );
          case 'faq':
            return (
              <div key={key} className="space-y-3 mb-4">
                {b.items.map((f, j) => (
                  <details key={j} className="bg-slate-50 rounded-lg border border-slate-100 p-4 group">
                    <summary className="text-sm font-semibold text-slate-800 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{f.q}</span>
                      <span className="text-slate-400 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                    </summary>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
