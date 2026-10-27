import type {Metadata} from 'next';
import {Inter, Newsreader} from 'next/font/google';
import Link from 'next/link';
import ModeSwitch from './ModeSwitch';
import ThemeToggle from './ThemeToggle';
import {profile} from '../lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: {default: 'Vaishnavi Shivkumar', template: '%s · vaish.'},
  description: 'Research, writing and other things by Vaishnavi Shivkumar.',
};

const sans = Inter({subsets: ['latin'], variable: '--font-sans'});
const serif = Newsreader({subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic']});

// Runs before paint so a returning "life" visitor never sees the research view flash.
const modeScript = `try{var d=document.documentElement,m=new URLSearchParams(location.search).get('mode')||localStorage.getItem('mode'),t=localStorage.getItem('theme');if(m==='life'||m==='research')d.dataset.mode=m;if(t==='light'||t==='dark')d.dataset.theme=t}catch(e){}`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-mode="research" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: modeScript}} />
      </head>
      <body>
        <div className="shell">
          <header className="header">
            <Link className="logo" href="/">
              vaish<span>.</span>
            </Link>
            <nav aria-label="Main">
              <Link href="/#about">about</Link>
              <Link href="/#research" data-mode-link="research">research</Link>
              <Link href="/writing/">writing</Link>
              <Link href="/#stuff">stuff</Link>
              <ThemeToggle />
            </nav>
          </header>
          <ModeSwitch />
          {children}
          <footer>
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span className="soft">
              inspired by{' '}
              <a href="https://www.thariq.io/" target="_blank" rel="noreferrer">
                thariq.io
              </a>
              , edited with claude, designed by me :&gt;
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
