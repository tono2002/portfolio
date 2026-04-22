import { motion } from 'framer-motion';

const variants = {
  hidden: (dir) => ({
    opacity: 0,
    y: dir === 'up' ? 40 : dir === 'down' ? -40 : 0,
    x: dir === 'left' ? 40 : dir === 'right' ? -40 : 0,
  }),
  visible: { opacity: 1, y: 0, x: 0 },
};

export default function FadeIn({ children, delay = 0, direction = 'up', className }) {
  return (
    <motion.div
      className={className}
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
