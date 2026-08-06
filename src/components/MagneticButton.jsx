import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ href, children, className = '', secondary = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });
  const rotate = useTransform(springX, [-20, 20], [-2, 2]);

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY, rotate }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left - bounds.width / 2) / 8;
        const offsetY = (event.clientY - bounds.top - bounds.height / 2) / 8;
        x.set(offsetX);
        y.set(offsetY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      className={`${secondary ? 'border border-white/12 bg-white/4 text-white' : 'bg-gold text-black'} inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 shadow-glow transition will-change-transform ${className}`}
    >
      {children}
    </motion.a>
  );
}