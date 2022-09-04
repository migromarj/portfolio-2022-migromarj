import React, { useState } from 'react'
import { Link } from "react-scroll";

import { FaBars, FaTimesCircle } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'technologies'
        },
        {
            id: 4,
            link: 'projects'
        },

    ]

    const iconSize = 22

    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={iconSize} />
                </>
            ),
            href: 'https://www.linkedin.com/in/miguel-romero-arjona-88aaa021b/',
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={iconSize} />
                </>
            ),
            href: 'https://github.com/migromarj',
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={iconSize} />
                </>
            ),
            href: 'mailto:miguelromeroarjona@gmail.com',
        },
    ];

    return (
        <div className='z-30 flex justify-between items-center w-full h-20 px-4 text-black bg-yellow-200 fixed'>
            <div>
                <h1 className='text-6xl font-signature font-bold ml-2 select-none'>
                    <Link to={'home'} smooth duration={500}>
                        migromarj
                    </Link>
                </h1>
            </div>

            <ul className='hidden 1.5md:flex 1.5xl:hidden'>
                {socialLinks.map(({ id, child, href }) => (
                    <li
                        key={id}
                        className={
                            'flex justify-between items-center w-13 mx-1 h-14 px-4 rounded-full bg-purple-600 '
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

            <ul className='hidden md:flex'>

                {links.map(link => (

                    <li key={link.id} className='text-lg px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-105 duration-200'>
                        <Link to={link.link} smooth duration={500}>
                            {link.link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-600 md:hidden'>
                {nav ? <FaTimesCircle size={27} /> : <FaBars size={27} />}
            </div>

            {nav && (
                <ul className='visible md:invisible flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-200 to-yellow-100 text-gray-600'>

                    {links.map(link => (

                        <li key={link.id} className='text-3xl px-4 cursor-pointer capitalize py-6'>
                            {link.link}
                        </li>
                    ))}

                </ul>
            )}

        </div>
    )
}

export default NavBar