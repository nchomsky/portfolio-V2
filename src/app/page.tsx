import ExperienceCard from "@/components/ExperienceCard";
import Particles from "@/components/Particles";
import { experiences } from "@/lib/experiences";
import GitHubIcon from "@/public/icons/githubIcon";
import LinkedInIcon from "@/public/icons/linkedInIcon";
import ResumeIcon from "@/public/icons/resumeIcon";

const testText = `I’m a developer passionate about creating software that is 
            both functional and beautiful. I have experience working with a variety 
            of technologies and languages, including JavaScript, TypeScript, React, 
            Node.js, and Python. I have a strong foundation in computer science and 
            software engineering principles, and I’m always looking to learn new things and improve my skills.
            Currently, I'm a Software Engineer Contractor at Apple. 
            I have experience working both for large enterprises and smaller startups, 
            and I’m comfortable working in fast-paced environments and collaborating with 
            cross-functional teams. I’m a strong communicator and problem solver, and I’m always 
            looking for ways to improve my work and the work of those around me. I’m excited about the 
            opportunity to work on new and challenging projects, and I’m always looking for ways to grow
             and develop as a developer.
            `;

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl px-6 md:px-12 my-16">
      <Particles quantity={300} className="absolute -z-10 inset-0"/>
      {/* Left Side */}
      <div className="lg:h-screen lg:sticky lg:top-0 lg:w-[45%]">
        <div className="lg:my-20">
          <h1 className="text-4xl mb-2 font-bold lg:text-5xl">Noah Chomsky</h1>
          <h2 className="mb-4 text-2xl text-subtle lg:text-3xl ">Software Developer</h2>
          {/* Add LinkedIn, GitHub, and Resume Icons */}
          <ul aria-label="Social Media List" className="flex mb-20">
            <li className="mr-4 shrink-0">
              <a href="https://www.linkedin.com/in/nchomsky/" target="_blank">
                <LinkedInIcon className="fill-subtle hover:fill-secondary hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1"/>
              </a>
            </li>
            <li className="mr-4 shrink-0">
              <a href="https://github.com/nchomsky" target="_blank">
                <GitHubIcon className="fill-subtle hover:fill-secondary hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1"/>
              </a>
            </li>
            <li className="mr-4 shrink-0">
              <a href="" target="_blank">
                <ResumeIcon className="fill-subtle hover:fill-secondary hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right Side */}
      <div className="lg:min-h-screen lg:overflow-y-auto lg:w-[55%]">
        <section id="about" className="lg:mr-4">
        <h2 className="ml-8 text-lg lg:hidden">About</h2>
          <div className="mt-10 lg:mt-20 my-4 mx-8 text-subtle">
            <p>{testText}</p>
          </div>
        </section>
        <section id="experiences" className="lg:mr-4">
          <h2 className="ml-8 text-lg lg:hidden">Experience</h2>
          {experiences.map((experience, index )=> (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </section>
      </div>
    </div>
  );
}
