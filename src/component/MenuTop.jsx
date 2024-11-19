import React, { useState } from 'react'
import {  AiOutlineBars } from 'react-icons/ai'
import { FaBell, FaSearch, FaUserAlt } from 'react-icons/fa'


const MenuTop = ({clickSide}) => {
  const [extended, setExtended] = useState(false)
  return (
    <div className='w-full flex items-center bg-slate-100 justify-between h-20 ' >
        <div className='flex gap-5 items-center' >
           <button onClick={clickSide} className={`w-10 h-10 rounded-full flex items-center justify-center  shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.2)] scale-95 transform duration-75 bg-white ${extended ? 'z-50 fixed' : ""} `}><AiOutlineBars /></button>
            <h1 className='text-lg' >Dashboard</h1>
        </div>
        <div className='flex gap-5 items-center' >
            <div className='flex items-center gap-1 pr-1 relative ' >
                <input type="search" placeholder='serch !!' className='shadow-md w-[200px] py-1 px-2 bg-white' />
                <button className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(10,10,10,0.2)] hover:shadow-[0_0_30px_2px_rgba(0,0,0,0.2)] transition duration-150 bg-white">
                  <FaSearch />
                  <span className='w-4 h-4 bg-red-500 text-white text-center text-xs rounded-full absolute top-0 -right-12 '><h6>5</h6></span>
                </button>
            </div>
            <FaBell size={25} className='cursor-pointer' />
            <FaUserAlt size={25} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default MenuTop