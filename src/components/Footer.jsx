import React from 'react'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer class='shadow flex items-start justify-center p-6 bg-black'>
                <span class='text-sm text-gray-500 text-center font-bold dark:text-gray-400 mb-0'>
                    Designed by Miguel Romero Arjona 🦎<br/>&copy; {year} 
                </span>

            </footer>
        </div>
    )
}

export default Footer