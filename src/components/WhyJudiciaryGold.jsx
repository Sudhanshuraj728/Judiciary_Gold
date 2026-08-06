import { motion } from 'framer-motion';
import { FiBook, FiCheckCircle, FiLayers, FiShield } from 'react-icons/fi';

const reasons = [
  {
    icon: FiShield,
    title: 'Judiciary-first curriculum',
    description: 'Every module is aligned to Civil Judge, District Judge, and Judicial Services exam patterns with legal precision.',
  },
  {
    icon: FiLayers,
    title: 'Structured learning path',
    description: 'Concept classes, answer writing, mock interviews, and revision tracks are connected into one premium journey.',
  },
  {
    icon: FiBook,
    title: 'Rich legal study material',
    description: 'Refer to curated notes, landmark judgments, subject summaries, and daily current affairs built for legal aptitude.',
  },
  {
    icon: FiCheckCircle,
    title: 'Selection-driven mentorship',
    description: 'Faculty and mentors track progress closely so aspirants know exactly what to improve before each stage.',
  },
];

export default function WhyJudiciaryGold() {
  return (
    <section id="mentors" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Why Judiciary Gold</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A premium coaching experience built for serious judiciary aspirants.</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-luxe transition hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition group-hover:bg-gold/15">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{reason.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}