"use client"
import React from 'react'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'
import Newncdform from '../partial/newncdform'
function page() {
    return (
        <div className=' container mx-auto p-5'>
            <nav className='flex z-20  px-4 backdrop-blur-sm !bg-white !items-center rounded-md  !h-max !gap-3 border py-2' >
                <IconifyIcon icon='ic:baseline-plus' />
                <nav className=' font-semibold text-gray-600 text-base uppercase text-left'>New NCD</nav>
            </nav>
            <Newncdform />
        </div >
    )
}

export default page