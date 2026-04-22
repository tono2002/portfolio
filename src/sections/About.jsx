import FadeIn from '../components/FadeIn';
import { about } from '../data/content';
import '../styles/About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left: text */}
          <div>
            <FadeIn>
              <p className="section__label">About</p>
              <h2 className="section__title">Turning data<br />into decisions.</h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="about__bio"
                dangerouslySetInnerHTML={{ __html: about.bio }}
              />
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="about__stats">
                {about.stats.map((s) => (
                  <div key={s.label} className="about__stat">
                    <div className="about__stat-value">{s.value}</div>
                    <div className="about__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: card */}
          <FadeIn delay={0.2} direction="left">
            <div className="about__visual">
              <div className="about__card">
                <p className="about__card-title">Currently</p>
                {about.highlights.map((h) => (
                  <div key={h.title} className="about__card-item">
                    <div className="about__card-dot" />
                    <div className="about__card-text">
                      <strong>{h.title}</strong>
                      {h.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
