import React from 'react'
import Progressbar from './Progressbar'


function Skills() {
  return ( 
    <div id='skills' className='pt-44 max-w-[1644px] mx-auto bg-slate-900'>
        <h1 className='text-center font-Regular text-white text-[45px] py-12'>Skills</h1>
        <div className='grid grid-cols-2 p-12'>
          <div className='flex flex-col'>
            <h2 className='font-Regular text-6xl flex flex-col text-white'>
              <span className='text-[14px] text-yellow-500 py-6'>WHAT I CAN DO</span>
              Skills &
              <span>Proficiencies</span>
            </h2>
          </div>
        <div className='pr-12'>
          <Progressbar lebelText={"Python"} bgcolor={"#29cfd5"} progress={85} height={22} />
          <Progressbar lebelText={"C"} bgcolor={"#29cfd5"} progress={60} height={22} />
          <Progressbar lebelText={"C++"} bgcolor={"#29cfd5"} progress={70} height={22} />
          <Progressbar lebelText={"Javascript"} bgcolor={"#29cfd5"} progress={75} height={22} />
          <Progressbar lebelText={"HTML"} bgcolor={"#29cfd5"} progress={95} height={22} />
          <Progressbar lebelText={"CSS"} bgcolor={"#29cfd5"} progress={85} height={22} />
          <Progressbar lebelText={"Tailwind css"} bgcolor={"#29cfd5"} progress={80} height={22} />
          <Progressbar lebelText={"React Js"} bgcolor={"#29cfd5"} progress={75} height={22} />
          <Progressbar lebelText={"Ether js"} bgcolor={"#29cfd5"} progress={80} height={22} />
        </div>
        </div>
    </div>
  )
}

export default Skills
