import React from 'react'
import { Categories } from '../assets/mockData'
import HeroImage from "../assets/Images/image_home_1.png"
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
const Home = () => {
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
    
            <div className='bg-red-600 text-white font-bold px-2.5'>SHOP BY CATEGORIES</div>
                <ul className='space-y-4 bg-gray-100 p-3 border'>
                    {Categories.map((category , index)=>(
                        <li key={index} className='flex items-center text-sm font-medium'>
                            <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='w-full md:w-9/12 md:mt-0 h-96 relative'>
                <img src={HeroImage} alt="" className='h-full w-full'/>
                <div className='absolute top-16 left-8'>
                    <p className='text-gray-600 mb-4'>YousOF | E-shop</p>
                    <h1 className='text-3xl font-bold'>WELCOME TO E-SHOP</h1>
                    <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLIONS+ PRODUCES</p>
                    <button className='bg-red-600 px-8 py-1.5 text-white mt-4  hover:border-r-red-700
                    transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
                </div>
            </div>
        </div>
        <InfoSection />
        <CategorySection />
    </div>

  )
}

export default Home
