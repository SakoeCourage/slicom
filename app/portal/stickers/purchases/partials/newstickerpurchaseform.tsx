import React from 'react'
import Datepicker from 'app/app/components/form-components/datepicker'
import { Input } from 'app/app/components/form-components/input'
import { Textarea } from 'app/app/components/form-components/textarea'
import { Button } from 'app/app/components/form-components/button'

function newstickerpurchaseform() {
    return (
        <div className=' max-w-xl p-5 w-full mx-auto'>
            <nav className='grid grid-cols-1 gap-4'>
                <Input placeholder='0.00' label='Unit Price Motor (vehicle)' />
                <Input placeholder='0' label='Quantity Motor (vehicle)' />
                <Input placeholder='0.00' label='Unit Price Motor Cycle' />
                <Input placeholder='0' label='Quantity Motor Cycle' />
                <Input placeholder='0.00' label='Total Motor Cycle' />
                <Input name='' placeholder='0.00' label='Total Purchase Value' />
                <nav className='flex items-center justify-end gap-3'>
                    <Button variant='outline' size='sm'>
                        Cancel
                    </Button>
                    <Button variant='primary' size='sm'>
                        Save
                    </Button>
                </nav>
            </nav>

        </div>
    )
}

export default newstickerpurchaseform