// About.tsx - Contains information about my background
const paragraph1 = `I’m a developer passionate about creating solutions that are both functional and beautiful and I have experience working with a variety of technologies and languages on both the front-end and back-end.`;
const paragraph2 = `Currently, I'm a Software Engineer Contractor at Apple. I create new features and add enhancements in a web application used by SREs to manage and monitor the health of their services. This application integrates with many services, giving me experience creating APIs and working with data from various sources.`;
const paragraph3 = `During my career, I've had the opportunity to work both for large corporations and in smaller startup environments. I’m comfortable working in fast-paced environments and collaborating with cross-functional teams.`;
const paragraph4 = `Whenever I have free time, you can find me rock climbing, surfing, or training for my next marathon.`;

const About = () => {
    return (
        <div className="my-4 lg:mx-8 text-subtle text-sm font-semibold tracking-wide">
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