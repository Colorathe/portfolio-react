import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg '>
      <a href="#hero" className='block text-xl md:text-2xl font-semibold '>Joaquin Vulcano</a>
      <a href="mailto:joaquinevulcano" className=' text-sm md:text-md hover:text-indigo-500 '>joaquinevulcano@gmail.com</a>
      <p className='text-sx font-regunlar mt-2 text-gray-500 '>
        © Desing by Joaquin Vulcano {new Date().getFullYear()}. All rights reserved

      </p>
    </div>
  )
}

export default Footer
