export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1 className="uppercase font-mono font-semibold">Zowie Erickson</h1>
      <ul className="flex gap-4">
        <li>Resume</li>
        <li>Projects</li>
        <li>About Me</li>
      </ul>
    </nav>
  );
}
