import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

const LayoutSidebar = () => {
  return (
    <div className='flex w-screen h-screen ' >
        <div className='flex flex-col w-[250px] h-full bg-black/20' >
            <NavLink to={'/'} >Dashboard</NavLink>
            <NavLink to={'/pages'} >Pages</NavLink>
            <NavLink to={'/component'} >Component</NavLink>
            <NavLink to={'/forms'} >Forms</NavLink>
            <NavLink to={'/tables'} >Table</NavLink>
            <NavLink to={'/maps'} >Maps</NavLink>
            <NavLink to={'/Widgets'} >Widgets</NavLink>
            <NavLink to={'/Calender'} >Calender</NavLink>
        </div>
        <div className='w-full h-full' >
            <Outlet/>
        </div>
    </div>
  )
}

export default LayoutSidebar