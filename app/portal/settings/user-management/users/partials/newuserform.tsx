import React from 'react'
import { useForm } from 'react-hook-form'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'
function newuserform() {
    const uform = useForm()
    return (<form className=' max-w-xl p-5 w-full mx-auto'>
        <nav className='grid grid-cols-1 gap-4'>
            <Input type='text' label='Email (User Name)' placeholder='example@email.com' />
            <Input type='text' label='First Name' placeholder='First Name' />
            <Input type='text' label='Last Name' placeholder='Last Name' />
            <Input type='text' label='Other Names' placeholder='Other Names' />

            <Input type="password" label='Password' placeholder='' />
            <Input type="password" label='Confirm Password' placeholder='' />

            <Selectoption required placeholder=' Insitution ' label='Select Insitution ' options={[{ key: "New internal Broker", value: "New International Broker " }]} />
            <Selectoption required placeholder=' User Role' label='Select User Role' options={[
                { key: "Super Admin", value: "SuperAdmin" },
                { key: "Broker", value: "Broker" },
                { key: "Insurance Admin", value: "Insurance Admin" },
                { key: "Underwriting Manager", value: "Underwriting Manager" },
                { key: "Underwriting", value: "Underwriting" },
                { key: "Audit", value: "Audit" },
                ]} />
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

export default newuserform