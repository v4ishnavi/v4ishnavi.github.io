import {formatDate, ping, pingAuthorUrl} from '../lib/posts';

export default function PingList() {
  return (
    <>
      <ul className="rows">
        {ping.map((a) => (
          <li key={a.url}>
            <a className="row" href={a.url} target="_blank" rel="noreferrer">
              <div>
                <strong>{a.title}</strong>
                <small>
                  {formatDate(a.date)} · {a.excerpt}
                </small>
              </div>
              <span className="arrow">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="copy more">
        All of it on{' '}
        <a href={pingAuthorUrl} target="_blank" rel="noreferrer">
          Ping! ↗
        </a>
      </p>
    </>
  );
}
