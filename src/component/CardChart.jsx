import React from 'react'
import { cardGrafikPenjualan } from '../data/dataDami'


const CardChart = () => {

  return (
    <div className=' flex items-center  justify-between gap-5 ' >
        {
          cardGrafikPenjualan.map((val, index) => (
            <div className={`w-[480px] text-gray-500 cursor-pointer mb-20 h-[200px] px-3 relative rounded-md bg-white shadow-[0_0_5px_rgba(0,0,0,0.2)] `} >
                <div className='relative flex flex-col items-center '>
                  <img src={val.img} className={`w-[95%] z-50 h-[160px] rounded-md mx-auto transform -mt-10 transition-transform duration-500 `} alt="" />
                </div>
                <h1 className='text-xl mb-1 mt-3  ' >Rounded Line Chart</h1>
                <p className='text-xs text-gray-400' >Line Chart</p>
          </div>
          ))
        }
    </div>
  )
}

export default CardChart