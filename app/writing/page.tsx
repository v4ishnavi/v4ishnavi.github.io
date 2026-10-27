import type {Metadata} from 'next';
import Link from 'next/link';
import {writing} from '../../lib/posts';
import PingList from '../PingList';
import PostRow from '../PostRow';

export const metadata: Metadata = {title: 'Writing'};

const groups = [
  {mode: 'research', title: 'On research', note: 'Longer, more technical essays.'},
  {mode: 'life', title: 'On life', note: 'Letters and the occasional song.'},
] as const;

export default function WritingIndex() {
  return (
    <main className="detail">
      <Link className="back" href="/">
        ← home
      </Link>
      <h1>Writing</h1>
      <p className="copy">
        Everything I’ve published on{' '}
        <a href="https://vaishnavishivkumar.substack.com" target="_blank" rel="noreferrer">
          vaishnavishivkumar
        </a>{' '}
        and{' '}
        <a href="https://tacksforsnaccs.substack.com" target="_blank" rel="noreferrer">
          tacksforsnaccs
        </a>
        .
      </p>
      {groups.map((g) => (
        <section key={g.mode}>
          <div className="head">
            <h2>{g.title}</h2>
            <span className="soft">{g.note}</span>
          </div>
          <ul className="rows">
            {writing
              .filter((p) => p.mode === g.mode)
              .map((p) => (
                <li key={p.slug}>
                  <PostRow p={p} detail={'external' in p ? p.publication : `${p.readingMinutes} min read${p.subtitle && ` · ${p.subtitle}`}`} />
                </li>
              ))}
          </ul>
          {g.mode === 'life' && (
            <p className="copy more">
              For more, head to my{' '}
              <a href="https://tacksforsnaccs.substack.com" target="_blank" rel="noreferrer">
                Substack ↗
              </a>
            </p>
          )}
        </section>
      ))}
      <section>
        <div className="head">
          <h2>For Ping!</h2>
          <span className="soft">IIIT Hyderabad’s student publication</span>
        </div>
        <PingList />
      </section>
    </main>
  );
}
