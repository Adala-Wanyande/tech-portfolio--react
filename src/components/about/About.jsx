import React from 'react'
import ProfilePhoto from '../../assets/profile-photo-2.jpeg'
import {FaAward} from 'react-icons/fa'
import {MdFolderSpecial} from 'react-icons/md'
import CallToAction2 from '../buttons/CallToAction2'

const About = () => {
  return (
    <div id='about' className='flex flex-col rounded shadow-xl justify-center bg-slate-50 p-8 space-y-4 mt-16 mx-8'>
      <h2 className='text-base text-center font-medium text-slate-500'>Get to know</h2>
      <h1 className='text-2xl text-center font-bold'>About Me</h1>
      <div className='md:flex md:flex-row md:divide-x-2'>
        <div className='flex flex-col md:flex-col md:justify-center md:w-[50%] md:px-4'>
          <div className='flex justify-center items-center border-b-2 mb-6 md:border-0'>
            <img className= 'w-44 h-44 mt-4 rounded shadow-xl mb-8' src={ProfilePhoto} alt="Profile Photo" />
          </div>
          <div className='flex flex-row space-x-4 justify-center text-white border-b-2 md:border-0'>
            <div className='rounded flex flex-col justify-center grid justify-items-center bg-gray-700 p-4 w-[9rem] drop-shadow-xl  mb-6'>
              <FaAward />
              <p className='text-sm font-bold my-2'>Experience</p>
              <p className='text-xs text-center font-extralight'>1 Month Developer Experience</p>
            </div>
            <div className='rounded flex flex-col justify-center grid justify-items-center bg-gray-700 p-4 w-[9rem] drop-shadow-xl  mb-6'>
              <MdFolderSpecial />
              <p className='text-sm font-bold my-2'>Projects</p>
              <p className='text-xs font-extralight'>2 Completed</p>
            </div>    
          </div>
        </div>
        <div className='mt-2 mb-4 text-xs font-extralight text-center p-4 md:w-[50%] md:p-16'>
          <p className='text-gray-500 my-4'>
            Hi, I'm Adala Wanyande from Nairobi persuing a bachelor's degree in Informatics
            and Computer Science at Strathmore University. I am glad to see that you clicked 
            on my portfolio.
          </p>
          <p className='text-gray-500 my-4'>
            I am currently in my third year with one more year left. Whew! I started my software
            development journey back in high school when my Computer Studies teacher taught
            us C++ for fun and I have been hooked to programming ever since.
          </p>
          <p className='text-gray-500 my-4'>
            Some of the technologies I am well versed in include: Java, JavaScript & 
            JavaScript frameworks like React, PHP and PHP frameworks like Laravel &
            CodeIgniter4.
          </p>
          <p className='text-gray-500 mt-4 mb-8'>
            I build projects during my free time like this portfolio you are going through.
            Check my <a href="https://www.github.com/Adala-Wanyande"><span className='text-sky-500'>Github profile </span></a> 
            out to see some more of my projects. I also enjoy going to the gym, playing 
            football and taking photographs of my friends.
          </p>
          <CallToAction2 />
        </div>
      </div>
        
        <a href="#experience">
          <div className='flex justify-center hover:cursor-pointer pt-4 h-8 animate-bounce'>
            <svg className='hover:animate-spin hover:w-8 hover:h-8 text-gray-400' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 13L12 17L7 13" stroke="#4A4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 7L12 11L7 7" stroke="#4A4B57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
      </div>
  )
}

export default About