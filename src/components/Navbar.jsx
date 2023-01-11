import React from 'react'

function Navbar() {
  return (
    <div className='nav max-w-[1644px] mx-auto'>
      <div id='nav' className="nav--items bg-[#000000] border-b-4 border-b-[#0abec4]">
          <ul className='flex gap-12 text-white font-Regular text-[18px] px-10 py-3'>
            <li className=''><a href="#hero" className='hover:text-[#03989e] '>Home</a></li>
            <li><a href="#aboutMe" className='hover:text-[#03989e] '>About</a></li>
            <li><a href="#portfolio" className='hover:text-[#03989e] '>Portfolio</a></li>
            <li><a href="#skills" className='hover:text-[#03989e] '>Skills</a></li>
            <li><a href="#contactMe" className='hover:text-[#03989e] '>Contact</a></li>
          </ul>
      </div>                
    </div>
    
  )
}

export default Navbar
