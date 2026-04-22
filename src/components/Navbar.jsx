const links = ['hero', 'about', 'projects', 'skills', 'contact'];

export default function Navbar() {
  return (
    <nav>
      {links.map((l) => (
        <a key={l} href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>
      ))}
    </nav>
  );
}
