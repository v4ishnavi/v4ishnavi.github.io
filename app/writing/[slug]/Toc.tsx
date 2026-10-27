'use client';
import {useEffect, useState} from 'react';
import type {TocEntry} from '../../../lib/toc';

// Side index for long posts. Highlights the section you're reading.
export default function Toc({entries}: {entries: TocEntry[]}) {
  const [active, setActive] = useState(entries[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = entries[0]?.id;
      for (const e of entries) {
        const el = document.getElementById(e.id);
        if (el && el.getBoundingClientRect().top < 140) current = e.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, [entries]);

  return (
    <aside className="toc" aria-label="Contents">
      <div>
        <p className="toc-title">Contents</p>
        <ol>
          {entries.map((e) => (
            <li key={e.id} className={`${e.level === 3 ? 'sub' : ''} ${e.id === active ? 'active' : ''}`}>
              <a href={`#${e.id}`}>{e.text}</a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
