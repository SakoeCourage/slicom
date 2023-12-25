import React from 'react'
import { Input } from 'app/app/components/form-components/input'
import ImageUpload from 'app/app/components/ui/Imageupload'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Button } from 'app/app/components/form-components/button'
function newncdform() {
    return (
        <form className=' max-w-xl p-5 w-full mx-auto '>
            <nav className='grid grid-cols-1 gap-4'>
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
                <Input name="Current Rate" label="Current Rate" placeholder="0.00" />

                <div className=" grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
                    <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                        <span className=" text-gray-500">ID Image (PNG,JPEG)</span>
                    </nav>
                    <ImageUpload />
                    <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                        <span className="text-gray-500">Other Supporting Documents</span>
                    </nav>
                    <ImageUpload />
                </div>
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

export default newncdform