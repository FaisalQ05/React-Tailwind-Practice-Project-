import React from 'react'

const CompA = () => {
  return (
    <div className='text-white max-w-[1280px] mx-auto border border-red-400 h-screen'>
        <div className='grid justify-center content-center gap-2 p-3 border border-red-300 h-full'>
            <div className='text-black bg-amber-600 p-4 rounded-xl font-medium'>Item 1</div>
            <div className='text-black bg-amber-600 p-4 rounded-xl font-medium'>Item 2</div>
            <div className='text-black bg-amber-600 p-4 rounded-xl font-medium'>Item 3</div>
            <div className='text-black bg-amber-600 p-4 rounded-xl font-medium'>Item 4</div>
            <div className='text-black bg-amber-600 p-4 rounded-xl font-medium'>Item 5</div>
        </div>
    </div>
  )
}

export default CompA