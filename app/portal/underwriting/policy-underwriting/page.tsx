"use client"
import React from 'react'
import Simplestepper from './stepper/simplestepper';
import { stepList } from './stepslist';
import IconifyIcon from 'app/app/components/ui/Iconsbutton';
import { Input } from 'app/app/components/form-components/input';
function page() {
    return (
        <div className=' container mx-auto p-5'>
            <nav className='flex z-20  px-4 backdrop-blur-sm !bg-white !items-center rounded-md  !h-max !gap-3 border py-2'>
                <IconifyIcon icon='ic:baseline-plus' />
                <nav className=' font-semibold text-gray-600 text-base uppercase text-left'>New Policy</nav>
            </nav>
            <div className="flex flex-col gap-5 !py-8" >
                <div className='grid border-b !bg-white grid-cols-3 py-10 px-5 rounded-md border gap-x-5 gap-y-10'>
                    <Input name='PolicyNumber' label='Policy Number' placeholder='Enter Policy Number' />
                    <Input name='DebitNumber' label='Debit Number' placeholder='Enter Debit Number' />
                    <Input name='StickerNumber' label='Sticker Number' placeholder='Enter Sticker Number' />
                </div>
                <Simplestepper steps={stepList} />
            </div>
        </div>
    )
}

export default page