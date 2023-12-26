import React from 'react'
import Datepicker from 'app/app/components/form-components/datepicker'
import { Input } from 'app/app/components/form-components/input'
import { Textarea } from 'app/app/components/form-components/textarea'
import { Button } from 'app/app/components/form-components/button'

function newstickerpriceform() {
    return (
        <div className=' max-w-xl p-5 w-full mx-auto'>
            <nav className='grid grid-cols-1 gap-4'>
                <Input placeholder='0.00' label='Unit Price Motor (Vehicle)' />
                <Input placeholder='0.00' label='Unit Price Motor Cycle' />
                <Input name='vecRegNumber' placeholder='Vehicl Registeration Number' label='Vehicle Registration Number' />
                <Datepicker placeholder='Start Date' label='Start Date' />
                <Datepicker placeholder='End date' label='End Date' />
                <Textarea placeholder='comment' label='Comment' rows={6} />
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

export default newstickerpriceform