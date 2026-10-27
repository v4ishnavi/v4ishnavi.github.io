'use client';
import {useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

const current = (): Theme =>
  (document.documentElement.dataset.theme as Theme) ||
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(current()), []);

  const toggle = () => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  };

  return (
    <button className="theme" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
