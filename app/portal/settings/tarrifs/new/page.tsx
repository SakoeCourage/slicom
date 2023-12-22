"use client"
import React from 'react'
import { Input } from 'app/app/components/form-components/input'
import Selectoption from 'app/app/components/form-components/selectoption'
import Datepicker from 'app/app/components/form-components/datepicker'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'
import { Button } from 'app/app/components/form-components/button'
import { Checkbox } from 'app/app/components/form-components/checkbox'

function page() {
    return (
        <div className=' container mx-auto p-5'>

            <div className='grid border-b !bg-white grid-cols-1 lg:grid-cols-2 py-5 px-5 rounded-md border gap-5'>
                <nav className='flex z-20 lg:col-span-2 px-4 backdrop-blur-sm !bg-white !items-center rounded-md  !h-max !gap-3 border py-2'>
                    <IconifyIcon icon='ic:baseline-plus' />
                    <nav className=' font-semibold text-gray-600 text-base uppercase text-left'>New Tariff</nav>
                </nav>
                <Selectoption
                    label="Schedule"
                    name=""
                    options={[]}
                />
                <Selectoption
                    label="ComputationType"
                    name=""
                    options={[]}
                />
                <Datepicker label="Start Date" />
                <Datepicker label="End Date" />
                <Input label='Basic Premium' placeholder='0.00' />
                <Input label='Description' placeholder='' />
                <Input label='Additional Peril Charge' placeholder='0.00' />
                <Input label='Extra Seats Charge' placeholder='0.00' />
                <Input label='Ecowas Peril Charge' placeholder='0.00' />
                <Input label='Personal Accident Charge' placeholder='0.00' />
                <Input label='Nhis' placeholder='0.00' />
                <Input label='Sticker Fee' placeholder='0.00' />
                <Input label='Ecowas Levy' placeholder='0.00' />
                <Input label='Other Charges' placeholder='0.00' />
                <Input label='Excess Amount' placeholder='0.00' />
                <Input label='Excess Rate' placeholder='0.00' />
                <Input label='Office Premium' placeholder='0.00' />
                <Input label='Comprehensive Minimum Rate' placeholder='0.00' />
                <Input label='Death' placeholder='0.00' />
                <Input label='Comprehensive Maximum Rate' placeholder='0.00' />
                <Input label='Bodily Injury' placeholder='0.00' />
                <Input label='Tppd Amount' placeholder='0.00' />
                <Input label='Third Party Premium' placeholder='0.00' />
                <Input label='Third Party Excess' placeholder='0.00' />
                <Input label='Third Party Fire' placeholder='0.00' />
                <Input label='Third Party Fire Excess' placeholder='0.00' />
                <Input label='Tppd Rate' placeholder='0.00' />
                <Input label='Brown Card Fee' placeholder='0.00' />
                <Input label='Fire And Theft Minimum Rate' placeholder='0.00' />
                <Input label='Fire And Theft Maximum Rate' placeholder='0.00' />
                <Input label='Premium Floor' placeholder='0.00' />
                <nav className='flex items-end justify-start my-auto h-full gap-2 py-2 '>
                    <Checkbox className='mt-auto' />
                    <label className='inline-block mt-auto text-gray-500 text-sm'>Is Active</label>
                </nav>
            </div>
            <nav className='w-full mt-4 rounded-md flex justify-end items-center border gap-2 p-5 !h-[3.5rem]  bg-white'>
                <Button size='sm' className='' variant="outline">
                    Cancel
                </Button>
                <Button size='sm' className='' variant="primary">
                    Save
                </Button>
            </nav>
        </div>
    )
}

export default page