import { motion } from 'framer-motion';
import { FiCheckCircle, FiStar } from 'react-icons/fi';
import ImageFrame from './ImageFrame';

const testimonials = [
  {
    name: 'Ananya Bose',
    result: 'Selected in Rajasthan Judicial Services',
    feedback: 'The blend of legal depth and exam discipline made my preparation more focused. Every feedback cycle gave me a clear improvement path.',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Siddharth Rao',
    result: 'Qualified Mains with strong rank',
    feedback: 'The premium test series was the turning point. It taught me how to write under time pressure without losing legal clarity.',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Neha Patil',
    result: 'Interview stage finalist',
    feedback: 'The faculty encouraged precision, confidence, and judicial temperament. The support structure felt thoughtfully designed for aspirants.',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Student feedback that reflects confidence, clarity, and measurable progress.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/5 p-6 shadow-luxe backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_26px_80px_rgba(200,162,58,0.14)]"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FiStar key={starIndex} size={16} className="fill-gold" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-white/70">{item.feedback}</p>

              <div className="mt-6 flex items-center gap-4 border-t border-white/8 pt-5">
                <ImageFrame
                  src={item.src}
                  alt={`${item.name} avatar`}
                  className="h-14 w-14 rounded-full border border-gold/20 bg-white/5"
                  imgClassName="rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                      <FiCheckCircle size={12} />
                      Verified
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gold/90">{item.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
