import {basePath, otherThings} from '../lib/site';
import {stuff} from '../lib/research';

// Shared by the homepage and /stuff/.
export function StuffCards() {
  return (
    <ul className="cards">
      {/* Cards with a figure first, so rows pair up evenly. */}
      {[...stuff.filter((s) => s.image), ...stuff.filter((s) => !s.image)].map((s) => {
        const body = (
          <>
            {s.image && <img className="card-img" src={basePath + s.image} alt="" loading="lazy" />}
            <span className="tag">{s.tag}</span>
            <strong>{s.title}</strong>
            <small>{s.note}</small>
          </>
        );
        return (
          <li key={s.title}>
            {s.url ? (
              <a className="card" href={s.url} target="_blank" rel="noreferrer">
                {body}
              </a>
            ) : (
              <div className="card">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function OtherThings() {
  return (
    <ul className="rows">
      {otherThings.map((o) => (
        <li key={o.title}>
          {o.url ? (
            <a className="row pub" href={o.url} target="_blank" rel="noreferrer">
              {o.image && <img className="pub-thumb" src={basePath + o.image} alt="" loading="lazy" />}
              <div>
                <strong>{o.title}</strong>
                {o.note && <small>{o.note}</small>}
              </div>
              <span className="arrow">↗</span>
            </a>
          ) : (
            <div className="row static">
              <div>
                <strong>{o.title}</strong>
                {o.note && <small>{o.note}</small>}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
