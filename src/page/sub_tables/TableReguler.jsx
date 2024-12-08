import React from 'react'
import { dataTableBackground, dataTableheadBackground, dataTableheadRegular, dataTableReguler } from '../../data/dataDami'
import ImageCopy20 from '/image copy 20.png'
import ImageCopy21 from '/image copy 21.png'
import ImageCopy22 from '/image copy 22.png'

const TableReguler = () => {
  return (
    <div>
      {/* table 1 */}
      <div className='w-full bg-white h-[480px] rounded-md mt-5 p-5 shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
        <div className='flex relative items-end gap-3' >
          <div className='w-20 h-20  -mt-20 rounded-md flex flex-col items-center justify-center bg-green-300'>
            <img src={ImageCopy20} alt="" className='w-12 h-12 ' />
          </div>
          <h1 className=' text-xl text-gray-600 font-bold pb-2' >
            Simple Table
          </h1>
        </div>
          <table className='w-full mt-8 table-auto ' >
              <thead className='' >
                <tr className='text-lg' >
                  {
                    dataTableheadRegular.map((val) => (
                        <th className="pb-4  text-left text-gray-500 px-5 ">{val.judul}</th>
                      ))
                    }
                    </tr>
              </thead>
              <tbody className='text-gray-500' >
                    {
                      dataTableReguler.map((val) => (
                        <tr>
                          <td className=' px-5 border-t-2 py-4' >{val.name}</td>
                          <td className=' px-5 border-t-2 py-4' >{val.country}</td>
                          <td className=' px-5 border-t-2 py-4' >	{val.city} </td>
                          <td className=' px-5 border-t-2 py-4' >{val.solary} </td>
                      </tr>
                      ))
                    }
              </tbody>
          </table>
      </div>
      {/* table 2 */}
      <div className='mt-32' >
      <div className='flex relative items-end gap-3' >
          <div className='w-20 h-20  -mt-20 rounded-md flex flex-col items-center justify-center bg-red-300'>
            <img src={ImageCopy21} className='w-12 h-12 ' />
          </div>
          <h1 className=' text-xl text-gray-600 font-bold pb-2' >
            Simple Table
          </h1>
        </div>
        <table className="w-full mt-8 table-auto bg-[#eeee]">
          <thead>
            <tr className="text-lg">
              {dataTableheadBackground.map((val) => (
                <th className="pb-4 text-left text-5ra px-5 y-600">{val.judul}</th>
        ))}
            </tr>
          </thead>
          <tbody className='text-gray-500' >
            {dataTableBackground.map((val, index) => (
              <tr key={index} className="group">
                <td className=" bg-[#eeee] border-t-2 px-5 py-4 group-hover:bg-gray-300">{val.no}</td>
                <td className=" bg-[#eeee] border-t-2 px-5 py-4 group-hover:bg-gray-300">{val.name}</td>
                <td className=" bg-[#eeee] border-t-2 px-5 py-4 group-hover:bg-gray-300">{val.country}</td>
                <td className=" bg-[#eeee] border-t-2 px-5 py-4 group-hover:bg-gray-300">{val.city}</td>
                <td className=" bg-[#eeee] border-t-2 px-5 py-4 group-hover:bg-gray-300">{val.solary}</td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
      {/* table 3 */}
      <div className='w-full mt-28 bg-white h-[480px] rounded-md p-5 shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
        <div className='flex relative items-end gap-3' >
          <div className='w-20 h-20  -mt-20 rounded-md flex flex-col items-center justify-center bg-blue-200'>
            <img src={ImageCopy22} alt="" className='w-12 h-12 ' />
          </div>
          <h1 className=' text-xl text-gray-600 font-bold  pb-2' >
            Simple Table
          </h1>
        </div>
          <table className='w-full mt-8 table-auto ' >
              <thead className='' >
                <tr className='text-lg' >
                  {
                    dataTableheadRegular.map((val) => (
                        <th className="pb-4  text-left text-gray-500 px-5 ">{val.judul}</th>
                      ))
                    }
                    </tr>
              </thead>
              <tbody className='' >
                    {
                      dataTableReguler.map((val) => (
                        <tr className='odd:bg-blue-200 transform odd:duration-200 text-gray-500  hover:odd:bg-white even:bg-white' >
                          <td className='border-t-2 px-5 py-4' >{val.name}</td>
                          <td className='border-t-2 px-5 py-4' >{val.country}</td>
                          <td className='border-t-2 px-5 py-4' >	{val.city} </td>
                          <td className='border-t-2 px-5 py-4' >{val.solary} </td>
                      </tr>
                      ))
                    }
              </tbody>
          </table>
      </div>
      </div>
  )
}

export default TableReguler