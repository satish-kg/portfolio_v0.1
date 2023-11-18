import React from "react";
import WorkItem from "./WorkItem";

// move the data into a separate component
const data = [
    {
        year : 2022,
        title : 'Title 1',
        duration : '3 months',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        year : 2021,
        title : 'Title 2',
        duration : '3 months',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        year : 2020,
        title : 'Title 3',
        duration : '3 months',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        year : 2019,
        title : 'Title 4',
        duration : '3 months',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
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