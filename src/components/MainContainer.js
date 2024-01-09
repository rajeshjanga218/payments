import React from 'react'
import PaymentsHeader from './PaymentsHeader'
import Transaction from './Transaction'

const MainContainer = () => {
  return (
    <div className='col-span-4 bg-[#f0f3f7]'>
      <PaymentsHeader />
      <div className='p-6 overflow-y-auto'>
        <div className='flex justify-between py-2'>
          <h1 className='font-bold'>Overview</h1>
          <select className='rounded-md p-1'>
            <option selected>Last Month</option>
            <option >This Month</option>
          </select>
        </div>  
        <div className='grid grid-cols-2 gap-4 py-4'>
          <div className='col-span-1 flex flex-col gap-3 px-4 py-6 rounded-md bg-white'>
            <p className=''>Online Orders</p>
            <p className='text-lg font-bold'>231</p>
          </div>
          <div className='col-span-1 flex flex-col gap-3 px-4 py-6 rounded-md bg-white'>
            <p className=''>Amount Received</p>
            <p className='text-lg font-bold'>₹23,92,312.19</p>
          </div>
        </div>
        <Transaction/>
      </div>
    </div>
  )
}

export default MainContainer