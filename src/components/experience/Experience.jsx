import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div id='about' className='flex flex-col rounded shadow-xl justify-center bg-slate-50 p-8 space-y-4 mt-16 mx-8'>
      <h2 className='text-base text-center font-medium text-slate-500'>What skills I have</h2>
      <h1 className='text-2xl text-center font-bold'>My Experience</h1>
      <div className='flex flex-col justify-center text-gray-800 grid justify-items-center md:flex md:flex-row md:space-x-4 lg:space-x-16 border-b-2 md:border-b-0'>
            <div className='rounded flex flex-col justify-center grid justify-items-center bg-gray-300 px-8 drop-shadow-xl mt-4 mb-6 pb-6 hover:bg-gray-200'>
              <p className='text-sm font-bold my-4 text-center'>Frontend Development</p>
              <div>
                <ul className='grid grid-cols-2 gap-x-4'>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>HTML</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>CSS</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>JavaScript</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>Bootstrap</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>Tailwind</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>Figma</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>React</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded flex flex-col justify-center grid justify-items-center bg-gray-300 px-8 drop-shadow-xl mt-4 mb-6 pb-6 hover:bg-gray-200'>
              <p className='text-sm font-bold my-4 text-center'>Backend Development</p>
              <div>
                <ul className='grid grid-cols-2 gap-x-4'>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>Java</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>MySQL</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>PHP</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>Laravel</p>
                  </li>
                  <li className='w-full flex flex-row text-sm my-2 space-x-2 justify-left'>
                    <BsPatchCheckFill className='mt-1'/>
                    <p>Git/Github</p>
                  </li>
                </ul>
              </div>
            </div>    
        </div>
        <a href="#about">
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

export default Experience