import React from 'react'
import { AiOutlineArrowRight} from "react-icons/ai"
import portfolioData from '../data/portfolioData'

function Portfolio() {
  return (
    <div id='portfolio' className='max-w-[1644px] mx-auto bg-slate-900 max-md:flex max-md:flex-col max-md:items-center'>
      <h1 className='text-center font-Regular text-[55px] pt-12 text-white '>Work's</h1>
      <p className='text-center pb-5 text-[12px] items-center text-yellow-500 max-sm:pb-16'>Take a look at my work's</p>
      
      <div className='cards p-12 max-sm:p-0  grid grid-cols-3 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 overflow-hidden'>
        {portfolioData.map((data,index)=>
          <div key={index} className="card w-[350px] p-5 flex flex-col gap-4 text-center items-center border-2 border-[#29cfd5] hover:-translate-y-3 duration-500 shadow-[#29cfd5] shadow-lg rounded-xl">
          <img className='rounded-lg' src={data.image} alt="" />
          <h1 className='font-Regular text-[20px] text-white'>{data.name}</h1>
          <a href={data.link} rel="_blank"><button  className='bg-[#29cfd5] hover:bg-[#03989e] px-[95px]  text-white py-2 font-Regular flex gap-3 items-center rounded-lg'>Live Demo <AiOutlineArrowRight size={22} /></button></a> 
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Portfolio
