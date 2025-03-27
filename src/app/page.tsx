import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/lib/experiences";

const testText = `I’m a developer passionate about creating software that is both functional and beautiful. I have experience working with a variety of technologies and languages, including JavaScript, TypeScript, React, Node.js, and Python. I have a strong foundation in computer science and software engineering principles, and I’m always looking to learn new things and improve my skills.
            Currently, I'm a Software Engineer Contractor at Apple. 
            \nI have experience working both for large enterprises and smaller startups, and I’m comfortable working in fast-paced environments and collaborating with cross-functional teams. I’m a strong communicator and problem solver, and I’m always looking for ways to improve my work and the work of those around me. I’m excited about the opportunity to work on new and challenging projects, and I’m always looking for ways to grow and develop as a developer.
            `;

export default function Home() {
  return (
    <div className="flex flex-col h-screen lg:flex-row ">
      <div className="h-screen lg:sticky lg:top-0 lg:w-1/2">
        <div className="m-10 lg:m-20">
          <h1 className="text-5xl font-bold lg:text-6xl">Noah Chomsky</h1>
          <h2 className="text-2xl lg:text-3xl">Software Developer</h2>
        </div>
      </div>
      <div className="h-screen lg:overflow-y-auto lg:w-1/2">
        <section id="about" className="lg:mr-25">
          <div className="mt-10 lg:mt-20 my-4 mx-8">
            <p>{testText}</p>
          </div>
        </section>
        <section id="experiences" className="lg:mr-25">
          <h2 className="mx-8 text-lg lg:hidden">Experience</h2>
          {experiences.map((experience, index )=> (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </section>
      </div>
    </div>
  );
}
