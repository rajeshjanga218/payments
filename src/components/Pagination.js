import React from 'react'

const Pagination = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='flex gap-2 items-center'>
                <div className='flex gap-2 items-center'>
                    <img src="/svg/leftArrow.svg" alt='arrow' className='w-5 h-5'/>
                    <p>Previous</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <p>1</p>
                    <div className='flex items-center'>
                          <img src="/svg/listDots.svg" alt='dots' className='w-5 h-5'/>
                    </div>
                  
                   { [10,11,12,13,14,15,16,17,18,18].map((number,index)=><p key={index}>{number}</p>)}
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Previous</p>
                    <img src="/svg/rightArrow.svg" alt='arrow' className='w-5 h-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pagination