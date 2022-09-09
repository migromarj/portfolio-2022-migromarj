import React from 'react'

const TechnologyCard = (props) => {
    return (
        <div
            key={props.id}
            className={`mx-1 flex justify-center items-center py-2 bg-gray-300 z-10 shadow-md hover:scale-105 duration-500 rounded-lg ${props.style}`}
        >
            <div>
                <img src={props.src} alt={props.title} className='w-10 mx-auto' />
                <p className='mt-4 text-purple-800'>{props.title}</p>
            </div>
        </div>
    )
}

export default TechnologyCard