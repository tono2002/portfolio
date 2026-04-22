export const meta = {
  name: 'Tono Abad',
  role: 'Data Science & AI',
  school: 'IE University',
  email: 'tono.abad@student.ie.edu',
  github: 'https://github.com/tono2002',
  linkedin: 'https://linkedin.com/in/tono-abad',
};

export const about = {
  bio: `I'm a <strong>Data Science & AI student</strong> at IE University passionate about building
  intelligent systems and turning raw data into meaningful insights.
  I enjoy working at the intersection of <strong>machine learning</strong> and
  <strong>product development</strong> — writing clean code and shipping things that work.`,
  stats: [
    { value: 'IE', label: 'University' },
    { value: '2026', label: 'Graduation' },
    { value: '5+', label: 'Projects built' },
    { value: 'ML', label: 'Focus area' },
  ],
  highlights: [
    { title: 'IE University', subtitle: 'B.Sc. Data Science & AI' },
    { title: 'Machine Learning', subtitle: 'Supervised & Unsupervised' },
    { title: 'Full-Stack', subtitle: 'Python · React · SQL' },
    { title: 'Open to Work', subtitle: 'Internships & Projects' },
  ],
};

export const projects = [
  {
    id: 1,
    emoji: '🤖',
    title: 'No-Show Killer',
    description: 'ML model that predicts patient no-shows in medical appointments, helping clinics reduce wasted slots and optimize scheduling.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/tono2002/no-show-killer',
    demo: '',
  },
  {
    id: 2,
    emoji: '📊',
    title: 'Pokémon Data Viz',
    description: 'Interactive data visualization dashboard exploring the full Pokémon dataset — stats, types, and generations through dynamic charts.',
    tech: ['Python', 'Plotly', 'Jupyter', 'Pandas'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    emoji: '💼',
    title: 'Portfolio',
    description: 'This portfolio — built with React and Framer Motion, designed for smooth scroll-driven animations inspired by Apple\'s aesthetic.',
    tech: ['React', 'Framer Motion', 'Vite', 'CSS'],
    github: 'https://github.com/tono2002/portfolio',
    demo: '',
  },
  {
    id: 4,
    emoji: '📈',
    title: 'Iberdrola Datathon',
    description: 'Participated in the Iberdrola Datathon 2026 — built a predictive model for energy demand forecasting under competitive conditions.',
    tech: ['Python', 'XGBoost', 'Pandas', 'NumPy'],
    github: '',
    demo: '',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'R'],
  },
  {
    group: 'Data & ML',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Plotly'],
  },
  {
    group: 'Web',
    items: ['React', 'Vite', 'HTML', 'CSS', 'Framer Motion'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'Streamlit'],
  },
];
