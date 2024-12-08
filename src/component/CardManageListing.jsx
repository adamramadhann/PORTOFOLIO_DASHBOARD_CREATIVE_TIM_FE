import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdRefresh } from 'react-icons/io'
import { MdViewList } from 'react-icons/md'
import { TfiPencil } from 'react-icons/tfi'
import { cardManage } from '../data/dataDami'

const CardManageListing = () => {
    const [mouseActive, setMouseActive] = useState({})


    const onMouse = (val) => {
        setMouseActive((item) => ({
            ...item,
            [val] : true
        }))
    }
    const ofMouse = (val) => {
        setMouseActive((item) => ({
            ...item,
            [val] : false
        }))
    }


  return (
    <div className='flex items-center justify-between gap-5 bg-slate-100 w-full h-full' >
        {
            cardManage.map((prev, index) => (
                <div className='w-[480px] shadow-[0_0_10px_rgba(0,0,0,0.2)] text-gray-500 rounded-md px-3 bg-white relative cursor-pointer  h-[420px]' onMouseEnter={() => onMouse(index)} onMouseLeave={() => ofMouse(index)}  >
                    <div className='relative  -mt-10 flex inset-x-0 justify-center ' >
                        <img src={prev.img} className={`w-full h-[280px] z-50 rounded-sm object-cover transform transition-transform duration-500  ${mouseActive[index] ? "translate-y-[-40px]" : "translate-y-0"}`} alt="" />
                        <div className='flex items-center absolute bottom-0  gap-5'>
                            <MdViewList  className={`active:shadow-[0_0_35px_10px_rgba(0,0,0,0.2)]`}  size={20} />
                            <IoMdRefresh  className={`active:shadow-[0_0_35px_10px_rgba(0,0,0,0.2)]`}  size={20}   />
                            <TfiPencil className={`active:shadow-[0_0_35px_10px_rgba(0,0,0,0.2)]`}  size={20}   />
                        </div>  
                    </div>
                    <div className='text-center mt-5 pr-3 ' >
                        <h1 className='text-lg ' >{prev.judul}</h1>
                        <p className='mb-5 text-sm text-gray-400 mt-1 ' >{prev.description}</p>
                    </div>
                    <div className='flex bottom-4 items-center mt-5 absolute w-full justify-between pr-7 ' >
                        <p className='text-lg ' >{prev.price}</p>
                        <span className='flex items-center gap-1' >
                            <FaLocationDot />
                            <p>{prev.location}</p>
                        </span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CardManageListing