import React from 'react'
import banner from "../images/banner.png"

function About() {
  return (
    // bg-[#15223a]
    <div id='aboutMe' className='h-[100vh] max-w-[1644px] mx-auto bg-slate-900  text-white py-12'>
      {/* <h1 className='font-Regular text-center text-[50px]'>About</h1> */}
      <div className='about--section pt-32 relative'>
        <div className='left--side ml-12 flex flex-col gap-6'>
          <h1 className='text-[45px] font-Regular'>About Me</h1>
          <p className='w-1/3 font-Regular'>I'm Alfaz Hosain. I am a <span className='text-[#29cfd5]'>#Freelance</span> <span className='text-[#29cfd5]'>  #Fullstack #Developer.</span> And I am also a Blockchain enthusiast. I have serious Interest in <span className='text-[#29cfd5]'>#Blockchain.</span>  </p>
          <div className="buttons flex gap-6">
            <button className='bg-[#29cfd5] hover:bg-[#03989e] px-8 py-2 rounded-lg'><a href="#contactMe" className='font-Regular'>Contact</a></button>
            <button className='bg-[#29cfd5] hover:bg-[#03989e] px-8 py-2 rounded-lg'><a href="#portfoli"  className='font-Regular'>Portfolio</a></button>
          </div>
        </div>
        <div className='right--side justify-center '>
            <img className='absolute mr-12 right-4 top-10 w-[550px] shadow-[#29cfd5] shadow-lg rounded-full' src={banner} alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default About
