import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiLayers, FiMonitor, FiStar } from 'react-icons/fi';

const courses = [
  {
    title: 'Judiciary Foundation Program',
    tag: 'For Prelims + Mains',
    price: '₹24,999',
    description: 'A complete base-building program covering constitutional law, CPC, CrPC, IPC, evidence, and answer writing foundations.',
    details: ['120+ live classes', 'Daily legal MCQs', 'Revision planners'],
    icon: FiLayers,
  },
  {
    title: 'Judiciary Test Series Elite',
    tag: 'For serious rankers',
    price: '₹9,999',
    description: 'Timed mock papers, descriptive answers, and expert evaluations designed to sharpen speed, accuracy, and legal writing.',
    details: ['Full-length mocks', 'Evaluator feedback', 'Rank tracking'],
    icon: FiMonitor,
  },
  {
    title: 'Interview & Personality Grooming',
    tag: 'Final stage mastery',
    price: '₹14,999',
    description: 'Premium interview preparation focused on judicial ethics, court procedure, case analysis, and confidence training.',
    details: ['Mock interviews', 'Panel mentoring', 'Courtroom etiquette'],
    icon: FiClock,
  },
];

export default function FeaturedCourses() {
  return (
    <section id="courses" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Featured Courses</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Luxury learning paths crafted for every stage of the judiciary journey.</h2>
          </div>

          <a href="#enroll" className="inline-flex items-center gap-2 text-sm font-medium text-gold transition hover:text-[#e2c66f]">
            View all programs
            <FiArrowRight />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const featured = index === 0;

            return (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-luxe transition hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_28px_90px_rgba(200,162,58,0.16)] ${
                  featured
                    ? 'border-gold/35 bg-[linear-gradient(145deg,rgba(200,162,58,0.22),rgba(255,255,255,0.03),rgba(12,12,12,0.98))]'
                    : 'border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))]'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,58,0.12),transparent_30%)] opacity-0 transition group-hover:opacity-100" />

                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-3">
                        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] ${featured ? 'border border-gold/25 bg-black/25 text-gold' : 'border border-gold/20 bg-gold/10 text-gold'}`}>
                          {course.tag}
                        </span>
                        {featured ? (
                          <span className="inline-flex rounded-full border border-gold/25 bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                            Flagship Course
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold text-white">{course.title}</h3>
                    </div>

                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-gold ${featured ? 'border-gold/30 bg-gold/15' : 'border-gold/20 bg-white/5'}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-white/62">{course.description}</p>

                  <div className="space-y-3">
                    {course.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 text-sm text-white/72">
                        <FiStar className="text-gold" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-white/42">Starting at</p>
                      <p className="mt-1 text-2xl font-semibold text-white">{course.price}</p>
                    </div>

                    <a
                      href="#enroll"
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-black shadow-glow transition hover:scale-105 ${featured ? 'bg-gradient-to-br from-gold via-[#f3dc93] to-[#b98f28]' : 'bg-gold'}`}
                      aria-label={`Enroll in ${course.title}`}
                    >
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
