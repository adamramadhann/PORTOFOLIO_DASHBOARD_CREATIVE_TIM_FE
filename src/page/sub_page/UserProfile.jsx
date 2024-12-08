import React from 'react'
import { FaUser } from 'react-icons/fa'

const UserProfile = () => {
  return (
    <div className='w-full mt-24 flex gap-10' >
        <div className=' w-[65%] px-5 h-[550px] relative shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-white ' >
            <div className='flex items-end -mt-6 gap-5' >
                <div className='h-[78px] w-[78px] bg-red-400 rounded-md  flex items-center justify-center text-white' ><FaUser size={25} /></div>
                <span className='flex items-center gap-3 text-gray-500' >
                    <h1 className='text-lg ' >Edit Profile</h1>
                    <p className='text-sm text-gray-400' >- Complete your profile</p>
                </span>
            </div>
            <div className='mt-10' >
                  <form>
                      <div className='flex items-center w-full gap-6 ' >
                          <label htmlFor="">
                              <input type="text" placeholder='Company ( disable )' disabled className='border-b-2 py-1 pb-1 w-[450px]' />
                          </label>
                          <label className='relative block w-[500px] ' >
                              <input type="text" className=' peer outline-none border-b-2 hover:border-b  w-full py-1 px-2 text-gray-400 focus:text-gray-500 transition-all duration-200 placeholder-transparent' />
                              <span className=' bg-white  absolute left-0 my-1 w-full text-start  transition duration-200 input-text text-gray-400' >Username</span>
                              <span className='h-[2px] w-0 left-1/2 absolute bottom-0 bg-violet-500 peer-focus:left-0 peer-focus:w-full transition-all duration-300  ' ></span>
                          </label>
                          <label className='relative block w-[500px] ' >
                              <input type="text" className=' peer outline-none border-b-2 w-full py-1 px-2 text-gray-400 focus:text-gray-500  transition-all duration-200 placeholder-transparent' />
                              <span className=' bg-white  absolute left-0 my-1 w-full text-start  transition duration-200 input-text text-gray-400' >Email address</span>
                              <span className='h-[2px] w-0 left-1/2 absolute bottom-0 bg-violet-500 peer-focus:left-0 peer-focus:w-full transition-all duration-300  ' ></span>
                          </label>
                      </div>
                  </form>
            </div>
            <div className="flex mt-10 w-full">
              <form className="flex gap-5 w-full">
                {/* First Name */}
                <label className="relative flex-1 block w-[500px]">
                  <input
                    type="text"
                    className="peer outline-none border-b-2 w-full py-1 px-2 text-gray-400 focus:text-gray-500 focus:ring-0 transition-all duration-200 placeholder-transparent"
                    placeholder="First Name"
                  />
                  <span className="bg-white absolute left-0 my-1 w-full text-start transition duration-200 input-text-name text-gray-400 ">
                    First Name
                  </span>
                  <span className="h-[2px] w-0 left-1/2 absolute bottom-0 bg-violet-700 peer-focus:left-0 peer-focus:w-full transition-all duration-300"></span>
                </label>
                {/* Last Name */}
                <label className="relative flex-1 block w-[500px]">
                  <input
                    type="text"
                    className="peer outline-none border-b-2 w-full py-1 px-2 text-gray-400 focus:text-gray-500 focus:ring-0 transition-all duration-200 placeholder-transparent"
                    placeholder="Last Name"
                  />
                  <span className="bg-white absolute left-0 my-1 w-full text-start transition duration-200 input-text-name text-gray-400">
                    Last Name
                  </span>
                  <span className="h-[2px] w-0 left-1/2 absolute bottom-0 bg-violet-700 peer-focus:left-0 peer-focus:w-full transition-all duration-300"></span>
                </label>
              </form>
            </div>
            <div className='flex  mt-10 w-full' >
              <form className='flex gap-5 w-full' >
                <label className='relative flex-1 block w-[500px] ' >
                    <input type="text" className='peer outline-none border-b-2 w-full py-1 px-2 text-gray-400 focus:text-gray-500 transition-all duration-200 placeholder-transparent' />
                    <span className='bg-white  absolute left-0 my-1 w-full text-start  transition duration-200 input-text-bio text-gray-400 ' >City</span>
                    <span className='w-0 h-[2px] bg-violet-700 absolute left-1/2  peer-focus:w-full peer-focus:left-0 transition-all duration-300 bottom-0' ></span>
                  </label>
                  <label className='relative flex-1 block w-[500px] ' >
                    <input type="text" className=' peer outline-none border-b-2 w-full py-1 px-2 text-gray-400 focus:text-gray-500 transition-all duration-200 placeholder-transparent' />
                    <span className='bg-white  absolute left-1  my-1 w-full text-start  transition duration-200 input-text-bio text-gray-400' >Country</span>
                    <span className='w-0 h-[2px] bg-violet-700 absolute left-1/2  peer-focus:w-full peer-focus:left-0 transition-all duration-300 bottom-0' ></span>
                  </label>
                  <label className='relative flex-1 block w-[500px] ' >
                    <input type="text" className=' peer outline-none border-b-2 w-full py-1 px-2 text-gray-400 focus:text-gray-500 transition-all duration-200 placeholder-transparent' />
                    <span className='bg-white  absolute left-1 my-1 w-full text-start  transition duration-200 input-text-bio text-gray-400' >Postal Code</span>
                    <span className='h-[2px] w-0 left-1/2 absolute bottom-0 bg-violet-500 peer-focus:left-0 peer-focus:w-full transition-all duration-300  ' ></span>
                  </label>
              </form>
            </div>  
            <form className='mt-10' >
                <h1 className='text-gray-400 text-lg mb-7' >About Me</h1>
                <label className='relative flex-1 block w-full ' >
                    <textarea type="text" className=' peer outline-none border-b-2 w-full h-[100px] py-1 px-2 text-gray-400 focus:text-gray-500 transition-all duration-200 placeholder-transparent' />
                    <span className='bg-white absolute left-2 my-1 w-full text-start  transition duration-200 input-text text-gray-400' >Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</span>
                    <span className='w-0 h-[2px] bg-violet-700 absolute left-1/2  peer-focus:w-full peer-focus:left-0 transition-all duration-300 bottom-0' ></span>
                </label>
            </form>
            <button className='px-10 py-3 bg-red-500 text-white flex absolute bottom-3 rounded-sm right-5' >UPDATE PROFILE</button>
        </div>
        <div className='flex-1 h-[370px] mb-[210px] shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md relative w-full flex flex-col items-center  bg-white ' >
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className=' w-32 h-32 shadow-[0_5px_35px_rgba(0,0,0,0.4)] object-cover absolute -top-16 rounded-full' />
          <div className='w-full text-gray-400 gap-3 px-8 mt-28  flex flex-col items-center' >
              <p className='text-xs' >Web Developer</p>
              <h1 className='text-xl text-gray-500' >Adam Ramadhan</h1>
              <p className='text-center' >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
          </div>
          <button className='px-10 py-3 bg-red-400 rounded-full mt-10 text-white' >FOLLOW</button>
        </div>  
    </div>  
  )
}

export default UserProfile