import React from 'react'
import laptop from '../assets/laptop.gif'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Home = () => {

    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={22} />
                </>
            ),
            href: 'https://www.linkedin.com/in/miguel-romero-arjona-88aaa021b/',
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={22} />
                </>
            ),
            href: 'https://github.com/migromarj',
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={22} />
                </>
            ),
            href: 'mailto:miguelromeroarjona@gmail.com',
        },
    ];

    return (
        <div name='home'
            className='h-screen w-full bg-gradient-to-b from-yellow-200 to-yellow-100 flex flex-col'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col  justify-center h-full'>

                    <h3 className='z-10 text-3xl md:text-5xl text-gray-800 my-8 md:text-left text-center'>Hi there</h3>
                    <h2 className='z-10 text-4xl md:text-7xl font-bold text-black md:text-left text-center'>
                        I'm Miguel Romero Arjona
                    </h2>
                </div>

                <div className='z-10'>
                    <img src={laptop} alt='A laptop' className='mx-auto w-2/3 md:w-full' />
                </div>
            </div>
            <div className='z-10'>
                <ul className='flex justify-center mb-8'>
                    {socialLinks.map(({ id, child, href }) => (
                        <li
                            key={id}
                            className={
                                'flex justify-between items-center w-13 mx-1 h-14 px-4 rounded-full bg-purple-600 1.5md:hidden'
                            }
                        >
                            <a
                                href={href}
                                className='flex justify-between items-center w-full text-yellow-200'
                                target='_blank'
                                rel='noreferrer'
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home