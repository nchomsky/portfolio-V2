import Experience from '@/lib/types'; 
import Tag from './Tag';

const ExperienceCard = ({ experience } : { experience : Experience }) => {
  
    return (
            <div className="group md:flex lg:p-8 my-4 mx-8 rounded-lg lg:hover:shadow-lg lg:hover:bg-comp-bg">
                <p className="text-base font-light lg:w-1/4">{experience.startDate} - {experience.endDate}</p>
                <div className="lg:w-3/4">
                    <h3 className=" mb-4 font-bold antialiased lg:group-hover:text-accent">{experience.company} - {experience.position}</h3>
                    <p className="mb-4 antialiased">{experience.summary}</p>
                    <ul className="flex flex-wrap">
                        {experience.skills.map(skill => (
                        <Tag key={skill} text={skill}/>
                        ))}
                    </ul>
                </div>
            </div>
  );
};

 export default ExperienceCard;