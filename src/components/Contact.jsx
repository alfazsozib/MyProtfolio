import React from 'react'

function Contact() {
  return (
    <div id='contactMe' className='py-44 p-12 max-w-[1644px] mx-auto bg-slate-900 '>
        <h1 className='text-center font-Regular text-white text-[45px] pb-20'>Contact</h1>
        <div className='grid grid-cols-2'>
        <div className=''>
            <h1 className='flex flex-col font-Regular text-white text-6xl gap-2'>Get in <span>Touch!</span></h1>
        </div>
        <div className='w-[470px] h-[500px] ml-20 rounded-3xl bg-slate-800'>
            <form className='flex flex-col gap-4 p-10'>
                <div className='flex flex-col'>
                <label className='font-Regular text-white pb-2' htmlFor="Name">Name</label>
                <input type="text" className='px-3 py-2 rounded-lg' placeholder='Name' />
                </div>
                <div className='flex flex-col'>
                <label className='font-Regular text-white pb-2' htmlFor="Name">Email</label>
                <input type="email" className='px-3 py-2 rounded-lg' placeholder='Email' />
                </div>
                <div className='flex flex-col'>
                <label className='font-Regular text-white pb-2' htmlFor="message">Message</label>
                <textarea name="message" className='rounded-lg' id="" cols="8" rows="4"></textarea>
                </div>
                <button className='bg-[#29cfd5] mt-2 hover:bg-[#24bec4] font-Regular text-white py-3 rounded-lg'>Send Message</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact