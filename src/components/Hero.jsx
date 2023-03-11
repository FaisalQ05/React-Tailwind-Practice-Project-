import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 sm:text-xl md:text-2xl'>Growing with Data Analytic</p>
                <h1 className='md:text-7xl sm:text-6xl text:4xl'>Grow with data.</h1>
                <div className='flex justify-center items-center mt-3'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Faist and flexible financing for</p>
                    <Typed className='md:text-3xl sm:text-2xl text-xl font-bold pl-2' 
                    strings={['BTB','BTC']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias corporis earum!</p>
                <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero