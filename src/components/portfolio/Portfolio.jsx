import React from 'react'

const Portfolio = () => {
  return (
    <div id='about' className='flex flex-col rounded shadow-xl justify-center bg-slate-50 p-8 space-y-4 mt-16 mx-8'>
      <h2 className='text-base text-center font-medium text-slate-500'>My Recent Work</h2>
      <h1 className='text-2xl text-center font-bold'>Portfolio</h1>
      <div className='flex flex-col space-y-4 md:flex md:flex-row md:divide-x-2 justify-center'>
        <div className='rounded flex flex-col items-center px-8 bg-gray-300 mx-2'>
          <img src="" alt="" />
          <h3>Esoma KE Rebuild</h3>
          <p></p>
          <div>
            Github
          </div>
          <div>
            Live Demo
          </div>
        </div>
        <div className='rounded flex flex-col items-center px-8 bg-gray-300 mx-2'>
          <img src="" alt="" />
          <h3>Strathmore School Web Disciplinary System</h3>
          <div>
            Github
          </div>
          <div>
            Live Demo
          </div>
        </div>
      </div>
        
        <a href="#services">
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

export default Portfolio