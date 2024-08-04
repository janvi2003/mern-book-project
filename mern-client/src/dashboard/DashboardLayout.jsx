import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBar from './SlideBar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
    <SlideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout