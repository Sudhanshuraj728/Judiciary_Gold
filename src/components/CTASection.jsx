import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="enroll" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-[linear-gradient(135deg,#1f1710_0%,#0b0b0b_45%,#23180c_100%)] px-6 py-14 shadow-[0_24px_100px_rgba(200,162,58,0.16)] sm:px-10 lg:px-16 lg:py-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,58,0.24),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_26%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.45em] text-gold/85">Enrollment Open</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Your Journey Towards Becoming a Judge Starts Today
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold text-black shadow-glow transition hover:translate-y-[-1px] hover:bg-[#d7b451]"
              >
                Enroll Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-medium text-white transition hover:border-gold/40 hover:bg-white/10"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}