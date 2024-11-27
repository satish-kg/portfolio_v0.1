import React from "react";

const ProjectItem = ({img, title, console, url}) => {
    return (
        // <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-red-600 to-[#001b5e]">
            <img src={img} className="rounded-xl group-hover:opacity-10"></img>
            <div className="hidden group-hover:block absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center font-bold">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                    {console}
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <p className="text-gray-700 p-3 font-bold cursor-pointer text-lg text-center rounded-lg bg-white">
                        More Info
                    </p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem;