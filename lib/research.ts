export type Link = {label: string; url: string};

export type ResearchItem = {
  slug: string;
  title: string;
  tags: string;
  status: string;
  summary: string;
  details: string[];
  points?: string[];
  outro?: string;
  links?: Link[];
  image?: {src: string; caption: string};
  current?: boolean;
  // Already listed under Publications on the homepage.
  published?: boolean;
};

// Ordered as they appear on the homepage.
export const research: ResearchItem[] = [
  {
    slug: 'my-job',
    current: true,
    title: 'My Job',
    tags: 'Data Scientist · Mastercard AI Garage',
    status: 'ongoing',
    summary: 'What my days at Mastercard AI Garage look like.',
    details: [],
    points: ['Working with Big Data', 'Designing and Deploying algorithms', 'Corporate Research'],
    outro: '... and other fintech things!',
  },
  {
    slug: 'time-in-video-models',
    current: true,
    title: 'Understanding Time in Video Models',
    tags: 'Temporal reasoning · Interpretability',
    status: 'ongoing',
    summary: 'Something is brewing :>',
    details: [
      'With Prof. Makarand Tapaswi and Prof. Ponnurangam Kumaraguru (PK).',
    ],
  },
  {
    slug: 'autonomous-driving',
    title: 'Autonomous Driving',
    tags: 'ICRA 2027 (under review)',
    status: 'past research',
    summary: 'More on this once the review is out.',
    details: [],
  },
  {
    slug: 'federated-fairness',
    title: 'Federated Learning & Fairness',
    tags: 'Heterogeneous systems · Resource constraints',
    status: 'past research',
    summary: 'Who benefits from federated learning when clients have very different resources?',
    details: [
      'Studied client-level fairness and allocative harms under heterogeneous resource constraints.',
      'With Praneeth Vepakomma, Lav Varshney and Saurav Prakash (UIUC).',
    ],
  },
  {
    slug: 'federated-efficiency',
    title: 'Efficient Federated Learning',
    tags: 'Resource-weak clients · Binarized models',
    status: 'past research',
    summary: 'Making federated learning cheaper for clients with little compute.',
    details: [
      'Looked at efficient learning for resource-weak settings, including binarized factor models.',
      'With Saurav Prakash and Sheetal Kalyani.',
    ],
  },
  {
    slug: 'code-mixed-model-merging',
    published: true,
    image: {src: '/images/code-mixed.jpg', caption: 'First page of the CODS 2025 paper.'},
    title: 'Code-Mixed Model Merging',
    tags: 'NLP · Model merging · CODS 2025',
    status: 'published',
    summary: 'Adapting multilingual models to code-mixed tasks via model merging.',
    details: [
      'Research on language model merging for code-mixed NLP, with a focus on representation alignment and drift, multilingual robustness, evaluation under distribution shift, and mitigating catastrophic forgetting.',
      'In collaboration with Prof. Manish Shrivastava (LTRC, IIITH) and Prof. Monojit Choudhury (MBZUAI).',
    ],
    links: [{label: 'arXiv', url: 'https://arxiv.org/abs/2510.19782'}],
  },
  {
    slug: 'opium',
    published: true,
    image: {src: '/images/opium.jpg', caption: 'Figure 1 from the OPIUM paper.'},
    title: 'OPIUM',
    tags: 'Steering · Over-refusal · ICML 2026 MI Workshop',
    status: 'workshop paper',
    summary: 'Mitigating steering externalities and over-refusal via dual-objective latent optimization.',
    details: [
      'Steering a model toward safer behaviour can come with externalities, including over-refusal. OPIUM addresses both with a dual-objective optimization in latent space.',
    ],
    links: [{label: 'OpenReview', url: 'https://openreview.net/forum?id=AKgB9rKPNp'}],
  },
  {
    slug: 'metagmt',
    published: true,
    image: {src: '/images/metagmt.jpg', caption: 'The MetaGMT pipeline (Figure 1 of the preprint).'},
    title: 'MetaGMT',
    tags: 'Graph ML · Explainability · Meta-learning',
    status: 'preprint',
    summary: 'Faithful, subgraph-level explanations for graph neural networks.',
    details: [
      'Developed explanation methods and evaluation protocols for GNNs, aiming for explanations that are faithful rather than merely plausible.',
      'A meta-learning filtration approach beat state-of-the-art metrics in homogeneous GNN explainability; we also adapted GSAT to heterogeneous graphs.',
    ],
    links: [
      {label: 'arXiv', url: 'https://arxiv.org/abs/2505.19445'},
      {label: 'Code', url: 'https://anonymous.4open.science/r/goddammit-sparky-F9DB/README.md'},
    ],
  },
  {
    slug: 'network-inference',
    image: {src: '/images/network-inference.jpg', caption: 'Error under partial observability as samples and processes scale.'},
    title: 'Inferring Hidden Networks',
    tags: 'Signal processing · Dynamical systems',
    status: 'research project',
    summary: 'Network inference from diffusion dynamics when part of the system is unobserved.',
    details: [
      'Studied deterministic network inference from diffusion and SI dynamics using LS2-style half-vectorized regression.',
      'Proposed a latent low-rank formulation for SI network inference under partial observability, and analysed identifiability and convergence.',
      'Independent project at the Signal Processing Research Centre, IIITH, advised by Prof. Santosh Nannuru.',
    ],
    links: [{label: 'GitHub', url: 'https://github.com/v4ishnavi/network-inference-po'}],
  },
];

