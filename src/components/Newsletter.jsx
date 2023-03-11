import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-4 text-white px-5'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 lg:gap-3 mt-4'>
                <div className='lg:col-span-2 self-center justify-self-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign to our news Letter and Stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium sm:my-6 my-3 mx-auto  py-3 px-6 ml-0 sm:ml-4'>
                            Notify me
                        </button>
                    </div>
                    <p className=''>we care about the production of your data. Read our <span className='text-[#00df9a]'>Privacy policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter