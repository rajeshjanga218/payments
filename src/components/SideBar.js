import React from 'react'

const SideBar = () => {
    const data = [{
        sectionName:"Home",
        iconUrl : "/svg/home.svg"
    },
    {
        sectionName:"Orders",
        iconUrl : "/svg/documentList.svg"
    },
    {
        sectionName:"Products",
        iconUrl : "/svg/sqaures.svg"
    },
     {
        sectionName:"Delivery",
        iconUrl : "/svg/vehicle.svg"
    },
    {
        sectionName:"Marketing",
        iconUrl : "/svg/home.svg"
    },
     {
        sectionName:"Analytics",
        iconUrl : "/svg/analytics.svg"
    },
    {
        sectionName:"Payments",
        iconUrl : "/svg/home.svg"
    },
     {
        sectionName:"Tools",
        iconUrl : "/svg/cursor.svg"
    },
    {
        sectionName:"Discounts",
        iconUrl : "/svg/home.svg"
    },
     {
        sectionName:"Audience",
        iconUrl : "/svg/user.svg"
    },
    {
        sectionName:"Apperance",
        iconUrl : "/svg/home.svg"
    },
     {
        sectionName:"Plugins",
        iconUrl : "/svg/bolt.svg"
    },
    

] 
  return (
    <div className='col-span-1 flex flex-col justify-between bg-gray-900 text-white p-2'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img src='/svg/home.svg' about='alt' className='w-6 h-6'/>
                    <div className=''>
                        <p className=''>Nishayan</p>
                        <p className='underline underline-offset-1 decoration-gray-500'>Visit store</p>
                    </div>
                </div>
                <img src='/svg/downArrow.svg' className='w-6 h-6'/>
            </div>
            <ul className='flex flex-col gap-2'>
                {data.map((item,index)=><li className='flex gap-2' key={index}>
                    <img src={item.iconUrl} alt='' className="w-6 h-6 text-white"/>
                    <p className=''>{item.sectionName}</p>
                </li>)}
                
            </ul>
        </div>
        <div className='flex gap-2 items-center'>
            <img src='/svg/home.svg' about='alt' className='w-6 h-6'/>
            <div className=''>
                <p className=''>Available credits</p>
                <p className=''>222.10</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar