import React from 'react';
import ProjectItem from './ProjectItem'
import placeholder1 from '../assets/pizza_thumb.png'
import placeholder2 from '../assets/meme_thumb.png'
import placeholder3 from '../assets/cre-graph.png'
import placeholder4 from '../assets/calculator_thumb.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040] m-auto p-4 py-16 md:pl-20'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-5'>Projects</h1>
            <p className='text-center py-8'>Check out some of my most recent projects. Click <a href='https://github.com/satish-kg?tab=repositories' className='text-[#24479e]'>here</a> for more.</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={placeholder1} title='Pizza Store Full Stack' console= 'End-to-end full-stack Next.js and NodeJS-MongoDB based application with CRUD functionality.' url="https://pizzastore-snowy.vercel.app/"/>
                <ProjectItem img={placeholder4} title='AI Sentiment Analyzer' console='End-to-end full-stack AI application to analyze positive/negative/neutral sentiment in a string. Dockerized python backend deployed on render. Frondend on netlify.'  url="https://senfiment-analyzer.netlify.app/"/>
                <ProjectItem img={placeholder3} title='Excel to JSON' console='A MERN app, users can upload an Excel file and data is converted in JSON format and then visualized to compare easily.'  url="https://github.com/satish-kg/excel2json"/>
                <ProjectItem img={placeholder2} title='Meme Maker' console='React Vite based application. User can enter text and download the meme.'  url="https://peppy-bunny-524ca6.netlify.app/"/>
            </div>
        </div>
    )
}

export default Projects;
