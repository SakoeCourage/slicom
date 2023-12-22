"use client"
import React from 'react'
import Link from 'next/link'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'
import Apiuserstable from './partials/apiuserstable'
function page() {
    return (
        <div className=' container mx-auto p-5'>
            <div className=' w-full mb-2 flex items-center justify-between px-1'>
                <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
                    Api Users List
                </h1>
                <Link href='/settings/user-management/users' className=' shadow ring-1 ring-offset-2 ring-orange-200 text-sm ring-offset-white ml-auto flex items-center gap-2 py-1 px-5 rounded-lg bg-orange-50 text-orange-700'>
                    <IconifyIcon className='bg-orange-200/25' icon='typcn:arrow-back-outline' /> Local Users
                </Link>
            </div>
            <Apiuserstable />
        </div>
    )
}

export default page