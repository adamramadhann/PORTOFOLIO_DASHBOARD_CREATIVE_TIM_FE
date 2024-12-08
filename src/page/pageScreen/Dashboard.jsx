import React from 'react'
import { cardDashboard } from '../../data/dataDami'
import CardHomeScreen from '../../component/CardHomeScreen'
import TableWord from '../../component/TableWord'
import CardDashboardMarketing from '../../component/CardDashboardMarketing'
import CardManageListing from '../../component/CardManageListing'

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen relative' id='ds' >
     <div className='flex   gap-5 items-center' >
        {
          cardDashboard.map((e, index) => (
            <CardHomeScreen
            key={index}
            bgColor={e.bgColor}
            subtitle={e.subtitle}
            information={e.information}
            judul={e.judul}
            icon={<e.icon/>}
            />
          ))
        }
     </div>
     <TableWord/>
     <CardDashboardMarketing/>
     <h1 className='mb-20  text-3xl' >Manage Listings</h1>
     <CardManageListing/>
    </div>
  )
}

export default Dashboard