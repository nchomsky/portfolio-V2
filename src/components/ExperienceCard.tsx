import Experience from '@/lib/types'; 
import Tag from './Tag';

// Maybe turn this into a generic card component once I have projects included as well...
const ExperienceCard = ({ experience } : { experience : Experience }) => {
  
    return (
            <div className="group mt-2 md:flex lg:p-8 rounded-lg lg:hover:inset-shadow-md lg:hover:bg-comp-bg/50">
                <p className="text-xs text-subtle font-semibold lg:w-1/4">{experience.startDate} - {experience.endDate}</p>
                <div className="lg:w-3/4">
                    <h3 className=" font-bold antialiased lg:group-hover:text-accent">{experience.company} - {experience.position}</h3>
                    <p className="mt-2 text-secondary text-sm/6">{experience.summary}</p>
                    <ul className="mt-2 flex flex-wrap">
                        {experience.skills.map(skill => (
                        <Tag key={skill} text={skill}/>
                        ))}
                    </ul>
                </div>
            </div>
  );
};

 export default ExperienceCard;