import React from "react";
import WorkItem from "./WorkItem";

// move the data into a separate component
const data = [
    {
        year : 2024,
        title : 'Full-time Software Developer at LogicSoft International Pvt. Ltd.',
        duration : 'December 2024 - Present',
        details : 'Worked on react-native and PostgreSQL based web applications, currently working on react-native based mobile applications.'
    },
    {
        year : 2024,
        title : 'Full Stack Developer Intern at Techno Experts',
        duration : 'April - October 2024',
        details : 'Single-handedly developed an small-scale banking app using MERN stack. Build several prototypes for product research & development.'
    },
    {
        year : 2023,
        title : 'Post Graduation at University of Allahabad',
        duration : '2 years',
        details : 'Current cumulative CGPA of 7.7/10.'
    },
    {
        year : 2021,
        title : 'Assistant Engineer at Samsung Display Noida',
        duration : '10 months',
        details : 'Led data collection and processing efforts, anomaly detection and was part of team which was directly involved in production of India’s 1st AMOLED panels.'
    },
    {
        year : 2020,
        title : 'Completed Bachelor of Technology',
        duration : '4 years',
        details : 'Graduated from GGSIPU with 7.19 CGPA with specialization in Electronics and Communication Engineering.'
    },
    {
        year : 2019,
        title : 'Plant Operations Intern at IPGCL PPCL',
        duration : '1 months',
        details : 'Implemented adn learnt about Brayton cycle and Rankine cycle, power plant operations, combined power cycle and various practical challenges faced by team.'
    }
];

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl pb-5 font-bold text-center text-[#001b5e]">Work</h1>
            {
                data.map((item, index) => (
                    <WorkItem 
                        key={index}
                        year = {item.year}
                        title = {item.title}
                        duration = {item.duration}
                        details = {item.details}
                    />
                    )
                )
            }
        </div>
    )
}

export default Work;