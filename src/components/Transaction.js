import React from 'react'
import Pagination from './Pagination'

const Transaction = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className='font-bold'>Transactions | This Month</h1>
        <div className='bg-white p-3 flex flex-col gap-3 rounded-md'>
            <div className='flex justify-between'>
                <div className='relative flex w-1/3 items-center rounded-md'>
                    <img src='/svg/searcIcon.svg' alt='searchicon' className='w-5 h-5 absolute left-2'/>
                    <input type='text' placeholder="Seacrh by order ID..." className='pl-8 w-full h-full bg-gray-100 rounded-sm' />
                </div>
                
                <div className='flex gap-2'>
                <div className='border border-gray-300 bg-gray-100 flex gap-2 justify-center items-center p-1 rounded-md'>
                    <p>Sort</p>
                    <div className='flex justify-center items-center pr-1 pl-2'>
                        <img src='/svg/longArrowDown.svg' alt='arrow-down' className='h-4 w-4'/>
                        <img src='/svg/longArrowUp.svg' alt='arrow-up' className='h-4 w-4 -ml-2'/>
                    </div>
                </div>
                <div className='px-2 flex justify-center items-center border border-gray-300 bg-gray-100 rounded-md'>
                    <img src="/svg/arrowDownTray.svg" alt='arrow' className='w-4 h-4'/>
                </div>
                </div>
            </div>
        
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right">
                    <thead class="text-xs text-gray-700 bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Order Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <select className='bg-transparent'>
                                    <option selected>Order date</option>
                                </select>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Order amount
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div className='flex gap-1'>
                                    <p>  Transaction fees</p>
                                    <img src='/svg/informationCircle.svg' alt='transaction' className='w-4 h-4'/>
                                </div>
                            
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,29].map((item,index)=> <tr key={index} class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-400">
                                #2812089
                            </th>
                            <td class="px-6 py-4">
                                7 July, 2023
                            </td>
                            <td class="px-6 py-4">
                                ₹1,278.23
                            </td>
                            <td class="px-6 py-4">
                                $22
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    </div>
  )
}

export default Transaction