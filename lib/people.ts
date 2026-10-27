// Collaborators' pages. Any of these names in research details or publication authors becomes a link.
const pages: Record<string, string> = {
  'Makarand Tapaswi': 'https://makarandtapaswi.github.io/',
  'Saurav Prakash': 'https://scholar.google.com/citations?user=VhnTrugAAAAJ&hl=en',
  'Sheetal Kalyani': 'https://scholar.google.com/citations?user=NFyY2QIAAAAJ&hl=en',
  'Monojit Choudhury': 'https://mbzuai.ac.ae/academics/faculty-directory/monojit-choudhury',
  'Manish Shrivastava': 'https://scholar.google.com/citations?user=sIvMnGQAAAAJ&hl=en',
  'Praneeth Vepakomma': 'https://scholar.google.co.in/citations?user=T_mPgZIAAAAJ&hl=en',
  'Lav Varshney': 'https://scholar.google.com/citations?user=JIJGu30AAAAJ&hl=en',
};

// Author lists use initials ("M. Choudhury"), so match those too.
export const people: Record<string, string> = {...pages};
for (const [name, url] of Object.entries(pages)) {
  const [first, ...rest] = name.split(' ');
  people[`${first[0]}. ${rest.join(' ')}`] = url;
}
