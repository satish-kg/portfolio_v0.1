import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

const Sidenav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        console.log('state changed')
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav} href="#main" className="w-[75%] m-2 p-4 flex justify-center items-center rounded-full shadow shadow-gray-400 p-4 bg-gray-100 text-lg font-bold cursor-pointer hover:bg-gray-200 hover:scale-110 ease-in duration-300">
                            <AiOutlineHome size={20}/>
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav} href="#work" className="w-[75%] m-2 flex justify-center items-center rounded-full shadow shadow-gray-400 p-4 bg-gray-100 text-lg font-bold cursor-pointer hover:bg-gray-200 hover:scale-110 ease-in duration-300">
                            <GrProjects size={20}/>
                            <span className="pl-4">Work</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className="w-[75%] m-2 flex justify-center items-center rounded-full shadow shadow-gray-400 p-4 bg-gray-100 text-lg font-bold cursor-pointer hover:bg-gray-200 hover:scale-110 ease-in duration-300">
                            <AiOutlineProject size={20}/>
                            <span className="pl-4">Project</span>
                        </a>
                        <a onClick={handleNav} href="https://drive.google.com/file/d/1Ae7sTrP0cFANXMJVc9nYIYBWVNwuB-3_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-[75%] m-2 flex justify-center items-center rounded-full shadow shadow-gray-400 p-4 bg-gray-100 text-lg font-bold cursor-pointer hover:bg-gray-200 hover:scale-110 ease-in duration-300">
                            <BsPerson size={20}/>
                            <span className="pl-4">Resume</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className="w-[75%] flex m-2 justify-center items-center rounded-full shadow shadow-gray-400 p-4 bg-gray-100 text-lg font-bold cursor-pointer hover:bg-gray-200 hover:scale-110 ease-in duration-300">
                            <AiOutlineMail size={20}/>
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                ):(
                    ""
                )
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curson-pointer hover:scale-110 ease-in duration-300 hover:bg-gray-200">
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curson-pointer hover:scale-110 ease-in duration-300 hover:bg-gray-200">
                        <GrProjects size={20}/>
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curson-pointer hover:scale-110 ease-in duration-300 hover:bg-gray-200">
                        <AiOutlineProject size={20}/>
                    </a>
                    <a href="https://drive.google.com/file/d/1Ae7sTrP0cFANXMJVc9nYIYBWVNwuB-3_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curson-pointer hover:scale-110 ease-in duration-300 hover:bg-gray-200">
                        <BsPerson size={20}/>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curson-pointer hover:scale-110 ease-in duration-300 hover:bg-gray-200">
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav