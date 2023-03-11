import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-1240px mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] h-auto mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Data Analytic Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytic Generally</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nam a molestiae fugiat deserunt laudantium sint aut dicta minus iusto excepturi, magni necessitatibus totam quia error. Sed sapiente veritatis mollitia numquam aliquam fuga culpa necessitatibus, aliquid optio non, aut rerum et, possimus iure delectus?</p>
                    <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto md:m-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics