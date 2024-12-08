import React, { useState } from 'react'
import {  AiOutlineBars } from 'react-icons/ai'
import { FaBell, FaSearch, FaUserAlt } from 'react-icons/fa'


const MenuTop = ({clickSide, halaman, notif, accor}) => {
  const [extended, setExtended] = useState(false)
  return (
    <div className='w-full flex items-center  justify-between h-20 ' >
        <div className='flex gap-5 items-center' >
           <button onClick={clickSide} className={`w-10 h-10 rounded-full flex items-center justify-center  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.2)] scale-95 transform duration-75 bg-white ${extended ? 'z-50 fixed' : ""} `}><AiOutlineBars /></button>
            <h1 className='text-lg' >{halaman}</h1>
        </div>
        <div className='flex gap-5 items-center ' >
            <div className='flex items-center gap-1 pr-1 relative ' >
                <div className='relative w-[200px] border-b border-gray-300' >
                    <input type="search" placeholder='serch !!' className='peer w-full outline-none focus:ring-0 py-1 px-2 bg-transparent' />
                    <span className='absolute bottom-0 left-1/2 w-0 h-[2px] bg-violet-700 transition-all duration-300 ease-in-out peer-focus:w-full peer-focus:left-0' ></span>
                </div>
                <button className="w-10 mr-2 h-10 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(10,10,10,0.2)] hover:shadow-[0_0_30px_2px_rgba(0,0,0,0.2)] transition duration-150 bg-white">
                  <FaSearch />
                </button>
            </div>
            <div onClick={notif} className='relative cursor-pointer' >
               <FaBell  size={25} className=' mr-2   ' />
               <span className='w-4 h-4 bg-red-500 text-white text-center text-xs rounded-full absolute -top-1   right-1 '><h6>5</h6></span>
            </div>
            <FaUserAlt onClick={accor} size={25} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default MenuTop