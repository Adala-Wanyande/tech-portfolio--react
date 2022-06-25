import React from 'react'
import CV from '../../assets/CV - Adala Wanyande.pdf'

function CallToAction() {
  return (
    <div className='font-bold rounded flex text-sm justify-center content-center drop-shadow-md text-center bg-gray-800 text-white px-4 py-2 mt-8 hover:cursor-pointer hover:bg-gray-600'>
      <a href={CV} download>Download CV</a>
    </div>
  )
} 

export default CallToAction