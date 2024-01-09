import React from 'react'
import PaymentsHeader from './PaymentsHeader'
import Transaction from './Transaction'

const MainContainer = () => {
  return (
    <div className='col-span-5'>
        <PaymentsHeader />
        <div className='p-2'>
        <div className=''>
          <div className='flex justify-between '>
            <h1 className=''>Overview</h1>
            <select className='rounded-md p-1'>
              <option selected>Last Month</option>
              <option >This Month</option>
            </select>
          </div>
          
          <div className='grid grid-cols-2 gap-2 py-2'>
            <div className='col-span-1 p-2 rounded-md bg-white'>
              <p className=''>Online Orders</p>
              <p className='text-xl'>231</p>
            </div>
             <div className='col-span-1 p-2 rounded-md bg-white'>
              <p className=''>Amount Received</p>
              <p className='text-xl'>₹23,92,312.19</p>
            </div>
          </div>

        <Transaction/>

        </div>
        </div>
    </div>
  )
}

export default MainContainer