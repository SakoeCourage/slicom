import React from 'react'
import Userstable from './partials/userstable'
import Link from 'next/link'
function page() {
  return (
    <div className=' container mx-auto p-5'>
      <nav>
        <Link href='users/api-users' className=' ml-auto'>
          API USERS
        </Link>
      </nav>
      <Userstable />
    </div>
  )
}

export default page