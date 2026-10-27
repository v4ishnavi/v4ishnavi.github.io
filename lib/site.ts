export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const profile = {
  name: 'Vaishnavi Shivkumar',
  short: 'Vaish',
  email: 'vaishnavishivkumar0@gmail.com',
  links: [
    {label: 'GitHub', url: 'https://github.com/v4ishnavi'},
    {label: 'Substack', url: 'https://vaishnavishivkumar.substack.com'},
    {label: 'LinkedIn', url: 'https://www.linkedin.com/in/vaishnavi-shivkumar-546036258/'},
    {label: 'Email', url: 'mailto:vaishnavishivkumar0@gmail.com'},
    {label: 'CV', url: `${basePath}/resume.pdf`},
  ],
};

export const publications = [
  {
    title: 'Adapting Multilingual Models to Code-Mixed Tasks via Model Merging',
    authors: 'P. Kodali, V. Shivkumar, S. Joshi, M. Choudhury, P. Kumaraguru, M. Shrivastava',
    venue: 'CODS 2025',
    url: 'https://arxiv.org/abs/2510.19782',
  },
  {
    title: 'OPIUM: Mitigating Steering Externalities and Over-Refusal via Dual Objective Latent Optimization',
    authors: 'K. Aravindan, A. Rastogi, A. Prasad, K. Aneja, S. Jain, V. Shivkumar, P. Kumaraguru',
    venue: 'ICML 2026 Mech Interp Workshop',
    url: 'https://openreview.net/forum?id=AKgB9rKPNp',
  },
  {
    title: 'MetaGMT: Improving Actionable Interpretability of Graph Multilinear Networks via Meta-Learning Filtration',
    authors: 'R. Bhattacharya, H. Shankar, V. Shivkumar, P. Kumaraguru',
    venue: 'Preprint 2025',
    url: 'https://arxiv.org/abs/2505.19445',
  },
];

export const experience = [
  {org: 'Mastercard AI Garage', role: 'Data Scientist I', when: '2026 – now', note: 'ASI 2.0: data, retraining, packaging, and platform migration for worldwide deployment.'},
  {org: 'Precog Lab, IIIT Hyderabad', role: 'Undergraduate Researcher', when: '2024 – now', note: 'Advised by Prof. Ponnurangam Kumaraguru.'},
  {org: 'Mastercard AI Garage', role: 'Research Intern', when: '2025', note: 'Graph-based fraud detection. 106% fraud GDR improvement, US patent filed, pre-placement offer.'},
  {org: 'Signal Processing Research Centre, IIITH', role: 'Independent Research', when: '2025', note: 'Advised by Prof. Santosh Nannuru.'},
  {org: 'Celebal Technologies', role: 'ML Intern', when: '2023', note: 'NILM and early sensor-fault detection.'},
];

// Non-research things, shown in "life" mode.
export const otherThings = [
  {title: 'Chief Editor, Student Media Body', note: 'Student journalism at IIIT Hyderabad.'},
  {title: 'Head of Content Writing, College Cultural Fest', note: ''},
  {title: 'TA, Introduction to Film Studies', note: ''},
  {title: 'Apex Council Head, Student Mentorship Body', note: ''},
  {title: 'PR Lead, Student Parliament', note: ''},
  {title: 'Philosophy group', note: 'Discussions about AI and AI safety, among other things.'},
  {title: 'nature-of-code', note: 'Generative art: Perlin flow fields, Voronoi, brown noise.', url: 'https://github.com/v4ishnavi/nature-of-code'},
];
