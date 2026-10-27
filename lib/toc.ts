export type TocEntry = {id: string; text: string; level: 2 | 3};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Gives each h2/h3 in a post an id and returns them as a table of contents.
export function withToc(html: string): {html: string; toc: TocEntry[]} {
  const toc: TocEntry[] = [];
  const out = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g, (_, level, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
    let id = slugify(text) || `section-${toc.length + 1}`;
    if (toc.some((t) => t.id === id)) id += `-${toc.length + 1}`;
    toc.push({id, text, level: Number(level) as 2 | 3});
    return `<h${level}${attrs.replace(/\sid="[^"]*"/, '')} id="${id}">${inner}</h${level}>`;
  });
  return {html: out, toc};
}
