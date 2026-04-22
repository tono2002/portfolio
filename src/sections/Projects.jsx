import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { projects } from '../data/content';
import '../styles/Projects.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <FadeIn>
          <p className="section__label">Work</p>
          <h2 className="section__title">Things I've built.</h2>
          <p className="section__subtitle">
            A selection of projects across data science, machine learning, and web development.
          </p>
        </FadeIn>

        <motion.div
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p) => (
            <motion.div key={p.id} className="project-card" variants={cardVariant}>
              <div className="project-card__header">
                <div className="project-card__icon">{p.emoji}</div>
                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-card__link" title="GitHub">
                      ↗
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-card__link" title="Live demo">
                      ⚡
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
