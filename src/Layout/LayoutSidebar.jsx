import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaReact } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { dataSideBar } from '../data/dataDami';
import MenuTop from '../component/MenuTop';
import Footer from '../component/Footer';
import ImageCopy28 from '/image copy 28.png'
import ImageCopy32 from '/image copy 32.png'
import ImageCopy33 from '/image copy 33.png'

const LayoutSidebar = () => {
   // State untuk mengontrol sidebar, warna, dan accordion
   const [side, setSide] = useState(false);
   const [accor, setAccor] = useState(false);
   const [notif, setNotif] = useState(false);
   const [sideBgColor, setSideBgColor] = useState(false);
   const [effectButtons, setEffectButtons] = useState(false);
   const [activeColor, setActiveColor] = useState('');
   const [activeColorBg, setActiveColorBg] = useState('');
   const [isActive, setIsActive] = useState(false);
   const [sideColor, setSideColor] = useState('blue');
   const [imageBg, setImageBg] = useState("/image copy 28.png");
   const [sideColorBg, setSideColorBg] = useState('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))');
   const [accordion, setAccordion] = useState({
      profile: false,
      pages: false,
      component: false,
      tables: false,
      maps: false,
   });

   const location = useLocation();

   // Menentukan halaman atau sub-halaman yang aktif
   const curentPage = dataSideBar.find((item) => {
      const routePath = item.judul.toLowerCase() === 'dashboard' ? '/' : `/${item.judul.toLowerCase()}`;
      if (location.pathname === routePath) return true;

      if (item.subJudul) {
         return item.subJudul.some((val) => val.path_route === location.pathname);
      }

      return false;
   });
   const curentSubJudul = curentPage?.subJudul?.find((val) => val.path_route === location.pathname);
   const topCurrentPage = curentSubJudul ? curentSubJudul.label : curentPage?.judul;

   // Fungsi untuk mengontrol accordion
   const toggleAccordions = (judul) => {
      setAccordion((prev) => ({
         ...prev,
         [judul]: !prev[judul],
      }));
   };
   // Fungsi untuk menampilkan/menghilangkan sidebar
   const handleSide = () => {
      setSide((prev) => !prev);
      setIsActive((prev) => !prev);
   };
   // Data untuk tombol warna
   const btnColor = [
      { color: 'violet' },
      { color: 'green' },
      { color: 'red' },
      { color: 'orange' },
      { color: 'blue' },
   ];
   // Data untuk tombol warna background sidebar
   const btnColorBg = [
      { 
         color: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))', 
         btnColor: 'black' 
      },
      { 
         color: 'linear-gradient( rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.9))', 
         btnColor: 'white' 
      },
      { 
         color: 'linear-gradient( rgba(0, 0, 128, 0.6), rgba(0, 0, 0, 0.9))', 
         btnColor: 'blue' 
      },
   ];
   // data untuk backgriund image
   const imageBackground = [
      {img : ImageCopy28},
      {img : ImageCopy32},
      {img : ImageCopy33},
   ]

   // notification 
   const handleNotification = () => {
      setNotif((prev) => {
         if(!prev) setAccor(false)
         return !prev
      })
   }
   // notification 
   const handleAccorSetting = () => {
      setAccor((prev) => {
         if(!prev) setNotif(false)
            return !prev
      })
   }
  
  

  return (
    <div className="flex w-screen h-screen text-sm select-none bg-[#eeee]">
      {/* Sidebar */}
      <div
        style={{
          backgroundImage: `${sideColorBg}, url("${imageBg}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className={`flex flex-col bg-black/85 z-50 relative flex-1 gap-5 overflow-y-auto text-white items-center h-screen w-full px-2 ${side ? 'max-w-[100px] duration-300' : 'max-w-[250px] duration-300'}`}
        onMouseEnter={() => isActive && setSide(false)}
        onMouseLeave={() => isActive && setSide(true)}
      >

        {/* Header Sidebar */}
        <div className="flex gap-3 items-center border-b w-full py-5">
          <FaReact size={35} className={`${side ? 'flex justify-center w-full' : ''}`} />
          <h1 className={`${side ? 'hidden' : 'block'} text-lg`}>CREATIVE TIM</h1>
        </div>

        {/* Profil dan Accordion */}
        <div className="flex flex-col gap-3 items-center border-b w-full justify-between">
          <div
            className={`w-full flex items-center gap-3`}
          >
              <img
                src="https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Profile"
                className="rounded-full w-7 h-7"
              />
              <h1 className={`${side ? 'hidden' : 'block'}`}>Adam Ramadhan</h1>
          </div>
          <div
            className={`flex flex-col w-full gap-3 items-center ${accordion.profile ? 'accordion-open' : 'accordion-closed'} pb-3`}
          >
            <button className="hover:bg-gray-500/30 py-3 w-full duration-500">My Profile</button>
            <button className="hover:bg-gray-500/30 py-3 w-full duration-500">Edit Profile</button>
            <button className="hover:bg-gray-500/30 py-3 w-full duration-500">Logout</button>
          </div>
        </div>

        {/* Menu Sidebar */}
        {dataSideBar.map((item, index) => (
          <div className="w-full" key={index}>
            {item.subJudul ? (
              <button
                onClick={() => toggleAccordions(item.judul)}
                className={`w-full py-3 px-2 hover:bg-gray-500/30 duration-500 flex items-center ${side ? 'justify-center' : 'justify-between'}`}
              >
                <div className="flex text-[20px] gap-2 items-center">
                  {item.icon && React.createElement(item.icon)}
                  <span className={`${side ? 'hidden' : 'block'} text-sm`}>{item.judul}</span>
                </div>
                <span className={`${side ? 'hidden' : 'block'} text-sm`}>
                  {accordion[item.judul] ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
            ) : (
              <NavLink
                to={item.judul.toLowerCase() === 'dashboard' ? '/' : `/${item.judul.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex w-full py-3 gap-2 px-2 text-[20px] items-center ${side ? 'justify-center' : ''} ${isActive ? `bg-${sideColor}-500` : 'hover:bg-gray-500/30'}`
                }
              >
                {item.icon && React.createElement(item.icon)}
                <span className={`${side ? 'hidden' : 'block'} text-sm`}>{item.judul}</span>
              </NavLink>
            )}

            {item.subJudul && (
              <div
                className={`accordion-content ${accordion[item.judul] ? 'accordion-open' : 'accordion-closed'} flex flex-col gap-4 mt-2`}
              >
                {item.subJudul.map((value, idx) => (
                  <NavLink
                    key={idx}
                    to={value.path_route}
                    className={({ isActive }) =>
                      `w-full text-start text-xs py-3 px-2 ${side ? 'hidden' : 'block'} ${isActive ? `bg-${sideColor}-500` : 'hover:bg-gray-500/30'}`
                    }
                  >
                    {value.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Konten Utama */}
      <div className="flex-1 relative h-screen bg-[#eeee] overflow-y-auto px-5">
         {
            curentPage && 
               <MenuTop 
                  accor={handleAccorSetting} 
                  notif={handleNotification} 
                  clickSide={handleSide} 
                  halaman={topCurrentPage}
               />
         }
         <div  className="flex-grow py-10">
          <Outlet />
         </div>
         <Footer />
         {/* Sidebar menu */}
         <div className="fixed right-0 top-[200px] z-50 flex items-center">
            <div onClick={() => setSideBgColor((val) => !val)} className="w-[80px] cursor-pointer bg-gray-500/40 pl-4 py-2 rounded-l-lg">
               <IoMdSettings size={35} />
            </div>
            <div className={`w-[250px] h-auto flex flex-col items-center justify-center fixed ${sideBgColor ? '-translate-x-10 duration-300 opacity-100 pointer-events-auto ' : ' -translate-x-0 duration-300 opacity-0 pointer-events-none '}  transition-all right-20 top-[170px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md p-5`} >
               <h1 className=" pb-3">SIDEBAR FILTERS</h1>
               {/* bg navlink / button  */}
               <div className={`flex gap-3 mt-3`}>
               {btnColor.map((btn, idx) => (
                  <button
                     key={idx}
                     onClick={() => {
                     setSideColor(btn.color);
                     setActiveColor(btn.color);
                     }}
                     style={{ backgroundColor: btn.color }}
                     className={`w-6 h-6 rounded-full ${activeColor === btn.color ? 'ring-2 ring-black' : ''}`}
                  />
               ))}
               </div>
               {/*  bg sidebar */}
               <div  className={`flex mt-5 z-50 gap-3 border-t w-full pt-3 items-center justify-center flex-col`}>
               <h1 className="py-2">SIDEBAR  BACKGROUND</h1>
               <div className='flex gap-5' >
               {btnColorBg.map((btn, idx) => (
                  <button
                     key={idx}
                     onClick={() => {
                     setSideColorBg(btn.color);
                     setActiveColorBg(btn.color);
                     }}
                     style={{ backgroundColor: btn.btnColor }}
                     className={`w-6 h-6 shadow-[0_0_5px_rgba(0,0,0,0.5)] rounded-full ${activeColorBg === btn.color ? 'ring-2 ring-black' : ''}`}
                  />
               ))}
               </div>
               </div>
               <div className='mt-5 border-t pt-3 w-full flex items-center justify-center flex-col gap-5 ' >
               <h1 className='p-2' >SIDEBAR SMALL</h1>
                  <div className={`w-[60px] relative h-[20px] rounded-full shadow-[0_0_15px_rgba(0,0,0,0.4)]`} >
                     <button 
                     onClick={() => {
                        setEffectButtons((val) => !val);
                        handleSide()
                     }}
                     style={{
                           left: effectButtons  ? 'calc(100% - 20px)' : '3px', // Gerakkan ke kanan
                        }} 
                        className={`w-7 absolute top-[50%] translate-y-[-50%] left-3 rounded-full h-7 transition-all bg-blue-700 ${effectButtons ? 'duration-300' : 'duration-300'}`} ></button>
                  </div>
               </div>
               <div className='border-t gap-3 mt-5 w-full flex flex-col items-center justify-center pt-3' >
               <h1>IMAGES</h1>
               <div className='flex items-center gap-3 ' >
                  {
                     imageBackground.map((val) => (
                     <button onClick={() => setImageBg(val.img)} className={`w-14 object-cover h-[150px] border rounded-full ${imageBg === val?.img ? 'shadow-[0_0_15px_rgba(0,0,0,0.2)] scale-95' : 'border'}`} >
                        <img src={val.img} alt="" className='w-14 object-cover h-[150px] rounded-full' />
                     </button>
                     ))
                  }
               </div>
               </div>
               <NavLink to={'/'} className={`w-full py-2 text-base bg-orange-500 text-white rounded-sm text-center mt-5`} >Home</NavLink>
               <h1 className='text-base mt-5 text-gray-500' >Thanks Join To My Web Site</h1>
            </div>
         </div>
         {/* notification */}
         <div className={`${notif ? 'opacity-100 ease-in-out duration-500' : 'opacity-0 duration-500 ease-in-out'} transform px-1 w-[250px] z-40 text-start rounded-md top-16 right-14 shadow-lg absolute bg-white h-auto py-3 `} >
               <h1 onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Adam Ramadhan</h1>
               <h1 onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Dyaz xanders</h1>
               <h1 onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Another One</h1>
               <h1 onClick={() => setAccor(false)} className='hover:bg-violet-500 transform text-start px-3 hover:duration-300 w-full py-2 mb-5  hover:text-white' >You'r now friend with Andrew</h1>
               <h1 onClick={() => setAccor(false)} className='hover:bg-violet-500 text-start px-3 w-full py-2 transform hover:duration-300 hover:text-white' >Your Have 5 teks New</h1>
         </div>
         {/* accordions setting user icon */}
         <div className={`${accor ? 'opacity-100 ease-in-out duration-500' : 'opacity-0 duration-500 ease-in-out'} w-[150px] z-40 text-start rounded-md top-16 right-3 shadow-lg absolute bg-white h-auto py-1 px-2 `} >
               <button onClick={() => setAccor(false)} className='hover:bg-violet-500 rounded-sm transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Profile</button>
               <button onClick={() => setAccor(false)} className='hover:bg-violet-500 rounded-sm transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Setting</button>
               <button onClick={() => setAccor(false)} className='hover:bg-violet-500 rounded-sm transform text-start px-3 hover:duration-300 w-full py-2  hover:text-white' >Log Out</button>
         </div>
      </div>
    </div>
  );
};

export default LayoutSidebar;
