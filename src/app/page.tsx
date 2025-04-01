import ExperienceCard from "@/components/ExperienceCard";
import Particles from "@/components/Particles";
import { experiences } from "@/lib/experiences";
import GitHubIcon from "../components/icons/githubIcon";
import LinkedInIcon from "../components/icons/linkedInIcon";
import ResumeIcon from "../components/icons/resumeIcon";

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
    <div className="flex flex-col lg:flex-row lg:gap-4 mx-auto max-w-screen-xl lg:py-0 py-12 md:px-4">
      <Particles quantity={300} className="absolute -z-10 inset-0"/>
      {/* Left Side */}
      <header className="lg:h-screen lg:py-24 lg:sticky lg:top-0 lg:flex lg:flex-col lg:w-[45%]">
          <div>
            <h1 className="text-4xl mb-2 font-bold lg:text-6xl">Noah Chomsky</h1>
            <h2 className="mb-4 text-2xl text-subtle lg:text-3xl ">Software Developer</h2>
          </div>
          {/* Add LinkedIn, GitHub, and Resume Icons */}
          <ul aria-label="Social Media List" className="flex">
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
              <a href="./NoahChomskyResume.pdf" target="_blank">
                <ResumeIcon className="fill-subtle hover:fill-secondary hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1"/>
              </a>
            </li>
          </ul>
      </header>
      {/* Right Side */}
      <main className="lg:min-h-screen lg:py-24 lg:overflow-y-auto lg:w-[55%]">
        <section id="about" className="mb-10">
          <hgroup>
            <h2 className="lg:ml-8 lg:mb-4 mb-8 text-lg font-bold">About</h2>
            <div className="my-4 lg:mx-8 text-subtle text-md">
              <p>{testText}</p>
            </div>
          </hgroup>    
        </section>
        <section id="experiences">
          <h2 className="lg:ml-8 lg:mb-4 mb-8 text-lg font-bold">Experience</h2>
          {experiences.map((experience, index )=> (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </section>
      </main>
    </div>
  );
}
