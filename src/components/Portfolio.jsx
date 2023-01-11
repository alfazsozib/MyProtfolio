import React from 'react'
import prt1 from '../images/prt1.png'

function Portfolio() {
  return (
    <div id='portfolio' className='relative bg-black  flex justify-between p-12 h-[100vh]'>
        <div>
            <h1 className='text-white text-left  font-Regular text-[70px] flex flex-col'>My <span>Work's</span> </h1>
        </div>  
        <div className='bg-red-200 w-[900px] grid grid-cols-2 p-2'>
            
            
            <div className='card bg-white'>
                <img src={prt1} alt="" srcset="" />
                <h1>Food Delivery Site</h1>
                <button>Live Demo</button>
            </div>
            
        </div> 
    </div>
  )
}

export default Portfolio
