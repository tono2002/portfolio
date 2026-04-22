import FadeIn from '../components/FadeIn';
import { meta } from '../data/content';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <FadeIn>
            <h2 className="contact__title">
              Let's build<br />
              <span className="gradient-text">something great.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="contact__sub">
              Open to internships, collaborations, and interesting projects.
              Reach out anytime.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="contact__actions">
              <a href={`mailto:${meta.email}`} className="btn btn--primary">
                Send Email
              </a>
              <a href={meta.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                GitHub
              </a>
            </div>

            <div className="contact__socials">
              <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link">
                LinkedIn
              </a>
              <a href={`mailto:${meta.email}`} className="contact__social-link">
                {meta.email}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="contact__footer">
              © {new Date().getFullYear()} {meta.name} — Designed & built with React
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
