import React from 'react'
import Selectoption from 'app/app/components/form-components/selectoption';
import IconifyIcon from 'app/app/components/ui/Iconsbutton';
import { Button } from 'app/app/components/form-components/button';
import ImageUpload from 'app/app/components/ui/Imageupload';
import { Input } from 'app/app/components/form-components/input';

export function Step1() {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='grid grid-cols-2 gap-x-5 gap-y-10'>
                {/* Client Information */}
                <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                    <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                        <IconifyIcon icon="carbon:customer-service"  /><span>Client Information</span>
                        <Button className=' ml-auto flex items-center gap-1' variant="outline">
                            <IconifyIcon className=' bg-orange-50 text-orange-500' icon="clarity:search-line" />
                            <span className=' text-sm whitespace-nowrap'>Get customer by search</span>
                        </Button >
                    </nav>
                    <Input label='First Name' placeholder='Enter First Name' name='FirstName' />
                    <Input label='Last Name' placeholder='Enter Last Name' name='LastName' />
                    <Input label='Other Name' placeholder='Enter Other Name' name='OtherName' />
                    <Input label='Phone Number' placeholder='Enter Phone Number' name='PhoneNumber' />
                </div>

                {/* Intermediary Infomation Information */}
                <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                    <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                        <IconifyIcon  icon="streamline:information-desk-customer"  /><span>Intermdiary Information</span>
                        <Button className=' ml-auto flex items-center gap-1' variant="outline">
                            <IconifyIcon icon="clarity:search-line" className='bg-blue-50 text-blue-500' />
                            <span className='text-sm whitespace-nowrap'>Get Intermediary by search</span>
                        </Button >
                    </nav>
                    <Input label='First Name' placeholder='Enter First Name' name='FirstName' />
                    <Input label='Last Name' placeholder='Enter Last Name' name='LastName' />
                    <Input label='Other Name' placeholder='Enter Other Name' name='OtherName' />
                    <Input label='Phone Number' placeholder='Enter Phone Number' name='PhoneNumber' />
                </div>

            </div>

            {/* Vehicle Information Section */}
            <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                    <IconifyIcon icon="fluent:vehicle-car-profile-16-regular"  /><span>Vehicle Information</span>
                </nav>
                <nav className=' grid grid-cols-2 gap-5'>
                    <Input label='Registeration' placeholder='Enter Registeration' name='Registeration' />
                    <Input label='Make' placeholder='Enter Make' name='Make' />
                    <Input label='Year of Registration' placeholder='Enter Year of Registration' name='Yor' />
                    <Input label='Model' placeholder='Enter Model' name='Model' />

                    <Selectoption label='Body Type' name='Body Type' placeholder='Select Body Type' options={[{ key: "SUV", value: "SUV" }]} />
                    <Input label='Color' placeholder='Enter Color' name='Color' />
                    <Input label='Year of Manufacture' placeholder='2023' name='YOM' />
                    <Input label='Mileage' placeholder='Enter Mileage' name='MIL' />
                    <Input label='Chasis Number' placeholder='Enter Chasis Number' name='cn' />
                    <Input label='Cubic Capacity' placeholder='Enter Cubic Capacity' name='cc' />
                    <Input label='Seats' placeholder='Enter Seats' name='cc' />
                    <Input label='Additional Seats' placeholder='Enter Additional Seats' name='cc' />
                </nav>
            </div>

            {/* Registration Doc */}
            <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                    <span>Registeration Document (PDF,PNG,JPEG)</span>
                </nav>
                <ImageUpload />
            </div>
        </div>
    )
}

export default Step1