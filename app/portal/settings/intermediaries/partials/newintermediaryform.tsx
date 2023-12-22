import React from 'react'
import { useForm } from 'react-hook-form'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'

function newintermediaryform() {
    const uform = useForm()
    return (<form className=' max-w-xl p-5 w-full mx-auto'>
        <nav className='grid grid-cols-1 gap-4'>
            <Input type='text' label='SLICOM Reg' placeholder='Enter SLICOM Reg' />
            <Input type='text' label='Phone' placeholder='Phone' />
            <Selectoption required placeholder=' Branch' label='Select Branch' options={[]} />
            <Selectoption required placeholder=' Intermediary Type ' label='Select Intermediary Type '
                options={
                    [
                        { key: "Agent", value: "Agent " },
                        { key: "Broker", value: "Broker " },
                        { key: "Reinsurance", value: "Reinsurance " },
                        { key: "Direct", value: "Direct " },
                    ]
                }
            />
            <Input type='text' label='First Name' placeholder='First Name' />
            <Input type='text' label='Last Name' placeholder='Last Name' />
            <Input type='text' label='Other Names' placeholder='Other Names' />

            <Input type='text' label='Email (User Name)' placeholder='example@email.com' />


            <nav className='flex items-center justify-end gap-3'>
                <Button variant='outline' size='sm'>
                    Cancel
                </Button>
                <Button variant='primary' size='sm'>
                    Save
                </Button>
            </nav>
        </nav>
    </form>
    )
}

export default newintermediaryform