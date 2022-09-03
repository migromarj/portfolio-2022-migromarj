import React from 'react'
import laptop from '../assets/laptop.gif'

const Home = () => {
  return (
    <div name='home'
         className='h-screen w-full bg-gradient-to-b from-yellow-200 to-yellow-100'>
        
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
    </div>
  )
}

export default Home