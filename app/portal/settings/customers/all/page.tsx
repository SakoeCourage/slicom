import React from 'react'
import Customerstable from './partial/customerstable'
function page() {
  return (
    <div className=' mx-auto container p-5'>
      <div className=' w-full mb-2 flex items-center justify-between px-1'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          All Customers List
        </h1>
      </div>
      <Customerstable />
    </div>
  )
}

export default page