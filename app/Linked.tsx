import {people} from '../lib/people';

const names = Object.keys(people).sort((a, b) => b.length - a.length);
const pattern = new RegExp(`(${names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

// Renders text with collaborators' names linked to their pages.
export default function Linked({text}: {text: string}) {
  return (
    <>
      {text.split(pattern).map((part, i) =>
        people[part] ? (
          <a key={i} href={people[part]} target="_blank" rel="noreferrer">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}
