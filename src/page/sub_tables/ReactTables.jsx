import React, { useEffect, useState } from 'react'
import { BiSolidDetail } from 'react-icons/bi'
import { FaRegTrashAlt, FaUserEdit } from 'react-icons/fa'
import ModalEditUsertable from '../../component/ModalEditUsertable'
import ImageTable1 from '/image copy 14.png'
const ReactTables = () => { 
  const [dataJson, setDataJson] = useState([])
  const [edit, setEdit] = useState(false)
  const [SelectEdit, setSelectEdit] = useState(null)
  const [curentPage, setCurentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [colums, setColumn] = useState(7)

  const handleDataApi = async () => {
    try {
      const dataApi = await fetch('https://jsonplaceholder.typicode.com/users')

      if(!dataApi) {
        return console.info('data undifind', dataApi)
      }

      const result = await dataApi.json()

      let data = []
      while(data.length < 100) {
        const batch = result.map((val, index) => ({
          ...val,
          user_id : data.length + index + 1,
        }))
        data = [...data, ...batch]
      }

      data = data.slice(0, 100)
      console.log(data)

      setDataJson(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    const conf = window.confirm('yakin ingin hapus data ini ??')
    if(!conf) return

    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method : 'DELETE'
      })

      const dataNew = dataJson.filter((val) => val.user_id !== id)
      setDataJson(dataNew)

      setTimeout(() => {
        alert('data berhasil di hapus')
      }, 200)

      console.log(`user berhasil di hapus`);
      console.info(dataJson)

    } catch (error) {
      console.error(error)
    }
  }

  const detailUser = (id) => {
    try {
      const result = dataJson.find((val) => val.user_id === id)

      if(!result) return alert('User Undifind')

      const phone = result.phone?.split(' ')[0]

      alert(`
        Details User

        user_id : ${result.user_id}
        Name : ${result.name}
        Email : ${result.email}
        Phone  : ${phone}
      `)       
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelectEdit = (val) => {
    setSelectEdit(val)
    setEdit(true)
  }

  const totalPage = Math.ceil(dataJson.length / itemsPerPage)

  const currentData = dataJson.slice(
    (curentPage - 1) * itemsPerPage,
    curentPage * itemsPerPage
  )

  const handleDataChange = (e) => {
    setCurentPage(Number(e.target.value))
  }

  // Kolom yang akan ditampilkan
  const columnList = ['user_id', 'name', 'email', 'phone'];

  // Pilih kolom yang akan ditampilkan berdasarkan jumlah kolom yang dipilih
  const displayColumn = columnList.slice(0, colums)

  const handleProvios = () => {
    if(curentPage > 1) setCurentPage(curentPage - 1)
  }

  const handleNext = () => {
    if(curentPage < totalPage) setCurentPage(curentPage + 1)
  }

  useEffect(() => {
    handleDataApi()
  }, [])

  return (
    <div className='w-full mt-14 mb-3 justify-center'>
      <div className='w-full bg-white px-5 h-auto py-5 shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
        <div className='flex mb-5 gap-5 items-end'>
          <div className='w-20 h-20 -mt-14 ml-5 z-20 rounded-md flex items-center justify-center bg-blue-200'>
            <img src={ImageTable1} alt="" className='w-12 h-12' />
          </div>
          <h1 className='text-xl'>React Table</h1>
        </div>
        <div className='flex gap-10 items-center'>
          <button onClick={handleProvios} className={`w-[500px] bg-gray-100 text-gray-500 py-3 transition-all ${curentPage > 1 && 'duration-300 bg-gray-200'}`}>PREVIOS</button>
          <select onChange={handleDataChange} value={curentPage} className='w-[100px] outline-none bg-transparent border-b pb-2 flex-1 pl-3 flex justify-between' name="Page" id="page">
            {
              Array.from({length: totalPage}, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  page {index + 1}
                </option>
              ))
            }
          </select>
          <button onClick={handleNext} className={`w-[500px] bg-gray-200 active:shadow-[0_0_5px_rgba(0,0,0,0.4)]   text-gray-500 py-3 `}>NEXT</button>
        </div> 
        <table className='w-full mt-5'>
          <thead>
            <tr className="w-full border-b py-3 grid grid-cols-5 text-left items-center">
              {displayColumn.map((col) => (
                <th key={col}>{col.charAt(0).toUpperCase() + col.slice(1)}</th>
              ))}
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="w-full text-gray-500 mt-5 grid grid-cols-5 items-center">
                {displayColumn.map((col) => (
                  <td key={`${rowIndex}-${col}`}>{row[col] !== undefined ? row[col] : 'N/A'}</td>
                ))}
                <td className="flex items-end justify-end gap-8">
                  <button onClick={() => detailUser(row.user_id)}>
                    <BiSolidDetail size={18} />
                  </button>
                  <button onClick={() => handleSelectEdit(row)}>
                    <FaUserEdit size={18} />
                  </button>
                  <button onClick={() => handleDelete(row.user_id)}>
                    <FaRegTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {edit && 
        <ModalEditUsertable
          user={SelectEdit}
          onSave={(updateUser) => {
            setDataJson((val) => 
              val.map((user) => 
                user.user_id === updateUser.user_id ? updateUser : user
              )
            )
            setEdit(true)
          }}
          onClose={() => setEdit(false)}
        />
      }
    </div>
  )
}

export default ReactTables
