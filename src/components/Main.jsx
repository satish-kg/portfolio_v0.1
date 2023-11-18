import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import bg_image from '../assets/zojiLa_bg.jpg';
import {FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook} from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover scale-x-[-1]' src={bg_image}></img>
            <div className='w-full h-screen left-0 top-0 absolute bg-white/50'>
                <div className='max-w-[700px] w-full h-full m-auto flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-3xl font-bold text-gray-800'>I am Satish Kumar.</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 test-gray-800'>I'm a 
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Coder.',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Developer.',
                                2000,
                                'Tech Enthusiast.',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '6px', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                        <FaTwitter className='cursor-pointer' size={20}/>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        <FaFacebook className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;