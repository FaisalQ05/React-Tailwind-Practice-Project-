import React from 'react'
import Single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full md:py-[10rem] py-[5rem] px-4 bg-white'>
            <div className='max-w-[1240px] grid md:grid-cols-3 gap-10 mx-auto'>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-200'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto py-3'>Start trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-200'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
                    <h2 className='text-2xl font-bold text-center'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                    </div>
                    <button className='text-[#00df9a] w-[200px] bg-black rounded-md font-medium my-6 mx-auto py-3'>Start trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-200'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto py-3'>Start trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards