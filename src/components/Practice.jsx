import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Practice = () => {
    const [mobile, setMobile] = useState(false)
    return (
        <div id='Header' className='text-white max-w-[1080px] mx-auto flex items-center px-6 py-1'>
            <h1 className='text-4xl py-2 w-full'>Notes App</h1>
            <ul className='gap-9 hidden md:flex text-lg'>
                <li className='cursor-pointer hover:text-gray-400 transition-all duration-500'>Home</li>
                <li className='cursor-pointer hover:text-gray-400 transition-all duration-500'>Products</li>
                <li className='cursor-pointer hover:text-gray-400 transition-all duration-500'>Add</li>
                <li className='cursor-pointer hover:text-gray-400 transition-all duration-500'>About</li>
                <li className='cursor-pointer hover:text-gray-400 transition-all duration-500'>Contact</li>
            </ul>
            <div className='md:hidden' onClick={() => setMobile(!mobile)}>
                {mobile ?  null : <AiOutlineMenu size={20}/>}
            </div>
            <div id='FixedMenuForMobile' className={`ease-in-out duration-500 fixed left-0 top-0 w-full h-full bg-black ${mobile ? '':'top-[-100%]'}`}>
                <div className='px-6 flex items-center'>
                    <h1 className='text-4xl py-2 w-full'>Notes App</h1>
                <AiOutlineClose onClick={()=>setMobile(!mobile)} size={25} />
                </div>
                <ul className='flex flex-col gap-7 text-2xl items-center mt-20'>
                    <li className='border-b border-gray-500 pb-2'>Home</li>
                    <li className='border-b border-gray-500 pb-2'>Products</li>
                    <li className='border-b border-gray-500 pb-2'>Add</li>
                    <li className='border-b border-gray-500 pb-2'>About</li>
                    <li className='border-b border-gray-500 pb-2'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Practice