// About.tsx - Contains information about my background
const paragraph1 = `I’m a developer passionate about creating solutions that are both functional and beautiful and I have experience working with a variety of technologies and languages on both the front-end and back-end.`;
const paragraph2 = `In my most recent position, I was a Software Engineer Contractor at Apple. I created new features and added enhancements in a web application used by SREs to manage and monitor the health of their services. This application integrates with many services, which gave me more experience creating APIs and working with data from various sources.`;
const paragraph3 = `During my career, I've had the opportunity to work both for large corporations and in smaller startup environments. I’m comfortable working in fast-paced environments and collaborating with cross-functional teams.`;
const paragraph4 = `Whenever I have free time, you can find me rock climbing, surfing, or training for my next marathon.`;

const About = () => {
    return (
        <div className="my-4 lg:mx-6 text-subtle md:text-sm text-xs font-semibold tracking-wide">
            <p>{paragraph1}</p>
            <br />
            <p>{paragraph2}</p>
            <br />
            <p>{paragraph3}</p>
            <br />
            <p>{paragraph4}</p>
        </div>
    );
};

export default About;