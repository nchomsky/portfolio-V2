import Experience from '@/lib/types'; 
import Tag from './Tag';

// Maybe turn this into a generic card component once I have projects included as well...
const ExperienceCard = ({ experience } : { experience : Experience }) => {
  
    return (
            <div className="group md:flex mt-6 lg:p-6 rounded-lg transition duration-300 ease-in-out lg:hover:bg-comp-bg/50 lg:hover:drop-shadow-lg lg:hover:inset-shadow-sm lg:hover:inset-shadow-subtle/5">
                <header className="text-xs text-subtle/70 font-semibold md:w-1/4 pr-1 pt-1 tracking-wide mb-3">{experience.startDate} - {experience.endDate}</header>
                <div className="md:w-3/4">
                    <h3 className="md:text-lg text-sm text-primary font-bold antialiased transition duration-300 ease-in-out lg:group-hover:text-accent">{experience.company} - {experience.position}</h3>
                    <p className="pt-2 text-subtle md:text-sm/6 text-xs/5 antialiased font-semibold tracking-wide ">{experience.summary}</p>
                    <ul className="pt-2 flex flex-wrap">
                        {experience.skills.map(skill => (
                        <Tag key={skill} text={skill}/>
                        ))}
                    </ul>
                </div>
            </div>
  );
};

 export default ExperienceCard;