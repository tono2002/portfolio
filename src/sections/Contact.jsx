import { meta } from '../data/content';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <a href={`mailto:${meta.email}`}>{meta.email}</a>
    </section>
  );
}
