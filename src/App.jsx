import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutSidebar from './Layout/LayoutSidebar'
import Pages from './page/Pages'
import Components from './page/Components'
import Forms from './page/Forms'
import Tables from './page/Tables'
import Maps from './page/Maps'
import Widgets from './page/Widgets'
import Dashboard from './page/Dashboard'
import Calenders from './page/Calenders'

const App = () => {


  return (
      <Routes>
        <Route path='/' element={<LayoutSidebar/>} >
            <Route index element={<Dashboard/>} />
            <Route path='/pages' element={<Pages/>} />
            <Route path='/component' element={<Components/>} />
            <Route path='/forms' element={<Forms/>} />
            <Route path='/tables' element={<Tables/>} />
            <Route path='/maps' element={<Maps/>} />
            <Route path='/widgets' element={<Widgets/>} />
            <Route path='/calenders' element={<Calenders/>} />
        </Route>
      </Routes>
  )
}

export default App