import React from 'react'
import { Button } from 'app/app/components/form-components/button'
import { Input } from 'app/app/components/form-components/input'

function newoccupationform() {
    return (
        <form className='h-full '>
            <nav className="grid grid-cols-1 h-full  gap-3">
                <div className='p-5 flex flex-col gap-3'>
                    <Input required label='Occupation Name' className=' my-auto' placeholder='Enter Occupation Name' />
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

export default newoccupationform