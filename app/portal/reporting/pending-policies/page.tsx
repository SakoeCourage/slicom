"use client"
import React from 'react'
import Policytable from '../partials/policytable'
import { policiesList } from '../policiestypdef'
function page() {
  return (
    <div className=' container mx-auto p-5'>
    <div className=' w-full mb-2 flex items-center justify-between px-1'>
      <h1 className=' text-gray-500 font-medium text-lg flex items-center'>
        Pending Policies
      </h1>
    </div>
    <Policytable data={policiesList.filter(policy=>policy.status == "Pending")} />
  </div>
  )
}

export default page