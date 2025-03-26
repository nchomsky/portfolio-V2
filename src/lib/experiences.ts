import Experience from "./types"

const apple: Experience = {
    company: 'Contractor at Apple Inc.',
    position: 'Software Developer',
    startDate: 'April 2023',
    endDate: 'Present',
    summary: `I worked with two other developers to refactor an existing project built with GatsbyJS, transitioning it to Next.js to efficiently serve documents from various GitHub repositories.
                This refactor significantly improved the application's build time by over 90% and included the implementation of a proprietary analytics tool to track usage. 
                Additionally, I collaborated with a team of around 15 developers to build an internal tool used by over 700 SREs weekly to resolve issues, view reports, and gain insights into service health and reliability. 
                As part of this effort, I led a major refactor of the app's permission management system. To complete my work on this refactor, I created and modified APIs using Java and Spring to interact with various services.`,
    skills: [
        'React', 
        'Redux', 
        'Next.js',
        'JavaScript',
        'TypeScript',
        'PostgreSQL',
        'Jest',
        'React Testing Library',
        'Storybook',
        'Java',
        'Spring',
        'Git',
        'GitHub'
    ] 
}

const pgDev: Experience = {
    company: 'Prometheus Group',
    position: 'Software Developer',
    startDate: 'July 2022',
    endDate: 'April 2023',
    summary: `I worked with a team of 14 developers to build an enterprise application consisting of four separate applications that integrate with SAP and Primavera P6. 
                In each release cycle, I complete approximately 18% of the total tickets. I implemented Ag-Grid React to efficiently display and organize data synced from the Primavera API and SAP. 
                Additionally, I led all development efforts on DevExpress Reporting, which involved creating and modifying reports as well as managing the database schema that these reports rely on.`,
    skills: [
        'React', 
        'Redux',
        'JavaScript',
        'TypeScript',
        'PostgreSQL',
        'C#',
        'ASP.NET',
        'Git',
        'GitLab',
        'SourceTree',
        'DevExpress'
    ] 
}

const pgImp: Experience = {
    company: 'Prometheus Group',
    position: 'Implementation Specialist',
    startDate: 'April 2021',
    endDate: 'June 2022',
    summary: `I worked with SQL scripts to import, export, and modify data in customer databases, ensuring smooth data management. 
            I also created and updated DevExpress reports that dynamically adjusted based on customer input within their workflows. 
            Additionally, I coordinated with customers and the development team to plan software releases and implement customer-specific configurations. 
            To support collaboration, I actively managed the Git repository and guided team members on using Git to track changes for the reports we built.`,
    skills: [
        'HTML',
        'CSS',
        'PostgreSQL',
        'Git',
        'JIRA',
        'Excel',
        'DevExpress'
    ] 
}

const infosys: Experience = {
    company: 'Infosys',
    position: 'Implementation Specialist',
    startDate: 'June 2019',
    endDate: 'June 2020',
    summary: `I worked as part of a team to develop a Credit Card Application that enabled registered users to view, update, add, and delete payment methods. The client-side interface was built using Angular 7, while CRUD operations were managed through the JPA EntityManager interface in the Persistence Layer. I also had the opportunity to present our work to the CTO of a major company, where my teammates and I provided an in-depth overview of the technologies we were using. Additionally, I actively sought opportunities for professional growth, such as completing a two-week course to become internally certified in the Agile methodology.`,
    skills: [
        'React', 
        'Redux',
        'JavaScript',
        'TypeScript',
        'PostgreSQL',
        'C#',
        'ASP.NET',
        'Git',
        'GitLab',
        'SourceTree',
        'DevExpress'
    ] 
}

export const experiences: Experience[] = [apple, pgDev, pgImp, infosys];