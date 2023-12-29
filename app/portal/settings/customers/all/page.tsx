import React from 'react'
import Customerstable from './partial/customerstable'
import Daterangepicker from 'app/app/components/form-components/daterangepicker'

function page() {
  return (
    <div className=' mx-auto container p-5'>
      <div className=' w-full mb-2 flex flex-col gap-2  md:flex-row bg-white p-5 border rounded-md items-center justify-between py-2'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          All Customers List
        </h1>
        <nav className=' flex gap-4 p-2 px-3  rounded-md bg-gray-50/30 border border-gray-50/30'>
          <Daterangepicker label='Filter Start - End Date' />
        </nav>
      </div>
      <Customerstable />
    </div>
  )
}

export default page