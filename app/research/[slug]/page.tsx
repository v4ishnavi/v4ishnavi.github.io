import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {research} from '../../../lib/research';
import Linked from '../../Linked';
import {basePath} from '../../../lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return research.map((r) => ({slug: r.slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const r = research.find((x) => x.slug === slug);
  return r ? {title: r.title, description: r.summary} : {};
}

export default async function ResearchPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const r = research.find((x) => x.slug === slug);
  if (!r) notFound();

  return (
    <main className="detail">
      <Link className="back" href="/#research">
        ← research
      </Link>
      <p className="label">
        {r.tags} · {r.status}
      </p>
      <h1>{r.title}</h1>
      <p className="intro">{r.summary}</p>
      {r.image && (
        <figure className="hero-fig">
          <img src={basePath + r.image.src} alt={r.image.caption} />
          <figcaption>{r.image.caption}</figcaption>
        </figure>
      )}
      <div className="prose">
        {r.details.map((d) => (
          <p key={d}>
            <Linked text={d} />
          </p>
        ))}
        {r.points && (
          <ul>
            {r.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {r.outro && <p>{r.outro}</p>}
      </div>
      {r.links && (
        <div className="links">
          {r.links.map((l) =>
            l.url.startsWith('/') ? (
              <Link key={l.url} href={l.url}>
                {l.label} →
              </Link>
            ) : (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ),
          )}
        </div>
      )}
    </main>
  );
}
