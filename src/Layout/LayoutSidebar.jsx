    import React, { useState } from 'react';
    import { FaChevronDown, FaChevronUp, FaReact } from 'react-icons/fa';
    import { NavLink, Outlet } from 'react-router-dom';
    import { dataSideBar } from '../data/dataDami';
    import MenuTop from '../component/MenuTop';

    const LayoutSidebar = () => {
      const [side, setSide] = useState(false)
      const [isActive, setsIsActive] = useState(true)
      const [accordion, setAccordions] = useState({
        profile: false,
        pages: false,
        component: false,
        tabels: false,
        maps: false
      });

      const toggleAccordions = (judul) => {
        setAccordions((value) => ({
          ...value,
          [judul]: !value[judul]
        }));
      };
      const handleSide = () => {
        setSide((prev) => !prev)
        setsIsActive((prev) => !prev)
      }   


      return (
        <div className="flex w-screen  h-[100dvh] text-sm bg-slate-100 overflow-y-hidden" >
          <div className={`flex flex-col flex-1 gap-5 text-white items-center h-full  w-full bg-black/80 px-2 ${side ? "max-w-[100px] transform duration-300 " : "max-w-[270px]  transform duration-300"}`} onMouseEnter={() => isActive && setSide(false)}  onMouseLeave={() => isActive && setSide(true)} >
            <div className="flex gap-3 items-center border-b w-full py-5">
              <FaReact size={25} className={`${side ? 'flex items-center justify-center w-full' : null}`} />
              <h1 className={`${side ? "hidden" : "block "} text-base `}>CREATIVE TIM</h1>
            </div>
            <div className="flex flex-col gap-3 items-center border-b w-full justify-between">
              <button onClick={() => toggleAccordions("profile")} className={`w-full flex  items-center ${side ? "justify-center" : 'justify-between'}`}>
                <span className="flex items-center gap-3">
                  <img src="https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="rounded-full w-7 h-7" />
                  <h1 className={`${side ? "hidden" : "block "}`}  >Adam Ramadhan</h1>
                </span>
                <span className={`${side ? "hidden" : "block "}`} >{accordion.profile ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>
              <div className={`flex flex-col w-full gap-3 items-center ${accordion.profile ? "accordion-open" : "accordion-closed"} pb-3 accordion-content`}>
                <button className="hover:bg-gray-500/30 py-3 w-full transform duration-500">My Profile</button>
                <button className="hover:bg-gray-500/30 py-3 w-full transform duration-500">Edit Profile</button>
                <button className="hover:bg-gray-500/30 py-3 w-full transform duration-500">Profile</button>
              </div>
            </div>
            {
              dataSideBar.map((item, index) => (
                <div className="w-full" key={index}>
                  {item.subJudul && item.subJudul.length > 0 ? (
                    <button className={`w-full py-3 px-2 hover:bg-gray-500/30 transform duration-500 flex items-center   ${side ? "justify-center " : 'justify-between'} `}
                      onClick={() => item.subJudul && toggleAccordions(item.judul)}>
                      <div className={`flex text-[20px] gap-2 items-center`}>
                        {item.icon && React.createElement(item.icon)}<span className={`${side ? "hidden" : "block "} text-base `}  >{item.judul}</span>
                      </div>
                      <span className={`${side ? "hidden" : "block "} text-base `}>{accordion[item.judul] ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </button>
                  ) : (
                    <NavLink  
                      to={item.judul.toLowerCase() === 'dashboard' ? "/" : `/${item.judul.toLowerCase()}`}
                      className={({ isActive }) => `flex w-full py-3 gap-2 px-2 text-[20px]   transform duration-500 items-center ${side ? "justify-center flex" :  null} ${isActive ? "bg-blue-500  " : "hover:bg-gray-500/30"}`}
                    >
                      {item.icon && React.createElement(item.icon)}<span  className={`${side ? "hidden" : "block  "} text-base `} >{item.judul}</span>
                    </NavLink>
                  )}

                  {item.subJudul && (
                    <div className={`accordion-content ${accordion[item.judul] ? "accordion-open" : "accordion-closed"} flex flex-col justify-start gap-4 mt-2 items-center w-full`}>
                      {item.subJudul.map((value, index) => (
                        <NavLink
                          to={value.path_route}
                          key={index}
                          className={({ isActive }) => `w-full text-start text-[13px] h-12 py-3 px-2 ${side ? "hidden" : "block "}  ${isActive ? "bg-blue-500" : "hover:bg-gray-500/30"}`}
                        >
                          {value.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))
            }
          </div>
          <div className="flex-1 h-full px-3 ">
            <MenuTop clickSide={handleSide} />
            <Outlet />
          </div>
        </div>
      );
    };

    export default LayoutSidebar;
