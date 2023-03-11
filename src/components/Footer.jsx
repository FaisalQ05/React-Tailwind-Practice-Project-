import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300'>
            <h1 className='text-center w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4 px-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, labore quasi magni molestiae, sapiente beatae vero tenetur ipsa inventore illum consequatur? Ea, animi.</p>
            <div className='flex justify-between w-[70%] mx-auto my-9'>
                <FaFacebookSquare size={30} className='hover:text-blue-900 cursor-pointer transition-all duration-300'/>
                <FaInstagram size={30} className='hover:text-pink-600 cursor-pointer transition-all duration-300'/>
                <FaTwitterSquare size={30} className='hover:text-blue-400 cursor-pointer transition-all duration-300'/>
                <FaGithubSquare size={30} className='hover:text-gray-500 cursor-pointer transition-all duration-300'/>
                <FaDribbbleSquare size={30} className='hover:text-amber-500 cursor-pointer transition-all duration-300'/>
            </div>
            <div className='text-center grid grid-cols-2 md:grid-cols-4 mx-auto mt-16'>
                <div>
                    <h6 className='text-2xl font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2'>Analytic</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Commerce</li>
                        <li className='py-2'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-2xl font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2'>Pricing</li>
                        <li className='py-2'>Documentation</li>
                        <li className='py-2'>Guides</li>
                        <li className='py-2'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-2xl font-medium text-gray-400 mt-20 md:mt-0'>Company</h6>
                    <ul>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Jobs</li>
                        <li className='py-2'>Press</li>
                        <li className='py-2'>Carrers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-2xl font-medium text-gray-400 mt-20 md:mt-0'>Leagl</h6>
                    <ul>
                        <li className='py-2'>Claim</li>
                        <li className='py-2'>Policy</li>
                        <li className='py-2'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer