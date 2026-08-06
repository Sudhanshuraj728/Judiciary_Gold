import { motion } from 'framer-motion';
import ImageFrame from './ImageFrame';

const shots = [
  {
    title: 'Live classroom briefing',
    span: 'md:col-span-2',
    height: 'h-[260px]',
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Small group discussion',
    span: '',
    height: 'h-[340px]',
    src: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Faculty interaction',
    span: '',
    height: 'h-[220px]',
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Exam simulation hall',
    span: 'md:col-span-2',
    height: 'h-[240px]',
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Revision corner',
    span: '',
    height: 'h-[280px]',
    src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mentorship session',
    span: '',
    height: 'h-[220px]',
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ClassroomGallery() {
  return (
    <section id="gallery" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Classroom Gallery</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A refined look into the learning environment that shapes serious judiciary preparation.</h2>
        </div>

        <div className="mt-10 columns-1 gap-5 space-y-5 md:columns-2 xl:columns-3">
          {shots.map((shot, index) => (
            <motion.article
              key={shot.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={`group break-inside-avoid overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/5 shadow-luxe ${shot.span}`}
            >
              <div className={`relative ${shot.height} overflow-hidden`}>
                <ImageFrame
                  src={shot.src}
                  alt={shot.title}
                  className="h-full w-full rounded-[1.8rem]"
                  imgClassName="rounded-[1.8rem] transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">Gallery</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{shot.title}</h3>
                  </div>
                  <span className="rounded-full border border-gold/20 bg-black/35 px-3 py-1 text-[11px] font-semibold text-gold">
                    Premium
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}