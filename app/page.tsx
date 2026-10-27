import Link from 'next/link';
import {basePath, contributions, experience, profile, publications, teaching} from '../lib/site';
import {research, type ResearchItem} from '../lib/research';
import {writing, type ListedPost} from '../lib/posts';
import PingList from './PingList';
import PostRow from './PostRow';
import {OtherThings, StuffCards} from './Stuff';

function PostList({items}: {items: ListedPost[]}) {
  return (
    <ul className="rows">
      {items.map((p) => (
        <li key={p.slug}>
          <PostRow p={p} detail={'external' in p ? p.publication : `${p.readingMinutes} min read · ${p.publication}`} />
        </li>
      ))}
    </ul>
  );
}

function ContributionList({items}: {items: typeof teaching}) {
  return (
    <ul className="rows">
      {items.map((c) => (
        <li key={c.role + c.org} className="row static">
          <div>
            <strong>
              {c.role}, {c.org}
            </strong>
            {c.note && <small>{c.note}</small>}
          </div>
          <span className="when">{c.when}</span>
        </li>
      ))}
    </ul>
  );
}

function ResearchList({items}: {items: ResearchItem[]}) {
  return (
    <ol className="rows">
      {items.map((r, i) => (
        <li key={r.slug}>
          <Link className="row" href={`/research/${r.slug}/`}>
            <span className="index">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <strong>{r.title}</strong>
              <small>{r.tags}</small>
            </div>
            <span className="arrow">↗</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const professional = writing.filter((p) => p.mode === 'research');
  // The full list is on /writing/; these two stay off the homepage.
  const hiddenOnHome = ['repertoire', 'wanna-come-to-my-house-to-play'];
  const personal = writing.filter((p) => p.mode === 'life' && !hiddenOnHome.includes(p.slug));

  return (
    <main>
      <section className="hero" id="about">
        <div className="hero-top">
          <div>
            <p className="name">{profile.name}</p>
            <h1>Hello, I’m {profile.short}!</h1>
          </div>
          <Link className="portrait-link" href="/play/" title="wanna play a game?">
            <img className="portrait only-research" src={`${basePath}/vaishnavi-research.jpg`} alt={profile.name} width={600} height={600} />
            <img className="portrait only-life" src={`${basePath}/vaishnavi-life.jpg`} alt={profile.name} width={600} height={800} />
          </Link>
        </div>

        <div className="only-research">
          <p className="intro">
            I think about how machines learn to understand the world, and occasionally write about understanding my own.
          </p>
          <p className="copy">
            Currently exploring temporal reasoning, interpretability, and video models. Before that: code-mixed NLP, federated
            learning fairness, graph explainability and network inference.
          </p>
        </div>
        <div className="only-life">
          <p className="intro">
            Writing, reading, tinkering, dilly dallying.
          </p>
          <p className="copy">
            Other interests: literature, philosophy &amp; extroversion escapades.
          </p>
        </div>

        <dl className="status">
          <dt>Previously</dt>
          <dd>B.Tech (Honours) in ECE, IIIT Hyderabad · Precog Lab</dd>
          <dt>Currently</dt>
          <dd>Data Scientist, Mastercard AI Garage</dd>
        </dl>

        <div className="links">
          {profile.links.map((l) => (
            <a key={l.url} className={l.mode ? `only-${l.mode}` : undefined} href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      </section>

      <section id="research" className="only-research">
        <h2>What I’m working on</h2>
        <ResearchList items={research.filter((r) => r.current)} />
      </section>

      <section className="only-research">
        <h2>Publications</h2>
        <ul className="rows">
          {publications.map((p) => (
            <li key={p.title}>
              <a className="row pub" href={p.url} target="_blank" rel="noreferrer">
                <img className="pub-thumb" src={basePath + p.image} alt="" loading="lazy" />
                <div>
                  <strong>{p.title}</strong>
                  <small>
                    {p.authors} · <em>{p.venue}</em>
                  </small>
                </div>
                <span className="arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="only-research">
        <h2>Other past research</h2>
        <ResearchList items={research.filter((r) => !r.current && !r.published)} />
      </section>

      <section id="writing">
        <div className="head">
          <h2>Writing</h2>
          <Link className="soft" href="/writing/">
            all posts →
          </Link>
        </div>
        <div className="only-research">
          <PostList items={professional} />
          <p className="copy">
            More technical essays on the way. The personal writing lives under <button className="inline" data-mode-link="life">✳ personal</button>.
          </p>
        </div>
        <div className="only-life">
          <PostList items={personal} />
          <p className="copy">
            For more, head to my{' '}
            <a href="https://tacksforsnaccs.substack.com" target="_blank" rel="noreferrer">
              Substack ↗
            </a>
          </p>
        </div>
      </section>

      <section className="only-life" id="ping">
        <div className="head">
          <h2>Student journalism</h2>
          <span className="soft">for Ping!, IIIT Hyderabad’s student publication</span>
        </div>
        <PingList />
      </section>

      <section className="only-research">
        <h2>Experience</h2>
        <ul className="rows">
          {experience.map((e) => (
            <li key={e.org + e.role} className="row static">
              <div>
                <strong>
                  {e.role}, {e.org}
                </strong>
                <small>{e.note}</small>
              </div>
              <span className="when">{e.when}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="only-research">
        <h2>Teaching &amp; other contributions</h2>
        <ContributionList items={teaching} />
        <details className="more-toggle">
          <summary>More</summary>
          <ContributionList items={contributions} />
        </details>
      </section>

      <section id="stuff">
        <div className="head">
          <h2 className="only-research">Stuff I’ve made</h2>
          <h2 className="only-life">Other things</h2>
          <Link className="soft" href="/stuff/">
            all stuff →
          </Link>
        </div>
        <div className="only-research">
          <p className="copy">Course projects, internship work and small experiments, mostly on GitHub.</p>
          <StuffCards />
        </div>
        <div className="only-life">
          <OtherThings />
        </div>
      </section>
      <p className="only-life play-link">
        <Link href="/play/">play a game?</Link>
      </p>
    </main>
  );
}
