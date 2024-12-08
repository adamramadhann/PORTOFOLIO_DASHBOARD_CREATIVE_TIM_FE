import React, { useState } from 'react'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { IoMdRefresh } from 'react-icons/io'
import { MdUpdate } from 'react-icons/md'
import { TfiPencil } from 'react-icons/tfi'
import { cardGrafikPenjualan } from '../data/dataDami'
import { FaArrowUp, FaLongArrowAltUp } from 'react-icons/fa'

const CardDashboardMarketing = () => {
  const [iconActive, setIconActive] = useState({})


  const onMouseClose = (val) => {
    setIconActive((prev) => ({
      ...prev,
      [val] : false
    }))
  }
  const onMouseOpen = (val) => {
    setIconActive((prev) => ({
      ...prev,
      [val] : true
    }))
  }

  return (
    <div className=' flex items-center  justify-between gap-5 ' >
        {
          cardGrafikPenjualan.map((val, index) => (
            <div className={`w-[480px] text-gray-500 cursor-pointer mb-20 h-[250px] px-3 relative rounded-md bg-white shadow-[0_0_5px_rgba(0,0,0,0.2)] `} onMouseEnter={() => onMouseOpen(index)} onMouseLeave={() => onMouseClose(index)} >
                <div className='relative flex flex-col items-center '>
                  <img src={val.img} className={`w-[95%] z-50 h-[160px] rounded-md mx-auto transform -mt-10 transition-transform duration-500 ${iconActive[index] ? 'translate-y-[-40px]  ' : "translate-y-0 "} `} alt="" />
                  <div className='flex absolute bottom-0 gap-5 '>
                    <button className=" rounded-full flex items-center justify-center  active:shadow-[0_0_35px_15px_rgba(0,0,0,0.2)]  bg-white">
                    <IoMdRefresh  size={20} className={``}  />
                    </button>
                    <button className=" rounded-full flex items-center justify-center  active:shadow-[0_0_35px_15px_rgba(0,0,0,0.2)]  bg-white">
                        <TfiPencil size={20}   />
                    </button>   
                  </div>
                </div>
                <h1 className='text-xl mb-1 mt-3  ' >{val.judul}</h1>
                <span className='text-sm text-gray-400 flex gap-2 ' >
                <span className={`${val.judul === "Daily Sales" ? 'block text-green-500  items-center' : 'hidden'} flex items-center`}>
                  <FaArrowUp size={15} className='pr-1' />
                  55%
                </span>
                  <p>{val.description}</p>
                </span>
                <span className='absolute flex items-center gap-1 text-gray-400 text-sm bottom-3' >
                  <MdUpdate size={18} />
                  <p>{val.date}</p>
              </span>
          </div>
          ))
        }
    </div>
  )
}

export default CardDashboardMarketing