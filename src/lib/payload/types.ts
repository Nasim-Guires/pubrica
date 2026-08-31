export type PostSource = "blog" | "academy" | "career" | "insights" | "call-for-papers";

export interface PayloadMedia {
  id: number;
  title?: string | null;
  altText?: string | null;
  url: string;
  filename?: string | null;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface PayloadCategory {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  image?: PayloadMedia | null;
}

export interface PayloadTag {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
}

export interface LexicalNode {
  type: string;
  tag?: string;
  format?: string | number;
  text?: string;
  children?: LexicalNode[];
  fields?: {
    url?: string;
    newTab?: boolean;
    linkType?: string;
  };
  value?: PayloadMedia;
  relationTo?: string;
  /** Synthetic fields used by the renderer's content-grouping passes — not part of raw Payload content. */
  pairs?: { key: string; value: string }[];
  iconStats?: { icon: PayloadMedia; label: string; value: string }[];
  spec?: {
    coverImage?: PayloadMedia | null;
    journalName?: string;
    iconStats: { icon: PayloadMedia; label: string; value: string }[];
    keyHighlightsTitle: string;
    pairs: { key: string; value: string }[];
  };
  images?: PayloadMedia[];
  /** Table cell layout (Lexical's native table/tablerow/tablecell nodes). */
  colSpan?: number;
  rowSpan?: number;
  headerState?: number;
  /**
   * Synthetic field used only by the renderer's FAQ-recovery pass. Some
   * migrated posts lost their FAQ question text, keeping only the answer
   * paragraphs — see faqQuestionOverrides.json. When a recovered question
   * list is supplied and its length matches the answer-paragraph run, that
   * run is collapsed into one of these nodes instead of rendering as a wall
   * of unlabeled paragraphs.
   */
  faqTitle?: string;
  faqItems?: { question: string; answerNodes: LexicalNode[] }[];
}

export interface LexicalContent {
  root: LexicalNode;
}

export interface PayloadPost {
  id: number;
  title: string;
  source: PostSource;
  slug: string;
  urlPath?: string;
  jobType?: string[];
  heroImage?: PayloadMedia | null;
  author?: string | null;
  categories?: PayloadCategory[];
  tags?: PayloadTag[];
  content?: LexicalContent;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    metaKeywords?: string | null;
  };
  publishing?: {
    status?: string;
    publishedAt?: string;
  };
  updatedAt: string;
  createdAt: string;
}

export interface PayloadListResponse<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  limit: number;
}
