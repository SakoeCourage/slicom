import React from 'react'
import { useForm } from 'react-hook-form'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'
function institutionform() {
    const uform = useForm()
    return (<form className=' max-w-xl p-5 w-full mx-auto'>
        <nav className='grid grid-cols-1 gap-4'>
            <Selectoption required placeholder=' Insitution Type' label='Select Insitution Type' options={[{ key: "New internal Broker", value: "New International Broker " }]} />
            <Input type='text' label='Institution Name' placeholder='Institution Name' />
            <Input type='text' label='Contact Person' placeholder='Contact Person' />
            <Input type='text' label='Position of Person' placeholder='Position of Person' />
            <Input type='text' label='Office Location' placeholder='Office Location' />
            <Input type='text' label='Website' placeholder='Website' />
            <Input type='text' label='Email' placeholder='Email' />
            <Input type='text' label='Contact' placeholder='(00) (000) (0000) (000)' />
            <nav className='flex items-center justify-end gap-3'>
                <Button variant='outline'>
                    Cancel
                </Button>
                <Button variant='default'>
                    Save
                </Button>
            </nav>
        </nav>
    </form>
    )
}

export default institutionform