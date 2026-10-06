import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail, Menu, X, ChevronUp } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { siteConfig } from './data/siteConfig';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(window.location.pathname);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const handleRoute = () => setRoute(window.location.pathname);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('popstate', handleRoute);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  useEffect(() => {
    const handlePointerEnter = () => setIsHoveringLink(true);
    const handlePointerLeave = () => setIsHoveringLink(false);
    const linkNodes = document.querySelectorAll('a, button');
    linkNodes.forEach((node) => {
      node.addEventListener('mouseenter', handlePointerEnter);
      node.addEventListener('mouseleave', handlePointerLeave);
    });

    return () => {
      linkNodes.forEach((node) => {
        node.removeEventListener('mouseenter', handlePointerEnter);
        node.removeEventListener('mouseleave', handlePointerLeave);
      });
    };
  }, [route]);

  useEffect(() => {
    document.body.classList.toggle('custom-cursor-enabled', window.innerWidth > 900);
  }, []);

  if (route === '/admin') {
    return <AdminPage />;
  }

  return (
    <>
      <div className={`cursor-dot ${isHoveringLink ? 'hovering' : 'active'}`} style={{ left: cursor.x, top: cursor.y }} />

      <div id="top" className="relative overflow-hidden">
        <div className="site-shell pt-5 pb-8">
          <header className="sticky top-4 z-50 mb-4">
            <div className="mx-auto flex w-full max-w-[1220px] items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-xl">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="display-font text-lg tracking-[0.22rem] text-white/90 transition hover:text-white"
              >
                MR.
              </button>

              <button
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-[0.62rem] uppercase tracking-[0.28rem] text-white/80 transition hover:border-[#f5c98b]/40 hover:text-white"
              >
                <span>Menu</span>
                <Menu size={14} className="transition group-hover:rotate-90" />
              </button>
            </div>
          </header>

          <nav className={`fixed inset-0 z-[60] flex-col bg-[#070707]/95 ${menuOpen ? 'flex' : 'hidden'}`}>
            <div className="flex items-center justify-between p-5 md:p-8">
              <div className="display-font text-lg tracking-[0.2rem] text-white/90">MR.</div>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-white/10 p-3 text-white/80 transition hover:border-[#f5c98b]/40 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center px-6">
              <div className="flex w-full max-w-5xl flex-col gap-6 md:gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="display-font text-[2.2rem] leading-none tracking-[-0.07em] text-white/90 transition hover:text-[#f5c98b] md:text-[5rem]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center px-6 pb-8 text-[0.6rem] uppercase tracking-[0.26rem] text-white/60 md:pb-12">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f5c98b] shadow-[0_0_18px_rgba(245,201,139,0.8)]" />
                Available for creative projects
              </span>
            </div>
          </nav>
        </div>

        <main>
          <section className="site-shell relative pb-16 pt-8 md:pb-28 md:pt-0">
            <div className="mb-6 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.3rem] text-white/60">
              <span>Creative AI Developer</span>
              <span className="hidden md:inline">Pakistan</span>
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="mb-5 text-[0.68rem] uppercase tracking-[0.38rem] text-[#f5c98b]">Creative AI Developer</div>

                <h1 className="display-font text-[3.3rem] leading-[0.86] tracking-[-0.07em] text-white md:text-[6.5rem] lg:text-[7.2rem]">
                  MUHAMMAD
                  <span className="block text-white/87">REHAN</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  className="mt-6 max-w-xl text-base text-white/70 md:text-lg"
                >
                  I create intelligent digital experiences where AI, technology, and visual design meet.
                </motion.p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className="magnetic inline-flex items-center gap-2 rounded-full border border-[#f5c98b]/40 bg-[#f5c98b]/10 px-6 py-3 text-[0.7rem] uppercase tracking-[0.28rem] text-[#f5dca6] transition hover:border-[#f5c98b]/70 hover:bg-[#f5c98b]/20"
                  >
                    Explore Work
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="magnetic inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-[0.7rem] uppercase tracking-[0.28rem] text-white/80 transition hover:border-white/20 hover:text-white"
                  >
                    Let's Talk
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5 text-[0.62rem] uppercase tracking-[0.3rem] text-white/50">
                  <span>Scroll to explore</span>
                  <span>↓</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="relative"
              >
                <div className="pointer-events-none absolute -left-8 top-16 h-52 w-52 rounded-full bg-[#f5c98b]/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 shadow-soft">
                  <div className="image-sheen relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src={siteConfig.profileImage}
                      alt="Muhammad Rehan portrait"
                      className="h-[560px] w-full object-cover object-center grayscale-[0.08] contrast-[1.08] md:h-[640px]"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-5 rotate-[-10deg] rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[0.58rem] uppercase tracking-[0.28rem] text-white/70 backdrop-blur-md">
                  AI / WEB / CREATIVE TECHNOLOGY
                </div>
              </motion.div>
            </div>
          </section>

          <div className="marquee mb-20 md:mb-28">
            <div className="marquee-track">
              {[...Array(2)].flatMap(() => [
                'AI Development',
                'Web Development',
                'Creative Technology',
                'UI / UX',
                'AI Automation',
                'Digital Experiences',
              ])}
                .map((item, index) => (
                  <div key={`${item}-${index}`} className="marquee-item">
                    {item}
                  </div>
                ))}
            </div>
          </div>

          <section id="about" className="site-shell py-8 md:py-14">
            <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="section-label">Introduction</div>
                <h2 className="display-font text-[2.5rem] leading-[0.88] tracking-[-0.07em] text-white md:text-[4.3rem]">
                  I DON'T JUST BUILD WEBSITES.
                  <span className="block text-white/80">I BUILD DIGITAL EXPERIENCES.</span>
                </h2>
              </div>
              <p className="max-w-lg text-base text-white/70 md:text-lg">
                {siteConfig.aboutParagraph}
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div {...fadeUp} className="story-figure relative rounded-[2rem] border border-white/10 bg-[#111111] p-2">
                <img src={siteConfig.profileSecondary} alt="Muhammad Rehan profile portrait" className="h-[500px] w-full rounded-[1.45rem] object-cover object-center" />
              </motion.div>

              <motion.div {...fadeUp} className="grid gap-6">
                <div className="panel rounded-[2rem] p-6 md:p-8">
                  <div className="section-label">Creative Focus</div>
                  <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
                    I enjoy experimenting with AI, web technologies, creative tools, and digital experiences that are both expressive and useful.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="panel rounded-[1.4rem] p-5">
                    <div className="display-font text-4xl text-[#f5c98b]">01</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.2rem] text-white/70">Creative direction</p>
                  </div>
                  <div className="panel rounded-[1.4rem] p-5">
                    <div className="display-font text-4xl text-[#f5c98b]">02</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.2rem] text-white/70">Product design</p>
                  </div>
                  <div className="panel rounded-[1.4rem] p-5">
                    <div className="display-font text-4xl text-[#f5c98b]">03</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.2rem] text-white/70">Creative development</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="work" className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="mb-10 flex items-end justify-between gap-4">
              <div>
                <div className="section-label">Selected work</div>
                <h2 className="display-font text-[2.5rem] leading-[0.9] tracking-[-0.07em] text-white md:text-[4rem]">
                  DIGITAL WORK
                  <span className="block text-white/80">WITH INTENT.</span>
                </h2>
              </div>
            </motion.div>

            <div className="space-y-10 md:space-y-14">
              {siteConfig.projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  {...fadeUp}
                  className={`project-card grid overflow-hidden rounded-[2rem] md:grid-cols-2 ${index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}
                >
                  <div className="relative min-h-[320px] overflow-hidden md:min-h-[470px]">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-10">
                    <div>
                      <div className="mb-5 flex items-center justify-between text-[0.66rem] uppercase tracking-[0.28rem] text-white/60">
                        <span>{project.number}</span>
                        <span>Project</span>
                      </div>

                      <h3 className="display-font text-[2.4rem] leading-[0.8] tracking-[-0.065em] text-white md:text-[4rem]">
                        {project.title.split(' ').slice(0, 2).join(' ')}
                        <span className="block text-white/80">{project.title.split(' ').slice(2).join(' ') || ''}</span>
                      </h3>

                      <p className="mt-5 max-w-md text-base text-white/70">{project.description}</p>
                    </div>

                    <div className="mt-8">
                      <div className="mb-5 flex flex-wrap gap-2 text-[0.6rem] uppercase tracking-[0.22rem] text-white/55">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a href={project.liveUrl} className="magnetic inline-flex items-center gap-2 rounded-full border border-[#f5c98b]/40 bg-[#f5c98b]/10 px-4 py-2 text-[0.66rem] uppercase tracking-[0.22rem] text-[#f5dca6] transition hover:bg-[#f5c98b]/20">
                          View Project
                          <ArrowRight size={14} />
                        </a>
                        <a href={project.githubUrl} className="magnetic inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[0.66rem] uppercase tracking-[0.22rem] text-white/80 transition hover:border-white/20 hover:text-white">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="mb-8">
              <div className="section-label">Visual journal</div>
              <h2 className="display-font text-[2.4rem] leading-[0.9] tracking-[-0.07em] text-white md:text-[4rem]">
                VISUAL
                <span className="block text-white/80">JOURNAL</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <motion.div {...fadeUp} className="story-figure rounded-[2rem] border border-white/10 bg-[#111111] p-2">
                <img src={siteConfig.photoJournal[0]} alt="Muhammad Rehan portrait collage" className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[620px]" />
              </motion.div>

              <div className="grid gap-5">
                <motion.div {...fadeUp} className="story-figure rounded-[2rem] border border-white/10 bg-[#111111] p-2">
                  <img src={siteConfig.photoJournal[1]} alt="Muhammad Rehan portrait detail" className="h-[280px] w-full rounded-[1.5rem] object-cover md:h-[320px]" />
                </motion.div>
                <motion.div {...fadeUp} className="grid gap-5 sm:grid-cols-2">
                  <div className="story-figure rounded-[2rem] border border-white/10 bg-[#111111] p-2">
                    <img src={siteConfig.photoJournal[2]} alt="Muhammad Rehan portrait detail" className="h-[220px] w-full rounded-[1.5rem] object-cover" />
                  </div>
                  <div className="story-figure rounded-[2rem] border border-white/10 bg-[#111111] p-2">
                    <img src={siteConfig.photoJournal[3]} alt="Muhammad Rehan portrait detail" className="h-[220px] w-full rounded-[1.5rem] object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="mb-8">
              <div className="section-label">Skill set</div>
              <h2 className="display-font text-[2.5rem] leading-[0.9] tracking-[-0.07em] text-white md:text-[4rem]">
                CORE
                <span className="block text-white/80">CAPABILITIES</span>
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {siteConfig.skills.map((skill) => (
                <motion.div key={skill.name} {...fadeUp} className="skill-pill rounded-[1.7rem] p-5">
                  <div>
                    <div className="display-font text-[2rem] tracking-[-0.06em] text-white md:text-[2.3rem]">{skill.name}</div>
                    <div className="mt-2 text-[0.62rem] uppercase tracking-[0.24rem] text-white/55">{skill.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="services" className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="mb-10">
              <div className="section-label">What I build</div>
              <h2 className="display-font text-[2.4rem] leading-[0.9] tracking-[-0.07em] text-white md:text-[4rem]">
                STRATEGY.
                <span className="block text-white/80">DESIGN.</span>
                <span className="block text-white/80">TECHNOLOGY.</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {siteConfig.services.map((service) => (
                <motion.div key={service.id} {...fadeUp} className="panel rounded-[1.5rem] px-5 py-4 md:px-7 md:py-5">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <span className="display-font text-xl text-[#f5c98b]">{service.number}</span>
                      <h3 className="display-font text-2xl tracking-[-0.05em] text-white md:text-3xl">{service.title}</h3>
                    </div>
                    <p className="max-w-2xl text-sm text-white/70 md:text-base">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="mb-8">
              <div className="section-label">Process</div>
              <h2 className="display-font text-[2.3rem] leading-[0.9] tracking-[-0.07em] text-white md:text-[4rem]">
                HOW I MOVE
                <span className="block text-white/80">FROM IDEA TO IMPACT</span>
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-4">
              {siteConfig.process.map((step, index) => (
                <motion.div key={step.id} {...fadeUp} className="panel rounded-[1.7rem] p-5 md:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="display-font text-5xl text-[#f5c98b]">0{index + 1}</span>
                    <span className="text-[0.62rem] uppercase tracking-[0.24rem] text-white/50">Step</span>
                  </div>
                  <h3 className="display-font text-[1.7rem] tracking-[-0.05em] text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="mb-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <div className="section-label">Personal brand</div>
                <h2 className="display-font text-[2.5rem] leading-[0.88] tracking-[-0.07em] text-white md:text-[4rem]">
                  CURIOUS BY NATURE.
                  <span className="block text-white/80">CREATIVE BY DEFAULT.</span>
                </h2>
              </div>
              <p className="max-w-xl text-base text-white/70 md:text-lg">
                I’m driven by experimentation, visual craft, and product thinking. My work sits at the intersection of AI, design, and digital product experiences — always focused on clarity, emotion, and utility.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="story-figure rounded-[2rem] border border-white/10 bg-[#111111] p-2">
              <img src={siteConfig.profileImage} alt="Muhammad Rehan portrait" className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[500px]" />
            </motion.div>
          </section>

          <section className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="panel noise-overlay rounded-[2rem] p-8 md:p-12">
              <div className="display-font text-[2.8rem] leading-[0.82] tracking-[-0.07em] text-white md:text-[5.8rem]">
                LET'S TURN
                <span className="block text-white/80">AN IDEA</span>
                <span className="block text-white/80">INTO SOMETHING</span>
                <span className="block text-[#f5c98b]">REAL.</span>
              </div>

              <div className="mt-8 flex justify-start">
                <a href="#contact" className="magnetic inline-flex items-center gap-2 rounded-full border border-[#f5c98b]/40 bg-[#f5c98b]/10 px-6 py-3 text-[0.7rem] uppercase tracking-[0.28rem] text-[#f5dca6] transition hover:bg-[#f5c98b]/20">
                  Let's Talk
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </section>

          <section id="contact" className="site-shell py-10 md:py-16">
            <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="section-label">Contact</div>
                <h2 className="display-font text-[2.5rem] leading-[0.9] tracking-[-0.07em] text-white md:text-[4rem]">
                  HAVE A PROJECT
                  <span className="block text-white/80">IN MIND?</span>
                </h2>

                <div className="mt-8 space-y-4">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white">
                    <Mail size={16} className="text-[#f5c98b]" />
                    {siteConfig.email}
                  </a>
                  {siteConfig.socials.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white">
                      <ExternalLink size={16} className="text-[#f5c98b]" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <ContactForm />
            </motion.div>
          </section>
        </main>

        <footer className="site-shell pb-10 pt-10 md:pt-14">
          <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="display-font text-2xl tracking-[-0.05em] text-white">MUHAMMAD REHAN</div>
              <div className="mt-2 text-sm text-white/60">Creative AI Developer &amp; Digital Creator</div>
              <div className="mt-2 text-sm text-white/60">Pakistan</div>
            </div>

            <div className="flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.26rem] text-white/60">
              <a href="#top" className="inline-flex items-center gap-2 hover:text-white">Back to Top <ChevronUp size={14} /></a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <div>© 2026 Muhammad Rehan</div>
            <div className="flex gap-4">
              {siteConfig.socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [busy, setBusy] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please complete all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError('Please provide a valid email address.');
      return;
    }

    if (trimmedMessage.length < 10) {
      setError('Your message needs to be at least 10 characters long.');
      return;
    }

    setBusy(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setSuccess(data.message || 'Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to send message.';
      setError(message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel rounded-[2rem] p-5 md:p-7">
      <div className="grid gap-5">
        <label className="grid gap-2 text-[0.72rem] uppercase tracking-[0.26rem] text-white/60">
          Name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none transition focus:border-[#f5c98b]/60"
            placeholder="Your name"
            aria-label="Name"
          />
        </label>

        <label className="grid gap-2 text-[0.72rem] uppercase tracking-[0.26rem] text-white/60">
          Email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none transition focus:border-[#f5c98b]/60"
            placeholder="your@email.com"
            aria-label="Email"
          />
        </label>

        <label className="grid gap-2 text-[0.72rem] uppercase tracking-[0.26rem] text-white/60">
          Message
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none transition focus:border-[#f5c98b]/60"
            placeholder="Tell me about your idea..."
            aria-label="Message"
          />
        </label>

        {error && <p className="text-sm text-[#fca5a5]">{error}</p>}
        {success && <p className="text-sm text-[#86efac]">{success}</p>}

        <button
          type="submit"
          disabled={busy}
          className="magnetic inline-flex w-fit items-center gap-2 rounded-full border border-[#f5c98b]/40 bg-[#f5c98b]/10 px-6 py-3 text-[0.7rem] uppercase tracking-[0.28rem] text-[#f5dca6] transition hover:bg-[#f5c98b]/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? 'Sending...' : 'Send Message'}
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/admin/messages', {
        headers: {
          Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Invalid admin credentials.');
      }

      const data = await response.json();
      setMessages(data);
      setIsLoggedIn(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load messages.');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setMessages([]);
    setPassword('');
    setUsername('');
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070707] px-4">
        <form onSubmit={login} className="panel w-full max-w-md rounded-[2rem] p-6 md:p-8">
          <div className="display-font text-3xl tracking-[-0.06em] text-white">Admin Access</div>
          <p className="mt-2 text-sm text-white/60">View submitted contact messages.</p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-[0.68rem] uppercase tracking-[0.24rem] text-white/60">
              Username
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none focus:border-[#f5c98b]/60" />
            </label>

            <label className="grid gap-2 text-[0.68rem] uppercase tracking-[0.24rem] text-white/60">
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none focus:border-[#f5c98b]/60" />
            </label>

            {error && <p className="text-sm text-[#fca5a5]">{error}</p>}

            <button type="submit" className="magnetic inline-flex items-center justify-center rounded-full border border-[#f5c98b]/40 bg-[#f5c98b]/10 px-5 py-3 text-[0.7rem] uppercase tracking-[0.26rem] text-[#f5dca6] transition hover:bg-[#f5c98b]/20">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="display-font text-3xl tracking-[-0.06em] text-white">Contact Messages</div>
            <p className="mt-2 text-sm text-white/60">Protected admin area.</p>
          </div>
          <button onClick={logout} className="rounded-full border border-white/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.26rem] text-white/70 transition hover:border-white/20 hover:text-white">
            Logout
          </button>
        </div>

        {messages.length === 0 ? (
          <div className="panel rounded-[2rem] p-8 text-white/70">No messages yet.</div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="panel rounded-[2rem] p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="display-font text-2xl tracking-[-0.04em] text-white">{message.name}</div>
                  <div className="text-xs uppercase tracking-[0.22rem] text-white/50">{new Date(message.createdAt).toLocaleString()}</div>
                </div>
                <div className="mt-3 text-sm text-[#f5c98b]">{message.email}</div>
                <p className="mt-5 whitespace-pre-wrap text-base text-white/75">{message.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
