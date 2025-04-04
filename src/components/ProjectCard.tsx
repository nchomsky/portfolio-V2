import { Project } from '@/lib/types'; 
import Tag from './Tag';

const ProjectCard = ({ project } : { project : Project }) => {
  
    return (
            <div className="group mt-6 lg:p-6 rounded-lg transition duration-300 ease-in-out lg:hover:bg-comp-bg/50 lg:hover:drop-shadow-lg lg:hover:inset-shadow-sm lg:hover:inset-shadow-subtle/5">
                {/* Mobile View of Title */}
                <h3 className="md:hidden text-sm text-primary font-bold antialiased">{project.title}</h3>

                {/* Medium/Desktop View of Title and Links */}
                <div className="hidden md:visible md:flex md:justify-between md:items-end ">
                    <h3 className="text-lg text-primary font-bold antialiased transition duration-300 ease-in-out lg:group-hover:text-accent">{project.title}</h3>
                    <div className="flex gap-5 pr-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Button that opens the project in a new tab">
                            <span className="rounded-xl py-1 px-2  bg-subtle/20 border-transparent transition duration-300 hover:border-subtle/50 hover:border hover:bg-subtle/0 font-semibold text-sm tracking-wide antialiased">Open {project.title}</span>
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Button that opens the GitHub Reposiotry for this project in a new tab">
                            <span className="rounded-xl py-1 px-2 bg-subtle/20 border-transparent transition duration-300 hover:border-subtle/50 hover:border hover:bg-subtle/0 font-semibold text-sm tracking-wide antialiased">View on GitHub</span>
                        </a>
                    </div>
                </div>
                <p className="pt-2 text-subtle md:text-sm/6 text-xs/5 antialiased font-semibold tracking-wide ">{project.description}</p>

                {/* Mobile View of Links */}
                <div className="flex gap-3 pr-3 md:hidden">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Button that opens the project in a new tab">
                            <span className="rounded-xl py-0.5 px-1.5 bg-subtle/20 border-transparent transition duration-300 hover:border-subtle/50 hover:border hover:bg-subtle/0 font-bold text-xs tracking-wide antialiased">Open {project.title}</span>
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Button that opens the GitHub Reposiotry for this project in a new tab">
                            <span className="rounded-xl py-0.5 px-1.5 bg-subtle/20 border-transparent transition duration-300 hover:border-subtle/50 hover:border hover:bg-subtle/0 font-bold text-xs tracking-wide antialiased">View on GitHub</span>
                        </a>
                    </div>
                <ul className="pt-2 flex flex-wrap">
                    {project.technologies.map(technologies => (
                    <Tag key={technologies} text={technologies}/>
                    ))}
                </ul>
            </div>
  );
};

 export default ProjectCard;