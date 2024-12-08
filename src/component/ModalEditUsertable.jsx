      import React, { useState } from 'react'
      
      const ModalEditUsertable = ({user, onSave, onClose}) => {
         const [formData, setFormData] = useState(user || { name: '', email: '', phone: '' });

         const handleChange = (e) => {
            const { name, value } = e.target
            setFormData((prev) => ({
               ...prev,
               [name] : value
            }))
         }
         
         const HanldeSave = () => {
            onSave(formData)
            onClose()
         }
         
         return (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50">
            <form onSubmit={(e) => e.preventDefault()}className='w-[400px] text-base text-gray-500 px-5 flex rounded-md flex-col gap-5 h-auto py-10 bg-white' >
               <h1 className='text-center' >Form Edit User</h1>
                  <label className='' >
                     Name :
                     <input
                        value={formData.name} 
                        name='name'
                        type="text" 
                        onChange={handleChange}
                        placeholder='Edit Name...'
                        className='w-full mt-2 border py-1 px-2 rounded-sm' 
                     />
                  </label>
                  <label htmlFor="">
                     Email
                     <input
                        value={formData.email} 
                        name='email'
                        type="text" 
                        onChange={handleChange}
                        placeholder='Edit Email...'
                        className='w-full mt-2 border py-1 px-2 rounded-sm' 
                     />
                  </label>
                  <label htmlFor="">
                     Phone
                     <input
                        value={formData.phone} 
                        name='phone'
                        type="text" 
                        onChange={handleChange}
                        placeholder='Edit phone...'
                        className='w-full mt-2 border py-1 px-2 rounded-sm' 
                     />
                  </label>
                  <span className='flex items-center justify-end mt-5 gap-3' >
                     <button className='w-[100px] py-1 rounded-sm bg-red-500 text-white' onClick={onClose} >
                        Censel
                     </button>
                     <button onClick={HanldeSave} className='w-[100px] py-1 rounded-sm bg-blue-500 text-white' type='submit' >
                        Submit
                     </button>
                  </span>
            </form>
         </div>
         )
      }
      
      export default ModalEditUsertable