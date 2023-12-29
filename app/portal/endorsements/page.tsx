import React from 'react'
import Endorsementtable from './partials/endorsementtable'
import Daterangepicker from 'app/app/components/form-components/daterangepicker'
import Selectoption from 'app/app/components/form-components/selectoption'
import Vr from 'app/app/components/ui/vr'
function page() {
  return (
    <div className=' container mx-auto p-5'>
      <div className=' w-full mb-2 flex flex-col gap-2  md:flex-row bg-white p-5 border rounded-md items-center justify-between py-2'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          All Endorsements
        </h1>
        <nav className=' flex gap-4 p-2 px-3  rounded-md bg-gray-50/30 border border-gray-50/30'>
          <Vr />
          <Daterangepicker label='Filter Start - End Date' />
        </nav>
      </div>
      <Endorsementtable />
    </div>
  )
}

export default page