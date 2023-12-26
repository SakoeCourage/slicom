import React from 'react'
import Datepicker from 'app/app/components/form-components/datepicker'
import { Input } from 'app/app/components/form-components/input'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Textarea } from 'app/app/components/form-components/textarea'
import { Button } from 'app/app/components/form-components/button'

function newendorsmentform() {
    return (
        <div className=' max-w-xl p-5 w-full mx-auto'>
            <nav className='grid grid-cols-1 gap-4'>
                <Datepicker name='date' label='Date' />
                <Input name='number' label='Number' />
                <Input name='vecRegNumber' label='Vehicle Registration Number' />
                <Input name='Insured' label='Insured' />
                <Textarea name='comment' label='Comment' rows={6} />
                <Selectoption options={[]} name='type' label='Type' />
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

export default newendorsmentform