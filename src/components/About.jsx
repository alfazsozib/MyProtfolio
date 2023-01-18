import React from 'react'
// import photo from "../images/photo.png"

function About() {
  return (
    // bg-[#15223a]
    <div id='aboutMe' className='h-[100vh] max-w-[1644px] mx-auto bg-slate-900  text-white py-12'>
      {/* <h1 className='font-Regular text-center text-[50px]'>About</h1> */}
      <div className='about--section pt-32 relative'>
        <div className='left--side ml-12 max-sm:m-0 flex flex-col gap-6'>
          <h1 className='text-[45px] font-Regular max-sm:text-center'>About Me</h1>
          <p className='w-1/3 max-sm:w-full font-Regular max-sm:text-center'>I'm Alfaz Hosain. A Freelance Python and web developer from Bangladesh. I have worked as a developer locally and internationaly with my individual clients and agency. And now I'm trying to jump into Web 3.0</p>
          <div className="buttons flex max-sm:justify-center max-sm:flex-col max-sm:px-12 gap-6">
            <a href="#contactMe" className='font-Regular'><button className='bg-[#29cfd5] hover:bg-[#03989e] px-8 py-2 rounded-lg'>Contact</button></a>
            <a href="#portfolio"  className='font-Regular'><button className='bg-[#29cfd5] hover:bg-[#03989e] px-8 py-2 rounded-lg'>Portfolio</button></a>
          </div>
        </div>
        <div className='right--side justify-center max-sm:hidden '>
            <img className='absolute mr-12 right-4 top-10 max-lg:w-[400px] w-[550px] shadow-[#040f10] shadow-lg' src="" alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default About
