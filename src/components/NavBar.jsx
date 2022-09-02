import React, { useState } from 'react'
import { FaBars, FaTimesCircle } from 'react-icons/fa'


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

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-yellow-200 fixed'>
            <div>
                <h1 className='text-6xl font-signature font-bold ml-2'>migromarj</h1>
            </div>

            <ul className='hidden md:flex'>

                {links.map(link => (

                    <li key={link.id} className='text-lg px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-105 duration-200'>
                        {link.link}
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-600 md:hidden'>
                {nav ? <FaTimesCircle size={27}/> : <FaBars size={27} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-200 to-yellow-100 text-gray-600'>
                    
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