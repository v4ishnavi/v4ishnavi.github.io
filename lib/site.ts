export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const profile = {
  name: 'Vaishnavi Shivkumar',
  short: 'Vaishnavi',
  email: 'vaishnavishivkumar0@gmail.com',
  links: [
    {label: 'GitHub', url: 'https://github.com/v4ishnavi'},
    {label: 'Substack', url: 'https://vaishnavishivkumar.substack.com'},
    {label: 'LinkedIn', url: 'https://www.linkedin.com/in/vaishnavi-shivkumar-546036258/'},
    {label: 'Email', url: 'mailto:vaishnavishivkumar0@gmail.com'},
    {label: 'CV', url: `${basePath}/resume.pdf`},
    {label: 'Pinterest', url: 'https://in.pinterest.com/vaisham1234/', mode: 'life'},
    {label: 'Letterboxd', url: 'https://boxd.it/ngMcf', mode: 'life'},
    {label: 'Goodreads', url: 'https://www.goodreads.com/vaishnavishivkumar', mode: 'life'},
    {label: 'Spotify', url: 'https://open.spotify.com/user/87i3xa5szokivi7efj548l81v', mode: 'life'},
  ] as {label: string; url: string; mode?: 'life'}[],
};

export const publications = [
  {
    title: 'Adapting Multilingual Models to Code-Mixed Tasks via Model Merging',
    authors: 'P. Kodali, V. Shivkumar, S. Joshi, M. Choudhury, P. Kumaraguru, M. Shrivastava',
    venue: 'CODS 2025',
    url: 'https://arxiv.org/abs/2510.19782',
    image: '/images/code-mixed.jpg',
  },
  {
    title: 'OPIUM: Mitigating Steering Externalities and Over-Refusal via Dual Objective Latent Optimization',
    authors: 'K. Aravindan, A. Rastogi, A. Prasad, K. Aneja, S. Jain, V. Shivkumar, P. Kumaraguru',
    venue: 'ICML 2026 Mech Interp Workshop',
    url: 'https://openreview.net/forum?id=AKgB9rKPNp',
    image: '/images/opium.jpg',
  },
  {
    title: 'MetaGMT: Improving Actionable Interpretability of Graph Multilinear Networks via Meta-Learning Filtration',
    authors: 'R. Bhattacharya, H. Shankar, V. Shivkumar, P. Kumaraguru',
    venue: 'Preprint 2025',
    url: 'https://arxiv.org/abs/2505.19445',
    image: '/images/metagmt.jpg',
  },
];

export const experience = [
  {org: 'Mastercard AI Garage', role: 'Data Scientist I', when: '2026 – now', note: 'ASI 2.0: data, retraining, packaging, and platform migration for worldwide deployment.'},
  {org: 'Precog Lab, IIIT Hyderabad', role: 'Undergraduate Researcher', when: '2024 – now', note: 'Advised by Prof. Ponnurangam Kumaraguru.'},
  {org: 'Mastercard AI Garage', role: 'Research Intern', when: '2025', note: 'Graph-based fraud detection. 106% fraud GDR improvement, US patent filed, pre-placement offer.'},
  {org: 'Signal Processing Research Centre, IIITH', role: 'Independent Research', when: '2025', note: 'Advised by Prof. Santosh Nannuru.'},
  {org: 'Celebal Technologies', role: 'ML Intern', when: '2023', note: 'NILM and early sensor-fault detection.'},
];

// Teaching and club work, shown in "professional" mode.
export const contributions = [
  {role: 'Teaching Assistant', org: 'Responsible and Safe AI Systems', when: '2026', note: 'Mentored student projects aimed at WACV and ICLR.'},
  {role: 'AI safety fundamentals workshop', org: 'GSFCU', when: '2026', note: 'Hosted a two-day workshop as part of the Responsible and Safe AI Systems course.'},
  {role: 'Teaching Assistant', org: 'Introduction to Film Studies', when: '2025', note: ''},
  {role: 'Teaching Assistant', org: 'Introduction to Statistical Signal Processing', when: '2025', note: 'Under Prof. Santosh Nannuru.'},
  {role: 'Apex Body Member', org: 'IIIT Hyderabad', when: '2024 – 2025', note: ''},
  {role: 'Apex Mentor', org: 'IIIT Hyderabad', when: '2023 – 2024', note: 'Helped introduce incoming students to the institute.'},
  {role: 'Content Writing Head', org: 'Felicity, IIIT Hyderabad', when: '2023 – 2025', note: 'Wrote for Felicity’24, then led the fest’s content writing team.'},
  {role: 'Creative Works Member', org: 'LitClub', when: '2022 – 2024', note: 'Led two treasure hunts with 400+ participants each.'},
  {role: 'Member', org: 'The Music Club', when: '2023 – 2024', note: 'Social media, design and finance teams for Meltdown’24, the club’s annual metal event.'},
  {role: 'Member of Parliament', org: 'Students’ Parliament', when: '2023 – 2024', note: 'Hostel, PR and internal affairs committees.'},
  {role: 'Management and Tech Team', org: 'Electronics and Robotics Club', when: '2022 – 2024', note: ''},
];

// Non-research things, shown in "life" mode.
export const otherThings: {title: string; note: string; url?: string; image?: string}[] = [
  {title: 'Chief Editor, Ping!', note: 'IIIT Hyderabad’s student publication.', url: 'https://pingiiit.org/'},
  {title: 'nature-of-code', note: 'Generative art: Perlin flow fields, Voronoi, brown noise.', url: 'https://github.com/v4ishnavi/nature-of-code', image: '/images/nature-of-code.jpg'},
];
