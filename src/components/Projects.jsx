import React from 'react';
import ProjectItem from './ProjectItem'
import placeholder1 from '../assets/mgs1.jpg'
import placeholder2 from '../assets/mgs2.jpg'
import placeholder3 from '../assets/mgs3.jpg'
import placeholder4 from '../assets/mgs4.jpg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040] m-auto p-4 py-16 md:pl-20'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-5'>Projects</h1>
            <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo temporibus quos velit, reiciendis nobis iste repellendus eum at voluptate tempora quisquam qui sed minima? Tempora excepturi voluptas eveniet ullam.</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={placeholder1} title='Project 1' console= 'PS1'/>
                <ProjectItem img={placeholder2} title='Project 2' console='PS2' />
                <ProjectItem img={placeholder3} title='Project 3' console='PS2' />
                <ProjectItem img={placeholder4} title='Project 4' console='PS3' />
            </div>
        </div>
    )
}

export default Projects;