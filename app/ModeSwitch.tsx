'use client';
import {useEffect, useState} from 'react';
import type {Mode} from '../lib/posts';

function apply(mode: Mode) {
  document.documentElement.dataset.mode = mode;
  try {
    sessionStorage.setItem('mode', mode);
  } catch {}
}

export default function ModeSwitch() {
  const [mode, setMode] = useState<Mode>('research');

  useEffect(() => {
    setMode((document.documentElement.dataset.mode as Mode) || 'research');
    // Nav links that point at a section only visible in one mode switch to that mode.
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-mode-link]');
      if (!target) return;
      const next = target.dataset.modeLink as Mode;
      apply(next);
      setMode(next);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const choose = (next: Mode) => {
    apply(next);
    setMode(next);
  };

  return (
    <div className="switch" role="group" aria-label="What would you like to see?">
      <button className={mode === 'research' ? 'active' : ''} aria-pressed={mode === 'research'} onClick={() => choose('research')}>
        <span aria-hidden>◉</span> professional
      </button>
      <button className={mode === 'life' ? 'active' : ''} aria-pressed={mode === 'life'} onClick={() => choose('life')}>
        <span aria-hidden>✳</span> personal
      </button>
    </div>
  );
}
