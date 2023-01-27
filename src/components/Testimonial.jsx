import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import RatingData from '../data/Ratings'

function Testimonial() {
  return (
    <>
    <div className='max-w-[1644px] mx-auto'>
    <h1 className='text-center pt-32 pb-12 text-[45px] font-Regular text-white  bg-slate-900'>Testimonial</h1>
    <div id='Testimonial' className='h-[400px]  bg-slate-800 py-20'>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={true} showIndicators={false}>
            {RatingData.map((data)=>
            <div className='text-white flex flex-col items-center gap-4'>
                <div className='image w-[80px]'>
                    <img src={data.photo} className="rounded-full object-cover h-[80px]" alt="" srcset="" />
                </div>
                <p className='bg-slate-600 text-slate-300 rounded-lg px-4 py-1 '>{data.name}</p>
                <p>⭐⭐⭐⭐⭐</p>
                <p className='font-Regular py-2 w-1/2'>{data.Review}</p>
            </div>
            )}
        </Carousel>
    </div>
    </div>
  </>

  )
}

export default Testimonial