import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiClock, FiUsers } from 'react-icons/fi';
import CountUpNumber from './CountUpNumber';

const stats = [
  { icon: FiUsers, value: '110K+', target: 110000, label: 'Learners guided across India' },
  { icon: FiAward, value: '500+', target: 500, label: 'Selections in judiciary services' },
  { icon: FiBookOpen, value: '42', target: 42, label: 'Structured modules for exam mastery' },
  { icon: FiClock, value: '24/7', target: 24, suffix: '/7', label: 'Access to recorded lessons and support' },
];

export default function Statistics() {
  return (
    <section id="results" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const numericValue = stat.target;
          const suffix = stat.suffix || (stat.value.includes('+') ? '+' : '');

          return (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel rounded-[1.75rem] border border-white/8 p-6 shadow-luxe"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-4xl font-semibold text-gold">
                    <CountUpNumber end={numericValue} suffix={suffix} />
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">{stat.label}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon size={20} />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}