import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'Who is Judiciary Gold designed for?',
    answer: 'It is built for judiciary aspirants preparing for Civil Judge, Junior Division, District Judge, and other judicial service examinations.',
  },
  {
    question: 'Does the platform support both prelims and mains preparation?',
    answer: 'Yes. The structure covers concept classes, objective practice, descriptive answer writing, and interview readiness in one learning flow.',
  },
  {
    question: 'Are live classes and recorded lectures available?',
    answer: 'Yes. Learners get live instruction, revision access, and recordings so they can revisit difficult topics at their own pace.',
  },
  {
    question: 'How are mock tests evaluated?',
    answer: 'Mock tests are designed around judiciary exam patterns and reviewed for legal accuracy, speed, structure, and presentation quality.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Helpful answers for aspirants exploring the next step in their journey.</h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;

            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] shadow-luxe"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-base font-medium text-white sm:text-lg">{faq.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-gold">
                    <FiChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm leading-7 text-white/65">{faq.answer}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}