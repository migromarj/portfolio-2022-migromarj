import React from 'react'

import { FaGithub } from 'react-icons/fa'

const ProjectCard = (props) => {
    return (
        <div key={props.id} className={`z-10 shadow-md shadow-gray-600 rounded-lg bg-gray-300 pt-2 ${props.style}`}>
            <img
                src={props.src}
                alt={props.name}
                className='mx-auto rounded-md duration-200 hover:scale-105 h-20'
            />

            <div className='flex items-center justify-center mt-1'>
                <p className='text-black'>
                    {props.name}
                </p>
            </div>
            <div className='flex items-center justify-center'>

                <a href={props.link} className='flex items-center justify-center w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105 bg-black rounded-full'>
                    <FaGithub size={30} />&nbsp;&nbsp;Code
                </a>
            </div>
        </div>
    )
}

export default ProjectCard