export type Thing = {title: string; note: string; tag: string; url?: string; image?: string};

// Smaller projects, mostly course work and side quests.
export const stuff: Thing[] = [
  {title: 'Critical Evaluation of TinyStories', note: 'Auditing evaluation pipelines for duplication, vocabulary leakage and scoring artifacts.', tag: 'Advanced NLP', url: 'https://github.com/v4ishnavi/nvm-tinyStories', image: '/images/tinystories.jpg'},
  {title: 'Multi-Agent RL for E-Commerce Fulfillment', note: 'Graph autoencoders + DQNs, integrated with VRP solvers.', tag: 'Optimization for ML', url: 'https://github.com/v4ishnavi/MultiAgentLearningforRouting', image: '/images/marl.jpg'},
  {title: 'TeraAcc', note: 'Roadmap for a RISC-V accelerator for 1.58-bit BitNet LLMs on a ternary systolic array.', tag: 'Hardware for AI'},
  {title: 'Y86-64 Processor', note: 'Sequential and pipelined Y86-64 in modular Verilog.', tag: 'Processor Architecture', url: 'https://github.com/v4ishnavi/ipa-y86-verilog'},
  {title: 'Source Localization', note: '2D/3D emitter localization from sensor arrays, chirp analysis.', tag: 'Detection & Estimation', url: 'https://github.com/v4ishnavi/sdet-source-estimation-project', image: '/images/source-localization.jpg'},
  {title: 'Visualising Berman Codes', note: 'Manim animations explaining a generalization of Reed–Muller codes.', tag: 'Information & Comm.', url: 'https://github.com/v4ishnavi/IC-project-visualising-berman-codes'},
  {title: 'Echo Cancellation & Noise Classification', note: 'Classic signal processing on real audio.', tag: 'Signals & Systems', url: 'https://github.com/v4ishnavi/SP-project-2-1-iiith', image: '/images/echo-cancellation.jpg'},
  {title: 'Non-Intrusive Load Monitoring', note: 'Energy disaggregation with FFT and wavelets.', tag: 'Celebal internship', url: 'https://github.com/v4ishnavi/celebal-tech-NILM'},
  {title: 'Early Sensor Fault Prediction', note: 'Tree-based regressors predicting time to machine failure.', tag: 'Celebal internship', url: 'https://github.com/v4ishnavi/celebal-tech-early-fault-prediction'},
  {title: 'Paddy Disease Detection', note: 'Healthy vs. unhealthy paddy crops from leaf images.', tag: 'Megathon 2023', url: 'https://github.com/v4ishnavi/megathon-2023-cloned', image: '/images/paddy.jpg'},
  {title: '4-bit ALU', note: 'Built three times: Verilog, ngspice and Magic layout.', tag: 'VLSI Design', url: 'https://github.com/v4ishnavi/vlsi-d-alu', image: '/images/alu.jpg'},
];
