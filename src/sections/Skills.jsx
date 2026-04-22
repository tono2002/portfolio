import { skills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
