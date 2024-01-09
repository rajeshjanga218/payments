import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center items-center py-4'>
        <div className='flex gap-5 items-center text-sm'>
            <div className='flex gap-1 justify-center items-center border rounded-md px-2 py-1'>
                <img src="/svg/leftArrow.svg" alt='arrow' className='w-3 h-3'/>
                <p>Previous</p>
            </div>

            <div className='flex gap-2 items-center'>
                <p>1</p>

                <div className='flex justify-center items-end'>
                    <img src="/svg/listDots.svg" alt='dots' className='w-4 h-4'/>
                </div>
                
                { [10,11,12,13,14,15,16,17,18,18].map((number,index)=><p key={index} className={`px-0.5 rounded-sm ${number===10 ? "bg-blue-500 text-white":""} `}>{number}</p>)}
            </div>
            
            <div className='flex gap-1 justify-center items-center border rounded-md px-2 py-1'>
                <p>Next</p>
                <img src="/svg/rightArrow.svg" alt='arrow' className='w-3 h-3'/>
            </div>
        </div>
    </div>
  )
}

export default Pagination