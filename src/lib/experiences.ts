import { Experience } from "./types"

const apple: Experience = {
    company: 'Contractor at Apple Inc.',
    position: 'Software Developer',
    startDate: 'April 2023',
    endDate: 'April 2025',
    summary: `Collaborated with two developers to build an application using Next.js to efficiently serve documents from various GitHub repositories. Additionally, I worked with a team to build a tool used by SREs to resolve issues, view reports, and gain insights into service health and reliability. As part of this effort, I led a major refactor of the app's permission management system.`,
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
    summary: `Engaged with 14 developers to build an enterprise application that integrates with SAP and Primavera P6. Implemented Ag-Grid React to efficiently display and organize data synced from the Primavera API and SAP. Additionally, led all development efforts on DevExpress Reporting, which involved creating and modifying reports as well as managing the database schema that these reports rely on.`,
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
    summary: `Managed SQL scripts for data operations in customer databases. Developed dynamic DevExpress reports, coordinated software releases, and implemented customer-specific configurations. Maintained the Git repository and guided team members on version control.`,
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
    position: 'Associate Software Engineer',
    startDate: 'June 2019',
    endDate: 'June 2020',
    summary: `Developed a Credit Card Application with Angular 7 and JPA for payment management. Presented the project to a company's CTO and earned internal Agile certification`,
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