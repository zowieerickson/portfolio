import SectionTitle from "../../components/SectionTitle";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-2 gap-5">
        <Project
          image="https://mayank-ughade.vercel.app/_next/image?url=%2Finsightful.png&w=828&q=75"
          title="Dev-Union"
          description="Dev Union is a full-stack app enabling users to create chat rooms and
        collaborate on projects with real-time video calls and screen-sharing."
          technologies={[
            "React",
            "Next.js",
            "Tailwind",
            "Next-Auth",
            "MongoDB",
            "vercel",
          ]}
          githubLink="https://github.com/MayankUghade/InsightFul"
          demoLink="https://insightful-two.vercel.app/"
        />
        <Project
          image="https://mayank-ughade.vercel.app/_next/image?url=%2Finsightful.png&w=828&q=75"
          title="Dev-Union"
          description="Dev Union is a full-stack app enabling users to create chat rooms and
        collaborate on projects with real-time video calls and screen-sharing."
          technologies={[
            "React",
            "Next.js",
            "Tailwind",
            "Next-Auth",
            "MongoDB",
            "vercel",
          ]}
          githubLink="https://github.com/MayankUghade/InsightFul"
          demoLink="https://insightful-two.vercel.app/"
        />
      </div>
    </section>
  );
}
