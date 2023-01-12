import React from 'react'
import { AiOutlineArrowRight} from "react-icons/ai"
import "./hero.css"


function Hero() {
  return (
    <>
    <div id='hero' className="hero w-[100%] max-w-[1644px] mx-auto relative h-[100vh] flex flex-col justify-center">
      <nav className='absolute right-10 top-10'>
        <button className='bg-[#29cfd5] hover:bg-[#03989e] py-2 px-7 rounded-lg text-white font-Regular'>Resume</button>
      </nav>
      <div className='flex flex-col text-center items-center'>
        <h1 className='text-[60px] text-white font-Regular leading-10'>Hey, I'm <span className='text-[#29cfd5]'>Alfaz Hosain</span></h1>
        <h1 className='text-white text-[60px] font-Regular'>I am a Full Stack Developer</h1>
        <button className='text-white border-2 border-[#29cfd5] mt-3 hover:bg-[#29cfd5] px-14 py-4 items-center font-Regular flex gap-3 ar-btn'> <a href="#nav">Browse Me</a>  <span className='arrow font-bold'><AiOutlineArrowRight size={25} /></span> </button>
      </div>
    </div>
    </>

  )
}

export default Hero
