import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {

    const iconSize = 27

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={iconSize} />
                </>
            ),
            href: 'https://www.linkedin.com/in/miguel-romero-arjona',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={iconSize} />
                </>
            ),
            href: 'https://github.com/migromarj',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={iconSize} />
                </>
            ),
            href: 'mailto:miguelromeroarjona@gmail.com',
        },
    ];

    return (

        <div className='hidden 1.5xl:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li
                        key={id}
                        className={
                            'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 1.5xl:hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-600 ' + style
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
    );
};

export default SocialLinks