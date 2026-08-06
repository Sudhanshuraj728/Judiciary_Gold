import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import ImageFrame from './ImageFrame';

const stories = [
  {
    name: 'Aditi Sharma',
    rank: 'AIR 12',
    state: 'Rajasthan',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    testimonial:
      'The mock answer writing and weekly court-style reviews made my preparation disciplined and precise. The faculty pushed me to think like a judge, not just a student.',
  },
  {
    name: 'Rohit Verma',
    rank: 'AIR 28',
    state: 'Madhya Pradesh',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    testimonial:
      'The live classes and revision framework helped me convert long study hours into actual performance. The selection-focused approach kept me accountable every week.',
  },
  {
    name: 'Meera Nair',
    rank: 'AIR 07',
    state: 'Kerala',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    testimonial:
      'Judiciary Gold felt premium from day one. The mentorship, doubt support, and test analysis created a clear path from basics to final selection.',
  },
  {
    name: 'Kabir Saini',
    rank: 'AIR 19',
    state: 'Haryana',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    testimonial:
      'What stood out was the quality of the legal discussions and the consistency of the test series. Every interaction felt tailored to judiciary success.',
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Success Stories</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Selections that reflect the discipline, clarity, and ambition of our aspirants.</h2>
        </div>

        <div className="mt-10 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-5 pr-4">
            {stories.map((story, index) => (
              <motion.article
                key={story.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group w-[320px] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-luxe transition hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_28px_90px_rgba(200,162,58,0.16)]"
              >
                <div className="rounded-[1.5rem] border border-white/8 bg-gradient-to-br from-[#1f1f1f] to-[#090909] p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      <ImageFrame
                        src={story.src}
                        alt={`${story.name} portrait`}
                        className="h-20 w-20 shrink-0 rounded-full border border-gold/20 bg-white/5 shadow-glow"
                        imgClassName="rounded-full object-cover"
                      />

                      <div className="min-w-0 pt-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-lg font-semibold text-white">{story.name}</p>
                          <span className="inline-flex items-center gap-1 rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                            <FiCheckCircle size={12} />
                            Verified
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/60">
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            <FiAward className="text-gold" />
                            {story.rank}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                            <FiMapPin className="text-gold" />
                            {story.state}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex w-fit rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                      Verified Selection
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/68">{story.testimonial}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
