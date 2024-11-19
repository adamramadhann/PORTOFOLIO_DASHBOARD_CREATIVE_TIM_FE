import React from 'react'
import { cardDashboard } from '../../data/dataDami'
import CardHomeScreen from '../../component/CardHomeScreen'

const Dashboard = () => {
  return (
    <div>
     <div className='flex w-full justify-between gap-5 items-center' >
        {
          cardDashboard.map((e, index) => (
            <CardHomeScreen
            key={index}
            bgColor={e.bgColor}
            subtitle={e.subtitle}
            information={e.information}
            judul={e.judul}
            />
          ))
        }
     </div>
    </div>
  )
}

export default Dashboard