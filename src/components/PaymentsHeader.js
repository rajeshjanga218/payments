import React from 'react'

const PaymentsHeader = () => {
  return (
    <div className='flex justify-between py-2 px-6 bg-white sticky left-0 right-0 border-b'>
      <div className='flex gap-3 items-center'>
        <p className=''>Payments</p>
        <div className='flex gap-1 items-center'>
          <img src='/svg/questionMark.svg' alt='questionMark' className='w-5 h-5'/>
          <p className=''>How it works</p>
        </div>
      </div>

      <div className='relative flex w-1/3 items-center '>
        <img src='/svg/searcIcon.svg' alt='searchicon' className='w-5 h-5 absolute left-2'/>
        <input type='text' placeholder="Seacrh features, tutorials, etc. " className='pl-8 w-full h-full bg-gray-100 rounded-sm' />
      </div>

      <div className='flex gap-2'>
        <div className='flex justify-center items-center w-9 h-9 rounded-full bg-gray-100'>
            <img src='/svg/chatIcon.svg' alt='chat' className='w-5 h-5' />
        </div>
        <div className='flex justify-center items-center p-1 w-9 h-9 rounded-full bg-gray-100'>
            <img src='/svg/love.svg' alt='love' className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default PaymentsHeader