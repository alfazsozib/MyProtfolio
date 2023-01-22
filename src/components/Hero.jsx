import React from 'react'
import { AiOutlineArrowRight} from "react-icons/ai"
import "./hero.css"
import Resume from "../data/Resume.pdf"
import { motion } from "framer-motion"
function Hero() {
  return (
    <>
    <div id='hero' className="hero w-[100%] max-w-[1644px] mx-auto relative h-[100vh] flex flex-col justify-center">
      <nav className='absolute right-12 top-10'>
       <a href={Resume} download={"Resume"}><button className='bg-[#29cfd5] hover:bg-[#03989e] py-2 px-10 rounded-lg text-white font-Regular'>Resume</button></a> 
      </nav>
      <div className='flex flex-col text-center items-center'>
        <h1 className='text-[60px] text-white font-Regular leading-10 '>Hey, I'm <span className='text-[#29cfd5]'>Alfaz Hosain</span></h1>
        <h1 className='text-white text-[60px] font-Regular'>I am a Full Stack Developer</h1>
        <motion.button   initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
        // whileTap={{ scale: 0.2 }}
        whileInView={{ opacity: 1 }}>
              <a href="#nav"><button className='text-white border-2 border-[#29cfd5] mt-3 hover:bg-[#29cfd5] px-14 py-4 items-center font-Regular flex gap-3 ar-btn'>Browse Me<span className='arrow font-bold'><AiOutlineArrowRight size={25} /></span> </button></a> 
        </motion.button>
      </div>
    </div>
    </>

  )
}

export default Hero
