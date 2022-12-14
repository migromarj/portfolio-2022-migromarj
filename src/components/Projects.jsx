import React from 'react'

import SevenIslands from '../assets/projects/7islands.jpg'
import DogAPI from '../assets/projects/dogapi.svg'
import PhotEye from '../assets/projects/photeye.png'
import Portfolio from '../assets/projects/portfolio.PNG'
import RN from '../assets/projects/rn.png'
import KT from '../assets/projects/kt.png'
import Skeletonization from '../assets/projects/skeletonization.png'
import SnakeGame from '../assets/projects/snake.png'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: Portfolio,
            name: 'Portfolio 2022',
            link: 'https://github.com/migromarj/portfolio-2022-migromarj',
        },
        {
            id: 2,
            src: SevenIslands,
            name: '7Islands',
            link: 'https://github.com/migromarj/7Islands-Game',
        },
        {
            id: 3,
            src: Skeletonization,
            name: 'Skeletonization Algorithm',
            link: 'https://github.com/migromarj/Skeletonization-Algorithm',
        },
        {
            id: 4,
            src: PhotEye,
            name: 'PhotEye',
            link: 'https://github.com/migromarj/PhotEye',
        },
        {
            id: 5,
            src: RN,
            name: 'Task App - React Native',
            link: 'https://github.com/migromarj/React-Native-TaskApp',
        },
        {
            id: 6,
            src: SnakeGame,
            name: 'Snake Game',
            link: 'https://github.com/migromarj/Snake-Game',
        },
        {
            id: 7,
            src: DogAPI,
            name: 'DogAPI App',
            link: 'https://github.com/migromarj/DogAPI-App',
            style: 'mb-0 sm:mb-24 1.5md:mb-0'
        },
        {
            id: 8,
            src: KT,
            name: 'Task App - Kotlin',
            link: 'https://github.com/migromarj/Kotlin-Task-App',
            style: 'mb-24 1.5md:mb-0'
        },
    ];

    return (
        <div
            name='projects'
            className='bg-gradient-to-b from-gray-700 to-black w-full text-white md:h-max xl:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='z-10 pt-4 pb-8'>
                    <p className='text-4xl font-bold md:text-left text-center border-b-4 border-purple-400 text-purple-400'>
                        Projects
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 1.75md:grid-cols-4 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, src, name, link, style }) => (
                        <ProjectCard id={id} src={src} name={name} link={link} style={style} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects