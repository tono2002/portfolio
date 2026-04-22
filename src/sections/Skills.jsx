import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { skills } from '../data/content';
import '../styles/Skills.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <FadeIn>
          <p className="section__label">Skills</p>
          <h2 className="section__title">My toolkit.</h2>
          <p className="section__subtitle">
            Technologies and tools I use to build, analyse, and ship.
          </p>
        </FadeIn>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <FadeIn key={group.group} delay={i * 0.08}>
              <div className="skills__group">
                <p className="skills__group-title">{group.group}</p>
                <motion.div
                  className="skills__tags"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.items.map((item) => (
                    <motion.span key={item} className="skill-tag" variants={tagVariant}>
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
