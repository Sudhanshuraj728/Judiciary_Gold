import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import ImageFrame from './ImageFrame';

const faculty = [
  {
    name: 'Adv. Rhea Malhotra',
    experience: '12+ Years Experience',
    subjects: 'Constitutional Law, CPC',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Vikram Joshi',
    experience: '15+ Years Experience',
    subjects: 'CrPC, Evidence, IPC',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Prof. Naina Kapoor',
    experience: '10+ Years Experience',
    subjects: 'Judgment Writing, Interview Prep',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Adv. Arjun Deshmukh',
    experience: '14+ Years Experience',
    subjects: 'Legal Aptitude, Current Affairs',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
];

const socials = [FiFacebook, FiInstagram, FiLinkedin, FiTwitter];

export default function FacultySection() {
  return (
    <section id="faculty" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Faculty</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Experienced mentors who teach with authority, clarity, and selection mindset.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {faculty.map((mentor, index) => (
            <motion.article
              key={mentor.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-luxe transition hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_26px_80px_rgba(200,162,58,0.14)]"
            >
              <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(200,162,58,0.22),transparent_32%),linear-gradient(180deg,#1b1b1b,#0b0b0b)] p-4">
                <ImageFrame
                  src={mentor.src}
                  alt={`${mentor.name} portrait`}
                  className="aspect-square w-full overflow-hidden rounded-full border border-gold/20 bg-white/5 shadow-glow"
                  imgClassName="rounded-full object-cover"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">{mentor.name}</h3>
              <p className="mt-2 text-sm text-white/60">{mentor.experience}</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{mentor.subjects}</p>

              <div className="mt-5 flex items-center gap-3 text-white/60">
                {socials.map((Icon, socialIndex) => (
                  <button
                    key={Icon.displayName || Icon.name}
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-gold/30 hover:text-gold"
                    aria-label={`Faculty social profile ${socialIndex + 1}`}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
