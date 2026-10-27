import type {Metadata} from 'next';
import Link from 'next/link';
import DinoGame from './DinoGame';

export const metadata: Metadata = {title: 'Play'};

export default function Play() {
  return (
    <main className="detail">
      <Link className="back" href="/">
        ← home
      </Link>
      <h1>Play a game?</h1>
      <DinoGame />
    </main>
  );
}
