"use client"
import React from 'react'
import Newroletable from './partials/newroletable'
import Link from 'next/link'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'

function page() {
  return (
    <div className=' container mx-auto p-5'>

      <div className=' w-full mb-2 flex items-center justify-between px-1'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          Roles List
        </h1>
      </div>
      <Newroletable />
    </div>
  )
}

export default page