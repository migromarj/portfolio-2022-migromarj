import React from 'react'
import miguelImage from '../assets/miguel.jpg'

const About = () => {
    return (
        <div name='about'
            className='w-full h-max xl:h-screen bg-gradient-to-b from-yellow-100 to-gray-400 text-black'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <div className='pb-4'>
                        <p className='z-10 text-4xl font-bold md:text-left text-center border-b-4 border-purple-600 text-purple-600'>
                            About
                        </p>
                        <p className='z-10 text-xl mt-12 mb-10'>
                            I'm a student of Computer Software Engineering at the University of Seville. Behind: a lot of enthusiasm, a lot of learning, work and effort, but also great rewards:
                        </p>
                        <ul className='z-10 text-xl'>

                            <li>
                                &nbsp;&nbsp;&nbsp;&nbsp;<b>•</b> Have the opportunity to learn about projects and feel that I am part of them in some way.
                            </li>
                            <br />
                            <li>
                                &nbsp;&nbsp;&nbsp;&nbsp;<b>•</b> Grow every day hand in hand with incredible colleagues and people.
                            </li>

                        </ul>
                    </div>
                </div>

                <div className='z-10'>
                    <img src={miguelImage} alt='Me' className='mx-auto w-2/3 rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default About