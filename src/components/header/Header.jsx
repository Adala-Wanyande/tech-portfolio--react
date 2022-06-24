import React from 'react'
import CallToAction from '../buttons/CallToAction'
import CallToAction2 from '../buttons/CallToAction2'
import ProfilePhoto from '../../assets/profile-photo.png'

const Header = () => {
  return (
    <div className='flex flex-col rounded shadow-xl justify-center bg-slate-50 p-8 space-y-4 mt-16 mx-8'>
      <h2 className='text-base text-center font-medium text-slate-500'>Hi👋,</h2>
      <h1 className='text-2xl text-center font-bold'>I'm Adala Wanyande</h1>
      <h3 className='text-base text-center font-medium text-slate-500'>Full Stack Developer</h3>
      <div className='flex flex-row justify-center'>
        <CallToAction/>
        <CallToAction2/>
      </div>
      <div className='flex justify-center items-center border-b-2 md:border-b-0'>
        <img className='w-44 h-44 mt-8 rounded shadow-xl mb-8' src={ProfilePhoto} alt="Profile Photo" />
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex justify-center mr-4 w-8 h-8 mt-8 hover:cursor-pointer'>
          {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          <i className="fa-brands fa-github-square fa-2xl text-gray-500"></i>
        </div>
        <div className='flex justify-center ml-4 w-8 h-8 mt-8 hover:cursor-pointer'>
          {/* <FontAwesomeIcon icon="fa-brands fa-github-square" /> */}
          <i class="fa-brands fa-linkedin fa-2xl text-gray-500"></i>
        </div>
      </div>
      <div className='flex justify-center hover:cursor-pointer'>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      
    </div>  
  )
}

export default Header