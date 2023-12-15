import React from 'react'
import Institutiontypetable from './partials/institutiontypetable'
import dynamic from 'next/dynamic'

function page() {
  return (
    <div className='container mx-auto p-5'>
   
      <Institutiontypetable />
    </div>
  )
}

export default page