import {formatDate, ping, pingAuthorUrl} from '../lib/posts';

export default function PingList() {
  const series = ping.filter((a) => a.designs);

  return (
    <>
      <ul className="ping">
        {ping.map((a) => (
          <li key={a.url}>
            <a className="ping-card" href={a.url} target="_blank" rel="noreferrer">
              {a.image && <img src={a.image} alt={`Cover design for ${a.title}`} loading="lazy" />}
              <strong>{a.title} ↗</strong>
              <small>
                {formatDate(a.date)} · {a.excerpt}
              </small>
            </a>
          </li>
        ))}
      </ul>
      {series.map((a) => (
        <div key={a.url}>
          <p className="soft designs-label">Articles within the {a.title.replace(/^The /, '')} series</p>
          <ul className="designs">
            {a.designs!.map((d) => (
              <li key={d.url}>
                <a href={d.url} target="_blank" rel="noreferrer">
                  <img src={d.image} alt={`Cover for ${d.title}`} loading="lazy" />
                  <span>{d.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="copy more">
        More on{' '}
        <a href={pingAuthorUrl} target="_blank" rel="noreferrer">
          Ping! ↗
        </a>
      </p>
    </>
  );
}
