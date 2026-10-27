import Link from 'next/link';
import {formatDate, type ListedPost} from '../lib/posts';

// One row in a list of posts. Substack posts open their own page; posts published elsewhere link out.
export default function PostRow({p, detail}: {p: ListedPost; detail: string}) {
  const body = (
    <>
      <div>
        <strong>{p.title}</strong>
        <small>
          {formatDate(p.date)} · {detail}
        </small>
      </div>
      <span className="arrow">↗</span>
    </>
  );
  return 'external' in p ? (
    <a className="row" href={p.url} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <Link className="row" href={`/writing/${p.slug}/`}>
      {body}
    </Link>
  );
}
