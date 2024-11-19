import React from 'react'

const TableWord = () => {
  return (
    <div className='bg-slate-200' >
        <div className='w-full h-96  mt-10 pb-10 bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
            <div className='flex gap-10 pt-5  ' >
                <div className='w-[70px] h-[70px] bg-green-500 relative -top-9 left-5 flex items-center justify-center rounded-sm ' >icon</div>
                <h1>Global Sales by Top Locations</h1>
            </div>
            <div className='flex gap-5 ' >
            <div className='flex-1' >
                <table className='w-[600px]' >
                    <tbody>
                        <ul>
                            <tr className='flex w-full gap-5 justify-between   ' >
                                <span className='flex gap-5' >
                                    <li>bendera</li>
                                    <li>bendera</li>
                                </span>
                                <span className='flex gap-5' >
                                    <li>bendera</li>
                                    <li>bendera</li>
                                </span>
                            </tr>
                        </ul>
                    </tbody>
                </table>
            </div>
            <div className='flex-1' >
                map
            </div>
            </div>
        </div>
    </div>
  )
}

export default TableWord