import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </section>
  );
}
