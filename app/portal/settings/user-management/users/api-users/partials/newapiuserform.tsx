import React from 'react'
import { useForm } from 'react-hook-form'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'

function newapiuserform() {
    const uform = useForm()
    return (<form className=' max-w-xl p-5 w-full mx-auto'>
        <nav className='grid grid-cols-1 gap-4'>
            <Input type='text' label='Email (User Name)' placeholder='example@email.com' />
            <Input type='text' label='Public IP - (Please provide Public IP from where your calls will come from.)' placeholder='Public Ip' />
            <Input type="password" label='Password' placeholder='' />
            <Input type="password" label='Confirm Password' placeholder='' />
            <Selectoption required placeholder=' Insitution ' label='Select Insitution ' options={[{ key: "New internal Broker", value: "New International Broker " }]} />
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

export default newapiuserform