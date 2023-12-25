import React from 'react'
import Ncdtable from './partial/ncdtable'
function page() {
  return (
    <div className=' container mx-auto p-5'>
      <div className=' w-full mb-2 flex items-center justify-between px-1'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          All NCD
        </h1>
      </div>
      <Ncdtable />
    </div>
  )
}

export default page