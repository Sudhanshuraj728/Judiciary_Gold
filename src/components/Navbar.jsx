import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Results', href: '#success-stories' },
  { label: 'Journey', href: '#journey' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));

    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled ? 'border-white/10 bg-black/35 shadow-luxe backdrop-blur-2xl' : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full gold-border bg-white/5 text-sm font-bold tracking-[0.32em] text-gold shadow-glow">
            JG
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/45">Premium Judiciary</p>
            <p className="text-base font-semibold text-white">Judiciary Gold</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <a
                href={item.href}
                className="text-sm text-white/70 transition hover:text-gold focus-visible:text-gold"
                aria-current={item.href === `#${activeId}` ? 'page' : undefined}
              >
                {item.label}
              </a>
              <motion.span
                animate={{ opacity: item.href === `#${activeId}` ? 1 : 0, scaleX: item.href === `#${activeId}` ? 1 : 0.5 }}
                className="absolute -bottom-2 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-full px-5 py-2 text-sm font-medium text-white/75 transition hover:text-gold">
            Login
          </a>
          <a
            href="#enroll"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black shadow-glow transition hover:translate-y-[-1px] hover:bg-[#d3b04e]"
          >
            Enroll Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full glass-panel text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl glass-panel px-4 py-4 shadow-luxe lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 rounded-full border border-white/10 px-4 py-3 text-center text-sm text-white/80">
                  Login
                </a>
                <a href="#enroll" className="flex-1 rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-black">
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}