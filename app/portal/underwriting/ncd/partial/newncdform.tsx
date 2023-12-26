import React from 'react'
import { Input } from 'app/app/components/form-components/input'
import Fileupload from 'app/app/components/ui/fileupload'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Button } from 'app/app/components/form-components/button'
function newncdform() {
    return (
        <form className='w-full mx-auto flex flex-col gap-3 mt-3 '>
            <nav className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border p-5 rounded-md'>
                <Input
                    name="VehicleRegisteration"
                    label="Vehicle Registeration"
                    placeholder="Enter Vehicle Registeration"
                />
                <Input
                    name="Customer Name"
                    label="Customer Name"
                    placeholder="Enter Customer Name"
                />
                <Selectoption
                    label="ID Types"
                    name=""
                    options={[{ key: "Driver's License", value: "DriversLicense" }]}
                />
                <Input
                    name="ID Number"
                    label="ID Number"
                    placeholder="Enter ID Number"
                />
                <Input className=' md:col-span-2' name="Current Rate" label="Current Rate" placeholder="0.00" />
            </nav>
            <div className=" grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
                <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                    <span className=" text-gray-500">ID Image (PNG,JPEG)</span>
                </nav>
                <Fileupload maxNumber={1} acceptType={['image/jpeg', 'image/jpg', 'image/png']} />
                <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                    <span className="text-gray-500">Other Supporting Documents</span>
                </nav>
                <Fileupload acceptType={['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']} />
            </div>
            <nav className='flex items-center justify-end p-3 rounded-md gap-3 bg-white border'>
                <Button variant='outline' size='lg'>
                    Cancel
                </Button>
                <Button variant='primary' size='lg'>
                    Save
                </Button>
            </nav>
        </form>
    )
}

export default newncdform