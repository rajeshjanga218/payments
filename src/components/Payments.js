import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'

const Payments = () => {
  return (
    <div className='h-screen w-full grid grid-cols-6 bg-red-200 p-2'>
      <SideBar/>
      <MainContainer/>
    </div>
    
  )
}

export default Payments