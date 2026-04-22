import { meta } from '../data/content';

export default function Hero() {
  return (
    <section id="hero">
      <h1>{meta.name}</h1>
      <p>{meta.role}</p>
    </section>
  );
}
