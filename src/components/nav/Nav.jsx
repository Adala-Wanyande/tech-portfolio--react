import React from 'react'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='block fixed p-4 p-4 -translate-y-[25rem] translate-x-[1rem] flex flex-col space-y-4 lg:space-y-8 rounded-full bg-gray-800 w-10 shadow-xl p-4 text-white'>
      <a href="#" className='self-center'><FaHome/></a>
      <a href="#about" className='self-center'><FaUser/></a>
      <a href="#experience" className='self-center'><FaBook/></a>
      <a href="#services" className='self-center'><RiServiceFill/></a>
      <a href="#contact" className='self-center'><AiFillMessage/></a>
    </nav>
  )
}

export default Nav