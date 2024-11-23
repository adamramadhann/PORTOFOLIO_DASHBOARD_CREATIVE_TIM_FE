import { icon } from 'leaflet'
import React, { useState } from 'react'
import { FaCloud, FaCode } from 'react-icons/fa'
import { IoBugSharp } from 'react-icons/io5'
import { dataWedgetCheck, dataWedgetTable } from '../../data/dataDami'
import { IoMdHome } from 'react-icons/io'
import { RiSofaFill } from 'react-icons/ri'
import { PiSuitcaseSimpleBold } from 'react-icons/pi'

const Widgets = () => {
  const [tab, setTab] = useState("BUGS")

  const buttonTab = [
    { icon :<IoBugSharp size={20} />, title : "BUGS"},
    { icon :<FaCode size={20} />, title : "WEBSITE"},
    { icon :<FaCloud size={20} />, title : "SERVER"},
  ]
  return (
    <div className='w-full h-[90%]  mt-14 '>
        <div className='flex gap-14' >
          <div className='flex-1 w-full h-[330px] pb-2 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] px-5 ' >
              <div className='w-[350px]  flex flex-col -mt-5 rounded-md justify-center h-[60px] px-3 text-white bg-orange-400 ' >
                  <h1 className='text-[18px]' >Employees Stats</h1>  
                  <p>New employees on 15th September, 2016</p>
              </div>
              <table className='w-full mt-3 text-sm text-gray-500 '>
                  <thead className='pb-3' >
                      <tr className='border-b pb-3 ' >
                          <th className=' py-6 text-left ' >ID</th>
                          <th className=' py-6 text-left ' >Name</th>
                          <th className=' py-6 text-left ' >Salary</th>
                          <th className=' py-6 text-left ' >Country</th>
                      </tr>
                  </thead>
                  {
                    dataWedgetTable.map((val, index) => (
                      <tbody>
                        <tr className='' > 
                          <td className='py-3' >{val.id}</td>
                          <td className='py-3' >{val.name}</td>
                          <td className='py-3' >{val.salary}</td>
                          <td className='py-3' >{val.country}</td>
                        </tr>
                    </tbody>
                    ))
                  }
              </table>
          </div>
          <div className='flex-1 w-full h-[360px] pb-2 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] px-5 '>
              <div className='flex -mt-7  items-center gap-5 text-gray-300 w-full bg-pink-500 py-3 rounded-md px-3  ' >
                  <h1>Tasks</h1>
                <div className='flex gap-5' >
                    { 
                      buttonTab.map((val) => (
                        <button onClick={() => setTab(val.title)} className={`flex gap-2  items-center rounded-md ${tab === val.title ? "text-white  active:duration-500 transform bg-black/20 p-2" : null}`} >{val.icon}{val.title}</button>
                      ))
                    }
                </div>
              </div>
              <div className=' flex flex-col gap-5  text-base overflow-y-auto mt-8 text-gray-500' >
                  {
                    dataWedgetCheck.map((val, index) => {
                      {
                        if (tab === val.name) {
                          return val.teks.map((item, index) => (
                            <label htmlFor="blcok" className=' border-b pb-5 flex  gap-5' >
                                <input type="checkbox" />
                                {item.SibTeks}
                            </label>
                          ))
                        }
                      }
                    })
                  }
              </div>
          </div>
        </div>
          <div className='flex mt-20 text-gray-600' >
            <div className='flex  flex-col w-[50%]' >
            <div className='flex-1 gap-2 flex' >
                <div className='flex-1 flex  flex-col w-[80px]  px-3 py-5  text-sm bg-white shadow-[0_0_5px_rgba(0,0,0,0.2)] items-center ' >
                    <h6 >SMALL COMPANY</h6>
                    <span className='p-8 rounded-full text-black my-3 bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                        <IoMdHome size={50} />
                    </span>
                    <h1 className='text-3xl mt-2 ' >$29</h1>
                    <p className='text-center py-3' >This is good if your company size is between 2 and 10 Persons.</p>
                    <button className='bg-pink-500 active:shadow-[0_5px_35px_rgba(236,72,153,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] py-2 px-10 text-white rounded-full ' >CHOSOE PLAN </button>
                </div>
                <div className='flex-1 flex  flex-col  px-12 py-5  text-sm bg-white items-center ' >
                    <h6 >Freelancer</h6>
                    <span className='p-8 rounded-full text-black my-3 bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
                        <RiSofaFill size={50} />
                    </span>
                    <h1 className='text-3xl mt-2 ' >FREE</h1>
                    <p className='text-center py-3' >This is good if your company size is between 2 and 10 Persons.</p>
                    <button className='bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(0,0,0,0.3)] active:shadow-[0_5px_35px_rgba(0,0,0,0.3)] text-black py-2 px-10  rounded-full ' >CHOSOE PLAN </button>
                </div>
          </div>
          <div className='w-[75%] mb-10 h-[265px] relative flex  flex-col items-center  mt-10 shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-white ' >
              <h1 className='text-5xl pt-3 mt-5 ' >"</h1>
              <p className='text-center px-10 text-gray-400' >
                Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!
              </p>
              <span className='flex items-center flex-col mt-5' >
                <h1 className='text-lg' >Alec Thompson</h1>
                <p className='text-[10px]' >@ALECTHOMPSON</p>
              </span>
              <div className='absolute -bottom-[50px] shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-full' >
                    <img src="public/image copy 7.png" alt="" className='w-24 h-24 rounded-full shadow-[o_o_15px_rgba(0,0,0,0.2)]' />
              </div>
          </div>
            </div>
            <div className='flex-1 flex ' >
              <div className='w-64 relative h-full'>
                <div className='h-full w-1 bg-gray-400  ' ></div>
              <div className='absolute flex justify-between items-center h-[580px] py flex-col h -left-7 top-0 ' >
              <span className='w-16 h-16 bg-red-400  flex items-center justify-center rounded-full' >
                  <PiSuitcaseSimpleBold className='text-white' size={30} />
                </span>
                <span className='w-16 h-16 bg-red-400  flex items-center justify-center rounded-full' >
                  <PiSuitcaseSimpleBold className='text-white' size={30} />
                </span>
                <span className='w-16 h-16 bg-red-400  flex items-center justify-center rounded-full' >
                  <PiSuitcaseSimpleBold className='text-white' size={30} />
                </span>
              </div>
              </div>
              <div className='h-full flex flex-col justify-between' >
                  <div className='w-full relative py-5 px-5 text-gray-500 rounded-md flex flex-col gap-3 h-auto shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
                      <button className='w-32 h-7 rounded-full bg-red-500 text-white' >SOME TITLE</button>
                      <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
                      <p>11 hours ago via Twitter</p>
                      <div  className=" bg-white  w-10 absolute top-3 -left-5  h-10" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}></div>
                  </div>
                  <div className='w-full relative py-5 px-5 text-gray-500 rounded-md flex flex-col gap-3 h-auto shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
                      <button className='w-32 h-7 rounded-full bg-red-500 text-white' >SOME TITLE</button>
                      <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
                      <p>11 hours ago via Twitter</p>
                      <div  className=" bg-white  w-10 absolute top-3 -left-5  h-10" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}></div>
                  </div>
                  <div className='w-full relative py-5 px-5 text-gray-500 rounded-md flex flex-col gap-3 h-auto shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
                      <button className='w-32 h-7 rounded-full bg-red-500 text-white' >SOME TITLE</button>
                      <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
                      <p>11 hours ago via Twitter</p>
                      <div  className=" bg-white  w-10 absolute top-3 -left-5  h-10" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}></div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Widgets