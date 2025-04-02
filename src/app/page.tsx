import ExperienceCard from "@/components/ExperienceCard";
import Particles from "@/components/Particles";
import { experiences } from "@/lib/experiences";
import GitHubIcon from "../components/icons/githubIcon";
import LinkedInIcon from "../components/icons/linkedInIcon";
import ResumeIcon from "../components/icons/resumeIcon";
import About from "./about";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 mx-auto max-w-screen-xl lg:py-0 py-12 px-10">
      <Particles quantity={350} className="-z-10 inset-0 fixed"/>
      {/* Left Side */}
      <header className="lg:h-screen lg:py-24 lg:sticky lg:top-0 lg:flex lg:flex-col lg:w-[45%] lg:justify-between lg:mb-0 mb-10">
          <div>
            <h1 className="text-4xl mb-2 font-bold lg:text-6xl">Noah Chomsky</h1>
            <h2 className="mb-4 text-2xl text-subtle lg:text-3xl ">Software Developer</h2>
          </div>
          {/* Social Icons (LinkedIn, GitHub, Resume) */}
          <ul aria-label="Social Media List" className="flex items-end justify-between w-29">
            <li>
              <a href="https://www.linkedin.com/in/nchomsky/" target="_blank" rel="noopener noreferrer" aria-label="Button that opens LinkedIn Profile in a new tab">
                <LinkedInIcon className="fill-subtle hover:fill-secondary hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1"/>
              </a>
            </li>
            <li className="scale-125">
              <a href="https://github.com/nchomsky" target="_blank" rel="noopener noreferrer" aria-label="Button that opens GitHub Profile in a new tab">
                <GitHubIcon className="fill-subtle hover:fill-secondary hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1"/>
              </a>
            </li>
            <li>
              <a href="./NoahChomskyResume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Button that opens Resume in a new tab">
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
            <About />
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
