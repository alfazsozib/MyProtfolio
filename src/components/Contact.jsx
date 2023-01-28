import React from 'react'
import { AiFillLinkedin,AiFillFacebook,AiFillMail,AiFillGithub } from "react-icons/ai"
import { useForm } from '@formspree/react'
function Contact() {
    const [state, handleSubmit] = useForm("xayzqqgv")
  return (
    <div id='contactMe' className='py-24 p-12 max-sm:px-2 max-w-[1644px] mx-auto bg-slate-900 '>
        <h1 className='text-center font-Regular text-white text-[45px] pb-20'>Contact</h1>
        <div className='grid grid-cols-2 max-sm:grid max-sm:grid-cols-none'>
        <div className='max-sm:hidden'>
            <h1 className='flex flex-col font-Regular text-white text-6xl gap-2'>Get in <span>Touch!</span></h1>
            <div className='text-white flex gap-4 py-12 pl-2'>
            <a href="https://www.facebook.com/Alfazsozib/"><AiFillFacebook size={50} /></a>
            <a href="https://www.linkedin.com/in/md-alfaz-hosain-b20260164/"><AiFillLinkedin size={50}/></a>
            <a href="alfazsozib@gmail.com"><AiFillMail size={50}/></a>
            <a href="https://github.com/alfazsozib"><AiFillGithub size={50} /></a>
            </div>
        </div>
        <div className='w-[470px] max-sm:w-[340px] max-sm:h-[450px] h-[500px] ml-20 max-sm:ml-6  rounded-3xl bg-slate-800'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-sm:p-4 p-10'>
                <div className='flex flex-col'>
                <label className='font-Regular text-white pb-2' htmlFor="Name">Name</label>
                <input type="text" className='px-3 py-2 rounded-lg' placeholder='Name' />
                </div>
                <div className='flex flex-col'>
                <label className='font-Regular text-white pb-2' htmlFor="email">Email</label>
                <input type="email" className='px-3 py-2 rounded-lg' placeholder='Email' />
                </div>
                <div className='flex flex-col'>
                <label className='font-Regular text-white pb-2' htmlFor="message">Message</label>
                <textarea name="message" required className='rounded-lg' id="" cols="8" rows="4"></textarea>
                </div>
                <button  className='bg-[#29cfd5] mt-2 hover:bg-[#24bec4] font-Regular text-white py-3 rounded-lg'>Send Message</button>
                <div className='text-white flex gap-4 justify-center'>
                  <a href="https://www.facebook.com/Alfazsozib/"><AiFillFacebook size={25} /></a>
                  <a href="https://www.linkedin.com/in/md-alfaz-hosain-b20260164/"><AiFillLinkedin size={25}/></a>
                  <a href="alfazsozib@gmail.com"><AiFillMail size={25}/></a>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact
