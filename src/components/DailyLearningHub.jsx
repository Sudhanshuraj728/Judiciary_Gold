import { motion } from 'framer-motion';
import { FiBell, FiBookOpen, FiCheckCircle, FiFileText, FiGlobe } from 'react-icons/fi';

const hub = [
  { title: 'Current Affairs', description: 'Daily national and legal affairs curated for exam relevance.', icon: FiGlobe },
  { title: 'Latest Judgements', description: 'Important Supreme Court and High Court judgments explained simply.', icon: FiFileText },
  { title: 'Legal Updates', description: 'New acts, amendments, and practice notes tracked in one place.', icon: FiBookOpen },
  { title: 'Daily Quiz', description: 'Quick assessments to keep concept recall active and measurable.', icon: FiCheckCircle },
  { title: 'Exam Notifications', description: 'Important dates, application alerts, and official exam announcements.', icon: FiBell },
];

export default function DailyLearningHub() {
  return (
    <section id="learning-hub" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Daily Learning Hub</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A daily feed that keeps preparation current, structured, and exam-aware.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {hub.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-luxe transition hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}