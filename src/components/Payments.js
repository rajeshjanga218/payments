import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'

const Payments = () => {
  return (
    <div className='h-full w-full grid grid-cols-5'>
      <SideBar/>
      <MainContainer/>
    </div>
  )
}

export default Payments