import React from 'react'

import bootstrap from '../assets/technologies/bootstrap.png'
import c from '../assets/technologies/c.png'
import css from '../assets/technologies/css.png'
import dart from '../assets/technologies/dart.png'
import firebase from '../assets/technologies/firebase.png'
import flutter from '../assets/technologies/flutter.png'
import gcloud from '../assets/technologies/gcloud.png'
import git from '../assets/technologies/git.png'
import heroku from '../assets/technologies/heroku.svg'
import html from '../assets/technologies/html.png'
import java from '../assets/technologies/java.svg'
import javascript from '../assets/technologies/javascript.png'
import mariadb from '../assets/technologies/mariadb.png'
import matlab from '../assets/technologies/matlab.png'
import mysql from '../assets/technologies/mysql.png'
import npm from '../assets/technologies/npm.png'
import python from '../assets/technologies/python.png'
import r from '../assets/technologies/r.svg'
import react from '../assets/technologies/react.png'
import spring from '../assets/technologies/spring.png'
import tailwind from '../assets/technologies/tailwind.png'


const Technologies = () => {

    const languages = [
        {
            id: 1,
            src: java,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id: 2,
            src: python,
            title: 'Python',
            style: 'shadow-blue-400',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: dart,
            title: 'Dart',
            style: 'shadow-sky-300',
        },
        {
            id: 5,
            src: c,
            title: 'C',
            style: 'shadow-blue-700',
        },
        {
            id: 6,
            src: matlab,
            title: 'MATLAB',
            style: 'shadow-red-600',
        },
        {
            id: 7,
            src: r,
            title: 'R',
            style: 'shadow-sky-200',
        },
    ];

    const webDesign = [
        {
            id: 8,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 9,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 10,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600',
        },
        {
            id: 11,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400',
        }
    ]

    const deployment = [
        {
            id: 12,
            src: gcloud,
            title: 'Google Cloud',
            style: 'shadow-yellow-500',
        },
        {
            id: 13,
            src: heroku,
            title: 'Heroku',
            style: 'shadow-purple-600',
        },
        {
            id: 14,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-orange-600',
        },
    ]

    const toolkits = [
        {
            id: 15,
            src: react,
            title: 'React',
            style: 'shadow-sky-200',
        },
        {
            id: 16,
            src: spring,
            title: 'Spring',
            style: 'shadow-green-500',
        },
        {
            id: 17,
            src: flutter,
            title: 'Flutter',
            style: 'shadow-sky-400',
        },
    ]

    const db = [
        {
            id: 18,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-blue-800',
        },
        {
            id: 19,
            src: mariadb,
            title: 'MariaDB',
            style: 'shadow-gray-400',
        },
    ]

    const other = [
        {
            id: 20,
            src: git,
            title: 'git',
            style: 'shadow-orange-600',
        },
        {
            id: 21,
            src: npm,
            title: 'npm',
            style: 'shadow-red-400',
        },
    ]

    const techs = [languages, webDesign, deployment, toolkits, db, other]

    return (
        <div
            name='technologies'
            className='bg-gradient-to-b from-gray-400 to-gray-700 w-full h-max'
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-yellow-200'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-yellow-200 p-2 inline'>
                        Technologies
                    </p>
                </div>

                <div className='w-full grid grid-cols-1 0.5sm:grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(
                            (tech) => (

                                tech.map(({ id, src, title, style }) => (

                                    <div
                                        key={id}
                                        className={`mx-1 flex justify-center items-center py-2 bg-gray-300 z-10 shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}
                                    >
                                        <div>
                                            <img src={src} alt={title} className='w-10 mx-auto' />
                                            <p className='mt-4 text-purple-800'>{title}</p>
                                        </div>
                                    </div>

                                ))
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Technologies