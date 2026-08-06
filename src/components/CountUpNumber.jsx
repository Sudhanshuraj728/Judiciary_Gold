import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CountUpNumber({ end, suffix = '', duration = 1.6, className = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (time) => {
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, end, inView]);

  return (
    <motion.span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}