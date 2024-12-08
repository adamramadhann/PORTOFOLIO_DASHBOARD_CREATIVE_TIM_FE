import React from 'react'

const CardHomeScreen = ({icon, judul, subtitle, information, bgColor}) => {
  return (
        <div className='w-[350px] h-[140px] bg-white shadow-[0_0_5px_rgba(0,0,0,0.2)] mt-10 relative ' >
            <div className={`w-[90px] h-[90px] text-3xl text-white rounded-sm flex items-center justify-center absolute left-7 -top-6`} style={{ backgroundColor: bgColor, color : "" }} >
                {icon}
            </div>
            <div className=' absolute text-gray-400 gap-2 right-3 flex justify-end items-end top-3 flex-col' >
                <h1 className='text-xs' >{judul}</h1>
                <p className='text-gray-500 font-light text-[22px]' >{subtitle}</p>
            </div>
            <button className='absolute bottom-2  text-gray-400 left-5' >{information}</button>
        </div>
  )
}

export default CardHomeScreen