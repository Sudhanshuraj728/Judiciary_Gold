import { motion } from 'framer-motion';

const steps = [
  { title: 'Register', description: 'Enroll into a guided judiciary program with a clear roadmap and mentor access.' },
  { title: 'Learn', description: 'Build conceptual clarity through premium live classes and curated legal explanations.' },
  { title: 'Practice', description: 'Strengthen recall and problem solving with daily MCQs, writing drills, and legal exercises.' },
  { title: 'Mock Tests', description: 'Measure readiness through timed assessments and in-depth performance review.' },
  { title: 'Interview', description: 'Develop presence, reasoning, and judicial temperament with mock panel sessions.' },
  { title: 'Become Judge', description: 'Step into the final stage prepared, confident, and selection-ready.' },
];

export default function LearningJourney() {
  return (
    <section id="journey" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Learning Journey</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A vertical path designed to turn focused effort into courtroom-ready performance.</h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold/60 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="relative md:grid md:grid-cols-2 md:items-center md:gap-10"
                >
                  <div className={`${isLeft ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}>
                    <div className="ml-14 rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-luxe md:ml-0">
                      <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Step 0{index + 1}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
                    </div>
                  </div>

                  <div className={`absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm font-semibold text-gold shadow-glow md:left-1/2 md:-translate-x-1/2 ${isLeft ? '' : 'md:col-start-2'}`}>
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}