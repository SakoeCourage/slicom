"use client"
import React, { useEffect } from 'react'
import Selectoption from 'app/app/components/form-components/selectoption';
import IconifyIcon from 'app/app/components/ui/Iconsbutton';
import { Button } from 'app/app/components/form-components/button';
import ImageUpload from 'app/app/components/ui/Imageupload';
import { Input } from 'app/app/components/form-components/input';
import { stepperApi } from '../stepper/steppertypes';
import EmptyResults from 'app/app/components/form-components/emptysearch';
import ClickAwayListener from 'react-click-away-listener';
import Fileupload from 'app/app/components/ui/fileupload';
interface Isearchcomp extends React.InputHTMLAttributes<HTMLInputElement> {
    processing?: boolean
    handleSearch?: () => void
    searchUrl?: string
    searchKey?: string,
    getSearchKey?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function Entitysearchinput({ processing, handleSearch, ...props }: Isearchcomp) {
    const [showResultPane, setShowResultPane] = React.useState<boolean>(false)

    return (
        <ClickAwayListener onClickAway={() => setShowResultPane(false)}>
            <div className='entity-search h-full !my-auto w-full '>
                <div className={`h-[3rem] top-1 my-auto absolute right-0 left-[50%] border ring-gray-400 ring-offset-1  add-customer-bezier  transition-all   flex items-center justify-center bg-white rounded-md overflow-hidden cursor-pointer p-2 ${showResultPane && 'ring-2 !inset-x-0'}`}>
                    <input
                        onFocus={() => setShowResultPane(true)}
                        type="text"
                        className={`text-gray-400 font-normal w-full px-2 h-full border-none outline-none text-sm  ${props.className}`}
                        id="input"
                        {...props}
                    />
                    <button onClick={handleSearch} className=" border-l px-[12px]">
                        <svg viewBox="0 0 512 512" className="searchIcon w-[13px]">
                            <path
                                fill="rgb(114, 114, 114)"
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className={`entity-results h-[20rem]  absolute top-[3.5rem] inset-x-0 rounded-md bg-white  border ${showResultPane ? "block u--slideUp " : "hidden"}`}>
                    <EmptyResults className=' font-normal' />
                </div>
            </div>
        </ClickAwayListener>
    );
}


export function Step1() {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10'>
                {/* Client Information */}
                <div className=' w-full grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                    <nav className=' relative w-full flex items-center !gap-1 border-b h-[4rem] pb-2 !px-0 font-semibold text-gray-500'>
                        <nav className="flex items-center gap-1  my-auto max-w-[50%] w-full">
                            <IconifyIcon icon="carbon:customer-service" /><span className=' text-sm my-auto'>Client Information</span>
                        </nav>
                        <Entitysearchinput placeholder='Search Client...' />
                    </nav>
                    <Input label='First Name' placeholder='Enter First Name' name='FirstName' />
                    <Input label='Last Name' placeholder='Enter Last Name' name='LastName' />
                    <Input label='Other Name' placeholder='Enter Other Name' name='OtherName' />
                    <Input label='Phone Number' placeholder='Enter Phone Number' name='PhoneNumber' />
                </div>
                <div className=' w-full grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                    <nav className=' relative w-full flex items-center !gap-1 border-b h-[4rem] pb-2 !px-0 font-semibold text-gray-500'>
                        <nav className="flex items-center gap-1  my-auto max-w-[50%] w-full">
                            <IconifyIcon icon="streamline:information-desk-customer" /><span className=' text-sm my-auto'>Intermediary Information</span>
                        </nav>
                        <Entitysearchinput placeholder='Search Intermediary...' />
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
                    <IconifyIcon icon="fluent:vehicle-car-profile-16-regular" /><span>Vehicle Information</span>
                </nav>
                <nav className=' grid-cols-1 grid md:grid-cols-2 gap-5'>
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
                {/* <ImageUpload /> */}
                <Fileupload acceptType={['image/jpeg','image/jpg',"image/png","application/pdf",'application/zip']} />
            </div>
        </div>
    )
}

export default Step1