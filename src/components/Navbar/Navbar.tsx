export default function Navbar() {
  return (
    <nav className="flex justify-between mb-10">
      <h1 className="hidden font-bold font-mono text-2xl sm:block">
        Zowie Erickson
      </h1>
      <ul className="flex gap-4">
        <li>Resume</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>About Me</li>
      </ul>
    </nav>
  );
}
