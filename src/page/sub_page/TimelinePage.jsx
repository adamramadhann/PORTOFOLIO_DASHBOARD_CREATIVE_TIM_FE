import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaSuitcase } from 'react-icons/fa'
import { GiAirplaneArrival } from 'react-icons/gi'
import { ImWrench } from 'react-icons/im'
import { IoExtensionPuzzle, IoFingerPrint } from 'react-icons/io5'
import icon1 from '/image copy 35.png'

const TimelinePage = () => {
  const [accor, setAccor] = useState(false)

  
  return (
    <div className='w-full px-20 text-gray-400 flex flex-col items-center  ' >
        <div className='relative w-full rounded-md bg-white px-20 pt-14 shadow-lg gap-10' >
        <div className='flex absolute  left-5 -top-8 gap-3 text-end items-end  ' >
                <div className='w-20 h-20 rounded-md flex items-center justify-center  bg-cyan-500 '> 
                  <img src={icon1} alt="" className='w-12 h-12'  />
                </div>
                <h1 className='text-xl' > Time Line</h1>
            </div>
            <div className='w-1 absolute left-1/2 top-1/2 translate-y-[-50%]  h-[95%] bg-gray-500 transform -translate-x-1/2'></div>
            {/* kiri */}
            <div className='relative mt-10 flex items-start gap-7  ' > 
                <div className='w-1/2 bg-white relative shadow-[0_0_15px_rgba(0,0,0,0.2)] text-sm h-auto py-5 rounded-md -mt-3 p-5 flex-col  gap-3 flex ' >
                    <h6 className='w-24 flex items-center justify-center rounded-full text-white  h-7 bg-red-500' >Some Title</h6>
                    <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. 
                      Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... 
                      The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.
                    </p>
                    <p>11 hours ago via Twitter</p>
                    <div
                      className="bg-white w-10 absolute top-3 -right-4 h-10"
                      style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%)" }}
                    ></div>
                </div>
                <div class="p-4 bg-red-500 relative rounded-full flex items-center justify-center shadow-md">
                  <span class="text-white"><FaSuitcase size={40} /></span>
                </div>
                <div class="w-1/2  "></div>
            </div>
            {/* kanan */}
            <div className='relative  h-auto py-5 flex items-start mt-3 gap-3  ' >
            <div class="w-1/2  "></div>
            <div class=" p-4 bg-green-500  rounded-full flex items-center justify-center shadow-md">
                  <span class="text-white"><IoExtensionPuzzle size={40} /></span>
                </div>
                <div className='w-1/2 bg-white text-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]  h-auto py-5 rounded-md  p-5 flex-col  gap-3 flex ' >
                    <h6 className='w-24 flex items-center justify-center rounded-full text-white  h-7 bg-green-500' >Another One</h6>
                    <p>
                    Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....
                    </p>
                </div>            
              </div>
            {/* kiri */}
            <div className='relative flex items-start mt-3 gap-3  ' >
                <div className='w-1/2 bg-white text-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] h-auto py-5 rounded-md -mt-3 p-5 flex-col  gap-3 flex ' >
                        <h6 className='w-[130px] flex items-center justify-center rounded-full text-white  py-2 bg-cyan-500' >Another Title</h6>
                        <p>
                        Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM
                        </p>
                        <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye </p>
                        <button onClick={() => setAccor((val) => !val)} className='w-[100px] py-3 relative rounded-full flex items-center justify-center gap-3 bg-cyan-500 text-white' ><ImWrench size={20} />{accor ? <FaAngleDown size={20} /> :<FaAngleUp size={20} />}</button>
                        <div className={`${accor ? 'block' : 'hidden'} px-1 w-[150px] z-50 text-start rounded-md -bottom-[170px] shadow-lg -left-2 absolute bg-white h-auto py-3 `} >
                            <button onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Action</button>
                            <button onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Another action</button>
                            <button onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2 mb-5  hover:text-white' >Something else here</button>
                            <span className='border-t pt-5' >
                              <button onClick={() => setAccor(false)} className='hover:bg-violet-500 text-start px-3 w-full py-2 transform hover:duration-300 hover:text-white' >Separeted link</button>
                            </span>
                        </div>
                </div>
                <div class=" p-4 bg-cyan-500 rounded-full flex items-center justify-center shadow-md">
                  <span class="text-white"><IoFingerPrint size={40} /></span>
                </div>
                <div class="w-1/2  "></div>
            </div>
            {/* kanan */}
            <div className='relativ mb-10  flex items-start mt-3 gap-3  ' >
            <div class="w-1/2  "></div>
            <div class=" p-4 bg-orange-500 rounded-full z-50 flex items-center justify-center shadow-md">
                  <span class="text-white"><GiAirplaneArrival size={40} /></span>
                </div>
                <div className='w-1/2 bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] text-sm h-auto py-5 pt-6 rounded-md  p-5 flex-col  gap-5 flex ' >
                    <h6 className='w-[130px] flex items-center justify-center rounded-full text-white  py-2 bg-orange-500' >Another One</h6>
                    <p>
                    Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team
                    </p>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default TimelinePage 