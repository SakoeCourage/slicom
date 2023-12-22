"use client"
import React from 'react'
import Userstable from './partials/userstable'
import Link from 'next/link'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'
function page() {
  return (
    <div className=' container mx-auto p-5'>
      <div className=' w-full mb-2 flex items-center justify-between px-1'>
        <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
          {/* <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg> */}
          Users List
        </h1>
        <Link href='users/api-users' className=' shadow ring-1 ring-offset-2 ring-orange-200 text-sm ring-offset-white ml-auto flex items-center gap-2 py-1 px-5 rounded-lg bg-orange-50 text-orange-700'>
          <IconifyIcon className='bg-orange-200/25' icon='ph:user-list-light' /> Api Users
        </Link>
      </div>
      <Userstable />
    </div>
  )
}

export default page