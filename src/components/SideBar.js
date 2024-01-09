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
        iconUrl : "/svg/speakerWave.svg"
    },
     {
        sectionName:"Analytics",
        iconUrl : "/svg/analytics.svg"
    },
    {
        sectionName:"Payments",
        iconUrl : "/svg/rectangleStack.svg"
    },
     {
        sectionName:"Tools",
        iconUrl : "/svg/cursor.svg"
    },
    {
        sectionName:"Discounts",
        iconUrl : "/svg/percent.svg"
    },
     {
        sectionName:"Audience",
        iconUrl : "/svg/user.svg"
    },
    {
        sectionName:"Apperance",
        iconUrl : "/svg/ellipse.svg"
    },
     {
        sectionName:"Plugins",
        iconUrl : "/svg/bolt.svg"
    },
]

  return (
    <div className='col-span-1 flex flex-col justify-between bg-gray-900 text-white p-2'>
        <div className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white rounded-md text-gray-900 text-xs flex justify-center items-center p-4'>Nishayan</div>
                    <div>
                        <p>Nishayan</p>
                        <p className='underline underline-offset-1 decoration-gray-500'>Visit store</p>
                    </div>
                </div>
                <img src='/svg/downArrow.svg' className='w-6 h-6'/>
            </div>
            <ul className='flex flex-col gap-4'>
                {data.map((item,index)=><li className='flex gap-2' key={index}>
                    <img src={item.iconUrl} alt='' className="w-6 h-6 text-white"/>
                    <p>{item.sectionName}</p>
                </li>)}
                
            </ul>
        </div>
        <div className='flex gap-2 items-center bg-gray-600 opacity-60 rounded-md p-2'>
            <img src='/svg/card.svg' about='alt' className='w-6 h-6'/>
            <div>
                <p>Available credits</p>
                <p>222.10</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar