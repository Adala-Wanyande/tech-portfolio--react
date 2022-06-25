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
      <div className='flex justify-center items-center border-b-2'>
        <img className='w-44 h-44 mt-8 rounded shadow-xl mb-8' src={ProfilePhoto} alt="Profile Photo" />
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex justify-center mr-4 w-8 h-8 mt-8 hover:cursor-pointer'>
          {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          <a href="https://www.github.com/Adala-Wanyande">
            <i className="fa-brands fa-github-square fa-2xl text-gray-500 hover:text-gray-400"></i>
          </a>
        </div>
        <div className='flex justify-center ml-4 w-8 h-8 mt-8 hover:cursor-pointer'>
          {/* <FontAwesomeIcon icon="fa-brands fa-github-square" /> */}
          <a href="https://www.linkedin.com/in/benard-adala-wanyande-6570b4238">
            <i class="fa-brands fa-linkedin fa-2xl text-gray-500 hover:text-gray-400"></i>
          </a>
        </div>
      </div>
      <div className='flex justify-center hover:cursor-pointer mt-4 h-8'>
        <svg className='hover:w-8 hover:h-8 text-gray-400' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 13L12 17L7 13" stroke="#4A4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 7L12 11L7 7" stroke="#4A4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
    </div>  
  )
}

export default Header