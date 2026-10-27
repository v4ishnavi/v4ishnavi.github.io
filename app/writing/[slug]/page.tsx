import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {formatDate, posts} from '../../../lib/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? {title: p.title, description: p.subtitle} : {};
}

export default async function WritingPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const i = posts.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = posts[i];
  // posts are newest first, so "newer" is the previous index.
  const sameMode = posts.filter((x) => x.mode === p.mode);
  const j = sameMode.indexOf(p);
  const newer = sameMode[j - 1];
  const older = sameMode[j + 1];

  return (
    <main className="detail">
      <Link className="back" href="/writing/">
        ← writing
      </Link>
      <p className="label">
        {formatDate(p.date)} · {p.readingMinutes} min read · {p.publication}
      </p>
      <h1 className="post-title">{p.title}</h1>
      {p.subtitle && p.subtitle !== p.title && <p className="intro">{p.subtitle}</p>}
      <article className="prose" dangerouslySetInnerHTML={{__html: p.html}} />
      <p className="original">
        Originally published on{' '}
        <a href={p.url} target="_blank" rel="noreferrer">
          {p.publication} ↗
        </a>
      </p>
      <nav className="pager" aria-label="More writing">
        {older ? <Link href={`/writing/${older.slug}/`}>← {older.title}</Link> : <span />}
        {newer ? <Link href={`/writing/${newer.slug}/`}>{newer.title} →</Link> : <span />}
      </nav>
    </main>
  );
}
