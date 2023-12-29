import React from 'react'
import Tarifftable from './partials/tarifftable'
import Daterangepicker from 'app/app/components/form-components/daterangepicker'

function page() {
  return (
    <div className=' container mx-auto p-5'>
      <div className=' w-full mb-2 flex flex-col gap-2  md:flex-row bg-white p-5 border rounded-md items-center justify-between py-2'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          All Tariffs
        </h1>
        <nav className=' flex gap-4 p-2 px-3  rounded-md bg-gray-50/30 border border-gray-50/30'>
          <Daterangepicker label='Filter Start - End Date' />
        </nav>
      </div>
      <Tarifftable />
    </div>
  )
}

export default page