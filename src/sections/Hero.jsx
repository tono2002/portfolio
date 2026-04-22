import { motion } from 'framer-motion';
import { meta } from '../data/content';
import '../styles/Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content">
        <motion.p className="hero__eyebrow" {...fadeUp(0.2)}>
          Hi, I'm
        </motion.p>

        <motion.h1 className="hero__name" {...fadeUp(0.4)}>
          {meta.name}
        </motion.h1>

        <motion.p className="hero__role" {...fadeUp(0.6)}>
          <em>{meta.role}</em> Student at {meta.school}
        </motion.p>

        <motion.div className="hero__cta" {...fadeUp(0.8)}>
          <a href="#projects" className="btn btn--primary">View Work</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
