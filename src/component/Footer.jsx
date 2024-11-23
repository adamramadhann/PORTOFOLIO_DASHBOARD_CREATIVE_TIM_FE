import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-gray-500 flex items-center justify-between h-20 border-t mt-10 ' >
        <div className='flex items-center gap-5' >
            <a className='hover:text-blue-500' href="#ds">Home</a>
            <a className='hover:text-blue-500' href="#ds">Company</a>
            <a className='hover:text-blue-500' href="#ds">Portfolio</a>
            <a className='hover:text-blue-500' href="#ds">Blog</a>
        </div>
        <p className='text-gray-400' >
            © 2024 <a href="#" className='text-blue-500' >Creative Tim</a>, made with love for a better we
        </p>
    </div>
  )
}

export default Footer