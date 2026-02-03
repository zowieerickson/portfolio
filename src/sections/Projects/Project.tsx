interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

export default function Project({
  image,
  title,
  description,
  technologies,
  githubLink,
  demoLink,
}: Project) {
  return (
    <article className="w-full rounded-lg border">
      <img className="rounded-lg" src={image} />
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-[hsl(215,20.2%,65.1%)] mt-2">
          {description}
        </p>
        <h4 className="text-sm font-medium">Technologies</h4>
        <ul className="grid grid-cols-4">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div>
          <a href={githubLink} target="_blank">
            GitHub
          </a>
          <a href={demoLink} target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
