import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

const stats = [
  { label: '110K+ Learners', value: '110K+' },
  { label: '500+ Selections', value: '500+' },
  { label: '7 Centres', value: '7' },
  { label: 'Daily Live Classes', value: 'Live' },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="absolute inset-0 premium-grid opacity-[0.12]" />
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-gold/12 to-transparent" />

      {!shouldReduceMotion ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { left: '14%', top: '18%', delay: 0 },
            { left: '24%', top: '72%', delay: 0.7 },
            { left: '68%', top: '14%', delay: 1.1 },
            { left: '82%', top: '56%', delay: 0.4 },
            { left: '54%', top: '8%', delay: 1.6 },
          ].map((particle, index) => (
            <motion.span
              key={index}
              className="absolute h-2 w-2 rounded-full bg-gold/80 shadow-[0_0_18px_rgba(200,162,58,0.65)]"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -18, 0], opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
              transition={{ duration: 4.6, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      ) : null}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
          >
            <FiStar className="text-gold" />
            Trusted judiciary coaching for ambitious aspirants
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Crack Judiciary Exams with India&apos;s Trusted Judiciary Coaching Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            Build exam-ready confidence with expert faculty, live doubt clearing, structured mock tests, and results-focused mentorship designed for Civil Judge and Judicial Services aspirants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton href="#courses">
              Explore Courses
              <FiArrowRight />
            </MagneticButton>
            <MagneticButton href="#results" secondary>
              <FiPlay />
              Watch Success Story
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3 text-sm text-white/55"
          >
            {['Live classes with recorded access', 'Weekly mock court tests', 'Personal mentorship'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#191919] to-[#0c0c0c] p-5 shadow-luxe lg:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,58,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />

            <div className="relative grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.75rem] border border-white/8 bg-black/35 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/45">Judiciary Masterclass</span>
                  <span className="rounded-full border border-gold/30 px-3 py-1 text-[11px] font-semibold text-gold">Live Now</span>
                </div>

                <div className="mt-5 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                  <div className="flex items-center justify-center">
                    <div className="relative h-56 w-full max-w-[320px] rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(200,162,58,0.22),transparent_28%),linear-gradient(180deg,#131313,#090909)]">
                      <div className="absolute inset-x-5 top-5 h-px bg-white/10" />
                      <div className="absolute inset-x-10 top-12 h-24 rounded-[1.25rem] border border-white/8 bg-white/4" />
                      <div className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full border border-gold/30 bg-white/4" />
                      <div className="absolute left-1/2 top-12 h-2 w-24 -translate-x-1/2 rounded-full bg-gold/50" />
                      <div className="absolute bottom-12 left-1/2 h-14 w-24 -translate-x-1/2 rounded-t-[1.5rem] border-x border-t border-gold/40 bg-gradient-to-b from-[#d5b35a] to-[#7a5a21] shadow-[0_0_30px_rgba(200,162,58,0.25)]" />
                      <div className="absolute bottom-16 left-1/2 h-24 w-2 -translate-x-1/2 rounded-full bg-gold/75" />
                      <div className="absolute bottom-24 left-1/2 h-px w-44 -translate-x-1/2 bg-gold/60" />
                      <div className="absolute bottom-16 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border border-gold/40" />
                      <div className="absolute bottom-16 left-[calc(50%-76px)] h-16 w-12 rounded-[0.8rem] border border-white/15 bg-white/4" />
                      <div className="absolute bottom-16 left-[calc(50%+64px)] h-16 w-12 rounded-[0.8rem] border border-white/15 bg-white/4" />
                      <div className="absolute left-6 top-10 h-32 w-3 rounded-full bg-gradient-to-b from-gold/70 via-white/10 to-transparent" />
                      <div className="absolute right-6 top-10 h-32 w-3 rounded-full bg-gradient-to-b from-gold/70 via-white/10 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">Batch Progress</p>
                  <p className="mt-3 text-4xl font-semibold text-white">92%</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-gold to-[#efd68c]" />
                  </div>
                  <p className="mt-3 text-sm text-white/58">Syllabus completion across Prelims, Mains, and Interview preparation.</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">Next Intake</p>
                  <p className="mt-3 text-2xl font-semibold text-white">April 2026</p>
                  <p className="mt-2 text-sm text-white/58">Hybrid weekday and weekend schedules available across 7 centres.</p>
                </motion.div>
              </div>
            </div>

            <div className="relative mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.45 + index * 0.08 }}
                  className="glass-panel rounded-[1.3rem] px-4 py-4 text-center shadow-luxe"
                >
                  <p className="text-lg font-semibold text-gold">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/55">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 top-16 hidden rounded-2xl glass-panel px-4 py-3 shadow-luxe lg:block"
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">Live Feedback</p>
            <p className="mt-1 text-sm font-medium text-white">Sectional tests reviewed daily</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}