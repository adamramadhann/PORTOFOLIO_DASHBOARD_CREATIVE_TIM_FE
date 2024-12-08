import React, { useState } from 'react'
import { AiOutlineExclamationCircle, AiOutlineVerticalAlignBottom } from 'react-icons/ai';
import { BsGrid1X2Fill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { ImHammer2 } from 'react-icons/im';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TfiTime } from 'react-icons/tfi';

const Panels = () => {

  const [animate, setAnimate] = useState(false); 
  const [tabBar, setTabBar] = useState("Profile")
  const [tabBarIcon, setTabBarIcon] = useState('dashboard')
  const [tabBarIconCatagories, setTabBarIconCatagories] = useState('DESCRIPTION')
  const [animateVertical, setAnimateVertical] = useState(false);
  const [tabBarVertical, setTabBarVertical] = useState("Profile")
  const [animateCatagories, setAnimateCatagories] = useState(false); 
  const [tabBarVerticalIcon, setTabBarVerticalIcon] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState('accordions1');


  const handleAccordions = (val) => {
    setActiveAccordion((prev) => (prev === val ? null : val)); 
  };

  const buttonTab = [
    {title : "Profile"},
    {title : "Options"},
    {title : "Settings"},
  ]

  const buttonTabVertical = [
    {judul : "dashboard", icon : <BsGrid1X2Fill size={25} />, description : "Dashboard"},
    {judul : "scadule", icon : <TfiTime size={25} />, description : "Scedule"},
  ]

  const buttonTabHorizontalIcon = [
    { icon : <AiOutlineExclamationCircle size={35} />, description : "DESCRIPTION"},
    { icon : <FaLocationDot size={35} />, description : "LOCATION"},
    { icon : <ImHammer2 size={35} />, description : "LEGAL INFO"},
    { icon : <IoMdHelpCircleOutline size={35} />, description : "HELP CENTER"},
  ]

  const helpCenterContent = [
    {
      judul: 'DESCRIPTION',
      title: "Description about product",
      subtitle: "More information here",
      paragraphs: [
        {p : "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."},
        {p2 : "Dramatically visualize customer directed convergence without revolutionary ROI."},
      ],
    },
    {
      judul: 'LOCATION',
      title: "Location of the product",
      subtitle: "Find the assistance you need",
      paragraphs: [
        {p : "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."},
        {p2 : "Dramatically maintain clicks-and-mortar solutions without functional solutions."},
      ],
    },
    {
      judul: 'LEGAL INFO',
      title: "Legal info of the product",
      subtitle: "Frequently Asked Questions",
      paragraphs: [
        {p : "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas."},
        {p2 : "Dynamically innovate resource-leveling customer service for state of the art customer service"},
      ],
    },
    {
      judul: 'HELP CENTER',
      title: "Help center",
      subtitle: "Frequently Asked Questions",
      paragraphs: [
        {p : "From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right"},
        {p2 : "Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design."},
      ],
    },
  ];
  


  const handleTabChange = (title) => {
    setAnimate(true);
  
    setTimeout(() => {
      setTabBar(title);
      setAnimate(false);
    }, 400); 
  };

  const handleTabVertical = (val) => {
    setAnimateVertical(true)
    setTimeout(() => {
      setTabBarVertical(val)
      setAnimateVertical(false)
    }, 400)
  }

  const handleTabVerticalIcon = (val) => {
    setTabBarVerticalIcon(true); // Aktifkan transisi
    setTimeout(() => {
      setTabBarIcon(val); // Set tab yang aktif
      setTabBarVerticalIcon(false); // Matikan transisi setelah waktu tertentu
    }, 200); // Durasi transisi
  };


  const handleTabVerticalIconCatagories = (val) => {
    setAnimateCatagories(true); // Aktifkan transisi
    setTimeout(() => {
      setTabBarIconCatagories(val); // Set tab yang aktif
      setAnimateCatagories(false); // Matikan transisi setelah waktu tertentu
    }, 200); // Durasi transisi
  };
  

  return (
    <div className='w-full flex flex-col gap-20' >
      {/* card top */}
        <div className='flex items-center gap-10' >
            <div className='flex-1 px-5 bg-white rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] h-[375px] w-full pt-5' >
                <span className='flex items-end mb-10 gap-2' >
                  <h1 className='text-lg text-gray-500 ' >Navigation Pills </h1>
                  <p className='text-gray-500 text-sm ' > - Horizontal Tabs</p>
                </span>
                <div className='flex gap-5 text-sm  ' >
                    {
                      buttonTab.map((val, index) => (
                        <button key={index} onClick={() => handleTabChange(val.title)} className={`px-6 py-3  rounded-full ${tabBar === val.title ? 'bg-orange-400 text-white' : ''} `} >{val.title}</button>
                      ))
                    }
                </div> 
               <div className="relative overflow-hidden mt-5" >
               <div
                  className={`transition-all duration-300 transform ${
                    animate ? 'translate-x-[100%] opacity-0' : 'translate-x-0 opacity-100'
                  } text-gray-500 text-sm flex flex-col gap-5`}
                >
               {
                  tabBar === 'Profile' && (
                    <div className='text-gray-500 pr-10 text-sm flex flex-col gap-5 mt-5  ' >
                      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                      <p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                      <p>This is very nice</p>
                    </div>
                  )
                }
                {
                  tabBar === 'Options' && (
                    <div className='text-gray-500 pr-10 text-sm flex flex-col gap-5 mt-5  ' >
                      <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                      <p>Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                    </div>
                  )
                }
                {
                  tabBar === 'Settings' && (
                    <div className='text-gray-500 pr-10 text-sm flex flex-col gap-5 mt-5  ' >
                     <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
                     <p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                    </div>
                  )
                }
               </div>
               </div>
            </div>
            <div className='flex-1 px-5 bg-white rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] h-[375px] w-full pt-5' >
                <span className='flex items-end mb-10 gap-2' >
                  <h1 className='text-lg text-gray-500 ' >Navigation Pills </h1>
                  <p className='text-gray-500 text-sm ' > - Vertical Tabs</p>
                </span>
               <div className='flex gap-5 items-start ' >
               <div className='flex flex-col gap-3 text-sm  ' >
                    {
                      buttonTab.map((val, index) => (
                        <button key={index} onClick={() => handleTabVertical(val.title)} className={`px-20 py-3  rounded-full ${tabBarVertical === val.title ? 'bg-red-600 text-white' : ''} `} >{val.title}</button>
                      ))
                    }
                </div> 
               <div className="relative overflow-hidden " >
               <div
                  className={`transition-all w-full duration-300 transform ${
                    animateVertical ? 'translate-x-[100%] opacity-0' : 'translate-x-0 opacity-100'
                  } text-gray-500    text-sm flex flex-col gap-5`}
                >
               {
                  tabBarVertical === 'Profile' && (
                    <div className='text-gray-500 pr-3  text-sm flex flex-col gap-7    ' >
                      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                      <p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                      <p>This is very nice</p>
                    </div>
                  )
                }
                {
                  tabBarVertical === 'Options' && (
                    <div className='text-gray-500 pr-3  text-sm flex flex-col gap-7  ' >
                      <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                      <p>Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                    </div>
                  )
                }
                {
                  tabBarVertical === 'Settings' && (
                    <div className='text-gray-500 pr-3  text-sm flex flex-col gap-7  ' >
                     <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
                     <p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                    </div>
                  )
                }
               </div>
               </div>
               </div>
            </div>
        </div>
        {/* card center */}
        <div className='flex items-start gap-20' >
             <div className="flex-1 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md bg-white h-auto w-full py-5 pb-5">
                <div className="px-5 gap-5 flex flex-col">
                  <h1 className="text-xl mb-5 text-gray-500">Collapsible Accordion</h1>

                  {/* Accordion 1 */}
                  <div>
                    <button
                      onClick={() => handleAccordions("accordions1")}
                      className="border-b border-gray-400 hover:text-violet-600 text-[16px] text-gray-500 pb-1 w-full flex items-stretch justify-between"
                    >
                      <p>Collapsible group #1</p>
                      <AiOutlineVerticalAlignBottom />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeAccordion === "accordions1"
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-gray-500 mt-5 text-justify ">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.  
                      </p>
                    </div>
                  </div>

                  {/* Accordion 2 */}
                  <div>
                    <button
                      onClick={() => handleAccordions("accordions2")}
                      className="border-b border-gray-400 hover:text-violet-600 text-[16px] text-gray-500 pb-1 w-full flex items-stretch justify-between"
                    >
                      <p>Collapsible group #2</p>
                      <AiOutlineVerticalAlignBottom />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeAccordion === "accordions2"
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-gray-500 mt-5 text-justify ">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.  
                      </p>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className='' >
                    <button
                      onClick={() => handleAccordions("accordions3")}
                      className="border-b border-gray-400 hover:text-violet-600 text-[16px] text-gray-500 pb-1 w-full flex items-stretch justify-between"
                    >
                      <p>Collapsible group #3</p>
                      <AiOutlineVerticalAlignBottom />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeAccordion === "accordions3"
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-gray-500 mt-5 text-justify ">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            <div className='flex-1 px-5 bg-white rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] mb-5 h-[400px] w-full pt-5' >
                <span className='flex items-end mb-10 gap-2' >
                  <h1 className='text-lg text-gray-500 ' >Navigation Pills </h1>
                  <p className='text-gray-500 text-sm ' > - Vertical Tabs</p>
                </span>
               <div className='flex gap-5 items-start ' >
               <div className='flex flex-col gap-3 text-sm  ' >
                    {
                      buttonTabVertical.map((val, index) => (
                        <button key={index} onClick={() => handleTabVerticalIcon(val.judul)} className={` w-[120px] h-[120px] flex flex-col justify-center items-center gap-3 rounded-md ${tabBarIcon === val.judul ? 'bg-red-600 text-white' : ''} `} >{val.icon} {val.description} </button>
                      ))
                    }
                </div> 
               <div className="relative overflow-hidden " >
               <div
                  className={`transition-all w-full duration-300 transform ${
                    tabBarVerticalIcon ? 'translate-x-[100%] opacity-0' : 'translate-x-0 opacity-100'
                  } text-gray-500 text-sm flex flex-col gap-5`}
                >
               {
                  tabBarIcon === 'dashboard' && (
                    <div className='text-gray-500 pr-3  text-sm flex flex-col gap-7    ' >
                      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                      <p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                      <p>Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.</p>
                    </div>
                  )
                }
                {
                  tabBarIcon === 'scadule' && (
                    <div className='text-gray-500 pr-3  text-sm flex flex-col gap-7  ' >
                      <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
                      <p>Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                    </div>
                  )
                }
               </div>
               </div>
               </div>
            </div>
        </div>
        {/* bottom */}
        <div className='flex flex-col mt-10 justify-center-center items-center w-full ' >
            <h1 className='text-2xl' >Page Subcategories</h1>
            <div className='flex mt-10 ' >
                {
                  buttonTabHorizontalIcon.map((val, index) => (
                    <button onClick={() => handleTabVerticalIconCatagories(val.description)} className={`w-[110px] h-[110px] flex items-center justify-center flex-col gap-2 rounded-md ${tabBarIconCatagories === val.description ? "bg-orange-400 text-white" : ''}`} >{val.icon}<p className='text-[10px]' >{val.description}</p></button>
                  ))
                }
            </div>
        <div>
              {
            helpCenterContent.map((val, index) => (
              tabBarIconCatagories === val.judul && (
                <div className='w-[850px] mt-10 h-[250px] overflow-hidden text-gray-500 py-3 rounded-md px-5 bg-white' >
                  <div
                  className={`transition-all w-full duration-300 transform ${
                    animateCatagories ? 'translate-x-[100%] opacity-0' : 'translate-x-0 opacity-100'
                  } text-gray-500 text-sm flex flex-col gap-5`}
                >
                    <span className='' >
                      <h1 className='text-xl' >{val.title}</h1>
                      <p className='text-gray-400' >{val.subtitle}</p>
                    </span>
                    {
                      val.paragraphs.map((e, index) => (
                        <div className='' >
                            <p className='my-5' >{e.p}</p>
                            <p className='my-5' >{e.p2}</p>
                        </div>
                      ))
                    }
                      </div>
                  </div>
              )
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Panels