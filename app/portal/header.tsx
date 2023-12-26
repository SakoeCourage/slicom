"use client"
import React from 'react'
import IconifyIcon from '../components/ui/Iconsbutton'
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from '../components/ui/dropdown'
import Link from 'next/link'

const Accountsmenu = (): React.JSX.Element => {
  const userName = "Sk JayKeys"


  function getInitials(name: string): string {
    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0)).join('');
    return initials;
  }

  return <DropdownMenu >
    <DropdownMenuTrigger asChild className=' ml-auto'>
      <button className='flex items-center focus:outline-none  gap-1 min-w-[5rem] min-h-[3rem]  bg-gray-50 p-2 rounded-3xl'>
        <IconifyIcon icon='ic:baseline-account-circle' className=' bg-orange-50 text-orange-300' fontSize={"2rem"} />
        <span className=' font-medium text-gray-500 text-sm'>Jay Keys</span>
        <IconifyIcon icon='mdi:chevron-down' className='bg-transparent' />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent className='bg-white z-40 min-w-[16rem] mr-4'>
      <div className="text-center p-6  border-b">
        <div className="h-24 w-24 mx-auto rounded-full text-3xl grid place-items-center text-orange-400 bg-orange-100  uppercase">
          {getInitials(userName)}
        </div>
        <p className="pt-2 text-base font-semibold">Sk Jay Keys</p>
        <p className="text-sm text-gray-600">akorlicourage@gmail.com</p>
        <p className="text-sm text-gray-600">Administrator</p>
      </div>

      <div className="border-b">
        <Link href="/user/all" className="px-4 py-2 hover:bg-gray-100 flex">
          <div className="text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">User Management</p>
            <p className="text-xs text-gray-500">Add/remove users</p>
          </div>
        </Link>
        <Link href="/profile" className="px-4 py-2 hover:bg-gray-100 flex">
          <div className="text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">Personal Settings</p>
            <p className="text-xs text-gray-500">Email, profile,password</p>
          </div>
        </Link>
      </div>
      <div className=" mt-1">
        <Link href="/logout" className="px-4 py-3 w-full  bg-orange-100/70 rounded-xl text-white flex gap-4 items-center justify between ">
          <nav className="p-1 h-5 w-5 aspect-square rounded-full text-gray-500  flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="15" width="15" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
          </nav>
          <p className="text-sm font-medium text-gray-800 leading-none">Logout</p>
        </Link>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>


}


function header() {
  return (
    <div className='z-20 h-[var(--header-height)] border-b flex items-center px-5 bg-white'>
      <Accountsmenu />
    </div>
  )
}

export default header