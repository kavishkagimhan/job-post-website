import React from 'react';
import heroimg from '../assets/jobbg.jpg'

function Hero() {
  return (
    <div className='w-[100%] bg-center justify-center bg-no-repeat bg-cover h-[400px] flex items-center' style={{ backgroundImage: `url(${heroimg})` }}>
        <input className='p-[12px] w-1/2 focus:outline-none ' type="text" placeholder='ex. Frontend, web' />
        <button className='px-6 bg-blue-400 p-[12px] text-white hover:bg-blue-700 transition delay-150 duration-300'>Search</button>
    </div>
  )
}

export default Hero