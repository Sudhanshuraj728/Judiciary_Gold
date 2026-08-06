import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const states = [
  { id: 'delhi', name: 'Delhi', x: 52, y: 22, count: 12600 },
  { id: 'rajasthan', name: 'Rajasthan', x: 20, y: 33, count: 18400 },
  { id: 'up', name: 'UP', x: 55, y: 30, count: 24100 },
  { id: 'mp', name: 'MP', x: 43, y: 48, count: 16850 },
  { id: 'haryana', name: 'Haryana', x: 46, y: 19, count: 8200 },
  { id: 'bihar', name: 'Bihar', x: 66, y: 33, count: 9750 },
  { id: 'kerala', name: 'Kerala', x: 40, y: 74, count: 6500 },
];

const totals = states.reduce((sum, state) => sum + state.count, 0);

export default function SelectionsAcrossIndia() {
  const [selected, setSelected] = useState(states[0]);

  const selectionPercent = useMemo(() => Math.round((selected.count / totals) * 100), [selected]);

  return (
    <section id="selections-india" className="content-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Selections Across India</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Interactive selection map showing where Judiciary Gold aspirants are making their mark.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(200,162,58,0.13),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-luxe"
          >
            <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(200,162,58,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="relative rounded-[1.6rem] border border-white/8 bg-black/35 p-4">
              <svg viewBox="0 0 100 100" className="h-[420px] w-full">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.8" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M27 16 L41 12 L55 19 L63 15 L74 24 L78 34 L73 48 L77 58 L70 72 L57 79 L47 77 L39 84 L28 75 L25 61 L20 52 L24 39 L22 28 Z" fill="rgba(200,162,58,0.08)" stroke="rgba(200,162,58,0.35)" strokeWidth="1.2" />
                <path d="M28 21 L40 18 L52 24 L59 21 L68 29 L71 37 L67 47 L69 56 L63 68 L51 73 L43 70 L36 76 L29 69 L27 58 L23 49 L26 37 L25 27 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

                {states.map((state) => (
                  <motion.g
                    key={state.id}
                    onHoverStart={() => setSelected(state)}
                    onFocus={() => setSelected(state)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${state.name} ${state.count} selections`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer"
                  >
                    <circle cx={state.x} cy={state.y} r="4.1" fill="rgba(200,162,58,0.9)" filter="url(#glow)" />
                    <circle cx={state.x} cy={state.y} r="7" fill="none" stroke="rgba(200,162,58,0.45)" strokeWidth="1" strokeDasharray="2 3">
                      <animate attributeName="r" values="7;10;7" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                    <text x={state.x + 4.5} y={state.y - 3} fill="rgba(255,255,255,0.72)" fontSize="4.2">
                      {state.name}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 shadow-luxe"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Selected State</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">{selected.name}</h3>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex items-end justify-between text-sm text-white/60">
                  <span>Selections contribution</span>
                  <span>{selectionPercent}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/8">
                  <motion.div
                    key={selected.id}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(selectionPercent, 12)}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-2 rounded-full bg-gradient-to-r from-gold to-[#f0d27b]"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {states.map((state) => (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() => setSelected(state)}
                    className={`rounded-[1.2rem] border px-4 py-3 text-left transition ${
                      selected.id === state.id
                        ? 'border-gold/35 bg-gold/10 text-white shadow-glow'
                        : 'border-white/8 bg-white/5 text-white/68 hover:border-gold/20 hover:bg-white/8'
                    }`}
                  >
                    <p className="text-sm font-medium">{state.name}</p>
                    <p className="mt-1 text-xs text-white/55">{state.count.toLocaleString()} selections</p>
                  </button>
                ))}
              </div>

              <div className="grid gap-3 rounded-[1.4rem] border border-gold/18 bg-black/30 p-4 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">India total</p>
                  <p className="mt-2 text-2xl font-semibold text-gold">{totals.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Top state</p>
                  <p className="mt-2 text-2xl font-semibold text-gold">UP</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Weekly growth</p>
                  <p className="mt-2 text-2xl font-semibold text-gold">+18%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}