import { motion } from 'framer-motion';

const exams = ['Delhi Judiciary', 'Rajasthan Judiciary', 'UP Judiciary', 'MP Judiciary', 'CGPSC', 'BPSC'];

export default function TrustedByStrip() {
  return (
    <section className="px-4 pb-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-7xl rounded-[1.6rem] border border-white/8 bg-white/5 px-5 py-4 shadow-luxe backdrop-blur-xl"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Trusted by Aspirants Preparing For</p>
          <div className="flex flex-wrap gap-2">
            {exams.map((exam) => (
              <span key={exam} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/72">
                {exam}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}