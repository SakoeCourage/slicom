"use client"
import React, { useEffect } from 'react'
import Statsection from './partials/statsoverview/statsection'
import Recentstickerpurchases from './partials/recentstickerpurchases'
import Motoranalysis from './partials/motoranalysis'

function page() {

  return (
    <div className=' h-full container mx-auto px-5'>
      <Statsection />
      <div className="flex lg:items-start flex-col lg:flex-row gap-3 mt-5">
        <Recentstickerpurchases />
        <Motoranalysis />
      </div>
    </div>
  )
}

export default page