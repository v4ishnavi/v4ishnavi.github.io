import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="detail">
      <h1>Lost?</h1>
      <p className="copy">
        This page doesn’t exist. <Link href="/">Head home →</Link>
      </p>
      <p className="copy">
        Or, while you’re here: <Link href="/play/">play a game?</Link>
      </p>
    </main>
  );
}
