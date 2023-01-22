import React from 'react'
import { AiOutlineArrowRight} from "react-icons/ai"
import portfolioData from '../data/portfolioData'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from 'react';

function Portfolio() {
  const [numOfElem,setNumOfElem] = useState(6);
  const [lenData, setLenData] = useState(portfolioData.length);
  const slice = portfolioData.slice(0,numOfElem);
  const ShowMore=()=>{
    setNumOfElem(numOfElem+6)
    setLenData(portfolioData.length-3)
  }
  return (
    <div id='portfolio' className='max-w-[1644px] mx-auto bg-slate-900 max-md:flex max-md:flex-col max-md:items-center'>
      <h1 className='text-center font-Regular text-[55px] pt-12 text-white '>Work's</h1>
      <p className='text-center pb-5 text-[12px] items-center text-yellow-500 max-sm:pb-16'>Take a look at my work's</p>
      
      
      <div className='cards p-12 max-sm:p-0  grid grid-cols-3 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 overflow-hidden'>
    
        {slice.map((data,index)=>
          <div key={index} className="card w-[350px] p-5 flex flex-col gap-4 text-center items-center border-2 border-[#29cfd5] hover:-translate-y-3 duration-500 shadow-[#29cfd5] shadow-sm rounded-xl">
          <img className='rounded-lg' src={data.image} alt="" />
          <h1 className='font-Regular text-[20px] text-white'>{data.name}</h1>
          <a href={data.link} rel="_blank"><button  className='bg-[#29cfd5] hover:bg-[#03989e] px-[95px]  text-white py-2 font-Regular flex gap-3 items-center rounded-lg'>Live Demo <AiOutlineArrowRight size={22} /></button></a> 
          </div>
        )}
        
      </div>
      {lenData>6?
      <div className='w-[100%] flex justify-center'>
        <button onClick={ShowMore} className='text-white bg-[#29cfd5] hover:bg-[#03989e] px-12 py-3 rounded-xl'>Show More</button>
      </div>
      :null}
    </div>
  )
}

export default Portfolio
