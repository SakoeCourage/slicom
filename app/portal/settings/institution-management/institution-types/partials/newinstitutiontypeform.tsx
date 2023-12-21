import React from 'react'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'
function newinstitutiontypeform() {
  return (
    <form className='h-full '>
      <nav className="grid grid-cols-1 h-full  gap-3">
        <div className='p-5'>
          <Input required label='Institution Type' className=' my-auto' placeholder='Enter institution type' />
        </div>
        <nav className='w-full mt-auto flex justify-end items-center gap-2 p-5 !h-[3.5rem]  bg-orange-50/50'>
          <Button size='sm' className='' variant="outline">
            Cancel
          </Button>
          <Button size='sm' className='' variant="primary">
            Save
          </Button>
        </nav>
      </nav>
    </form>
  )
}

export default newinstitutiontypeform