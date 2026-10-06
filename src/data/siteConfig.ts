export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type SkillGroup = {
  name: string;
  description: string;
};

export const siteConfig = {
  name: 'Muhammad Rehan',
  title: 'Creative AI Developer & Digital Creator',
  location: 'Pakistan',
  intro:
    'I create intelligent digital experiences where AI, technology, and visual storytelling meet.',
  aboutParagraph:
    'I am Muhammad Rehan, a creative AI developer and digital creator focused on crafting modern digital experiences, intelligent web applications, and visually expressive brand systems. I enjoy combining design thinking with technology to build products that feel premium, human, and memorable.',
  profileImage: '/images/profile-photo.svg',
  profileSecondary: '/images/profile-photo-alt.svg',
  email: 'hello@rehan.example',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  instagram: 'https://instagram.com/yourusername',
  socials: [
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
    { label: 'Instagram', href: 'https://instagram.com/yourusername' },
  ],
  projects: [
    {
      id: 'portfolio',
      number: '01',
      title: 'Personal Portfolio',
      description: 'A cinematic portfolio concept combining editorial storytelling with product-grade UX and premium motion.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      liveUrl: '#contact',
      githubUrl: '#contact',
      image: '/images/project-1.svg',
    },
    {
      id: 'ai-apps',
      number: '02',
      title: 'AI-Powered Applications',
      description: 'Conceptual AI experiences designed to help teams automate workflows, augment creativity, and simplify decision-making.',
      tech: ['AI UX', 'Prompt Design', 'Automation', 'Web Apps'],
      liveUrl: '#contact',
      githubUrl: '#contact',
      image: '/images/project-2.svg',
    },
    {
      id: 'tailor-app',
      number: '03',
      title: 'Tailor Management App',
      description: 'A clean service workflow interface for small businesses managing orders, appointments, and customer communication.',
      tech: ['Dashboard', 'Wireframes', 'Frontend', 'UX'],
      liveUrl: '#contact',
      githubUrl: '#contact',
      image: '/images/project-3.svg',
    },
    {
      id: 'future-products',
      number: '04',
      title: 'Future Digital Products',
      description: 'Experimental digital product design focused on product clarity, motion, and brand identity.',
      tech: ['Creative Direction', 'Product Design', 'Prototype', 'Strategy'],
      liveUrl: '#contact',
      githubUrl: '#contact',
      image: '/images/project-4.svg',
    },
  ] as Project[],
  services: [
    { id: 'ai-web-apps', number: '01', title: 'AI Web Applications', description: 'Modern interfaces and AI experiences designed around real user flows.' },
    { id: 'modern-websites', number: '02', title: 'Modern Websites', description: 'Premium web experiences that balance storytelling, performance, and clarity.' },
    { id: 'ai-integration', number: '03', title: 'AI Integration', description: 'Smart product features that help businesses streamline operations and creativity.' },
    { id: 'ui-ux', number: '04', title: 'UI / UX', description: 'Thoughtful visual systems focused on conversion, clarity, and delight.' },
    { id: 'prompt-engineering', number: '05', title: 'Prompt Engineering', description: 'Human-centered AI workflow design for content and automation use cases.' },
    { id: 'ai-automation', number: '06', title: 'AI Automation', description: 'Practical automation ideas that reduce repetitive work without losing quality.' },
    { id: 'digital-products', number: '07', title: 'Digital Products', description: 'Product concepts and interactive experiences built for modern audiences.' },
    { id: 'creative-development', number: '08', title: 'Creative Development', description: 'Creative coding and motion systems that add a distinct point of view to digital brands.' },
  ] as Service[],
  skills: [
    { name: 'AI', description: 'AI workflows and product thinking' },
    { name: 'WEB', description: 'Responsive, modern web experiences' },
    { name: 'DESIGN', description: 'Visual systems and branding direction' },
    { name: 'AUTOMATION', description: 'Workflow efficiency and smart tools' },
    { name: 'PROMPTING', description: 'Prompt design and AI interaction' },
    { name: 'UI/UX', description: 'Design systems and interface craft' },
    { name: 'CREATIVE TECH', description: 'Creative coding and visual experimentation' },
    { name: 'JAVASCRIPT', description: 'Product-level front-end logic' },
  ] as SkillGroup[],
  process: [
    { id: 'discover', title: 'Discover', text: 'Understand the brief, users, and the emotional direction behind the idea.' },
    { id: 'design', title: 'Design', text: 'Shape the visual language and product structure into a clear, compelling system.' },
    { id: 'build', title: 'Build', text: 'Develop the actual digital experience with thoughtful interactions and performance.' },
    { id: 'refine', title: 'Refine', text: 'We polish the final details to ensure quality, impact, and usability.' },
  ],
  photoJournal: ['/images/journal-1.svg', '/images/journal-2.svg', '/images/journal-3.svg', '/images/journal-4.svg'],
};
