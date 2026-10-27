// Pulls every post from the Substack RSS feeds into content/posts.json.
// Run with `npm run sync` whenever something new is published, then commit the JSON.
import {writeFile, mkdir} from 'node:fs/promises';

const FEEDS = [
  {publication: 'tacksforsnaccs', url: 'https://tacksforsnaccs.substack.com/feed', mode: 'life'},
  {publication: 'vaishnavi shivkumar', url: 'https://vaishnavishivkumar.substack.com/feed', mode: 'research'},
];

// Posts whose mode differs from their publication's default.
const MODE_OVERRIDES = {
  'the-girlboss-dad': 'life',
};

const cdata = (s) => s?.replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, '$1').trim() ?? '';
const tag = (item, name) => cdata(item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]);

// Removes every element opened by `openRe`, including nested children of the same tag.
function removeElements(html, openRe, tagName) {
  let out = html;
  let m;
  while ((m = openRe.exec(out))) {
    const start = m.index;
    const tokenRe = new RegExp(`<(/?)${tagName}\\b[^>]*>`, 'g');
    tokenRe.lastIndex = start;
    let depth = 0;
    let end = out.length;
    let t;
    while ((t = tokenRe.exec(out))) {
      depth += t[1] ? -1 : 1;
      if (depth === 0) {
        end = tokenRe.lastIndex;
        break;
      }
    }
    out = out.slice(0, start) + out.slice(end);
    openRe.lastIndex = 0;
  }
  return out;
}

function clean(html) {
  let out = html;
  out = removeElements(out, /<div class="subscription-widget-wrap[^"]*"/g, 'div');
  out = removeElements(out, /<div class="image-link-expand"/g, 'div');
  out = removeElements(out, /<div class="captioned-button-wrap"/g, 'div');
  out = out.replace(/<script[\s\S]*?<\/script>/gi, '');
  out = out.replace(/<form[\s\S]*?<\/form>/gi, '');
  out = out.replace(/<button[\s\S]*?<\/button>/gi, '');
  out = out.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  out = out.replace(/\son\w+="[^"]*"/gi, '');
  out = out.replace(/<p>\s*(<span>)?\.?(<\/span>)?\s*<\/p>/g, (m) => (m.includes('.') ? m : ''));
  return out.trim();
}

const toText = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&#?\w+;/g, ' ').replace(/\s+/g, ' ').trim();

async function readFeed({publication, url, mode}) {
  const res = await fetch(url, {headers: {'User-Agent': 'Mozilla/5.0 (vaish site sync)'}});
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  const xml = await res.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  return items.map((item) => {
    const link = tag(item, 'link');
    const slug = link.split('/p/')[1]?.replace(/\/$/, '');
    const html = clean(tag(item, 'content:encoded'));
    const words = toText(html).split(' ').length;
    return {
      slug,
      title: tag(item, 'title').trim(),
      subtitle: tag(item, 'description').trim(),
      date: new Date(tag(item, 'pubDate')).toISOString().slice(0, 10),
      url: link,
      publication,
      mode: MODE_OVERRIDES[slug] ?? mode,
      cover: item.match(/<enclosure url="([^"]+)"/)?.[1] ?? null,
      readingMinutes: Math.max(1, Math.round(words / 230)),
      html,
    };
  });
}

const posts = (await Promise.all(FEEDS.map(readFeed))).flat();
const slugs = new Set();
for (const p of posts) {
  if (slugs.has(p.slug)) throw new Error(`Duplicate slug across feeds: ${p.slug}`);
  slugs.add(p.slug);
}
posts.sort((a, b) => b.date.localeCompare(a.date));

await mkdir(new URL('../content/', import.meta.url), {recursive: true});
await writeFile(new URL('../content/posts.json', import.meta.url), JSON.stringify(posts, null, 2) + '\n');
console.log(`Synced ${posts.length} posts:`);
for (const p of posts) console.log(`  ${p.date}  [${p.mode}]  ${p.title}`);
