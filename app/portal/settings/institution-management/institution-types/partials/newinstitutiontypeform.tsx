import React from 'react'
import { Input } from 'app/app/components/form-components/input'
function newinstitutiontypeform() {
  return (
    <form className=' py-7 px-5'>
      <nav className="grid grid-cols-1 gap-3">
        <Input label='Institution Type' placeholder='Enter institution type' />
      </nav>
    </form>
  )
}

export default newinstitutiontypeform