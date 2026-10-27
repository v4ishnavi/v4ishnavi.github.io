import type {Metadata} from 'next';
import Link from 'next/link';
import {OtherThings, StuffCards} from '../Stuff';

export const metadata: Metadata = {title: 'Stuff'};

export default function StuffIndex() {
  return (
    <main className="detail">
      <Link className="back" href="/">
        ← home
      </Link>
      <h1>Stuff</h1>
      <section>
        <h2>Stuff I’ve made</h2>
        <p className="copy">Course projects, internship work and small experiments, mostly on GitHub.</p>
        <StuffCards />
      </section>
      <section>
        <h2>Other things</h2>
        <OtherThings />
      </section>
    </main>
  );
}
