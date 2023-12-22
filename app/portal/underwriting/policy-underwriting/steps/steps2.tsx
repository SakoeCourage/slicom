import React from 'react'
import IconifyIcon from 'app/app/components/ui/Iconsbutton';
import { Input } from 'app/app/components/form-components/input';

export function Step2() {
    return (
        <div className="grid grid-cols-1 gap-5">
            {/* Vehicle Information Section */}
            <div className=" grid grid-cols-1 gap-7 !bg-white pb-10 pt-5 px-5 rounded-md border">
                <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                    <IconifyIcon
                        icon="fluent:vehicle-car-profile-16-regular"
                        className=" text-gray-900"
                    />
                    <span>Policy Information</span>
                </nav>
                <nav className=" grid grid-cols-2 gap-5">
                    <Input
                        label="Currency"
                        placeholder="Enter Currency"
                        name="Currency"
                    />
                    <Input
                        label="Exchange Rate"
                        placeholder="1.00"
                        name="Exchange Rate"
                    />
                    <Input
                        label="Duration"
                        placeholder="Enter Duration"
                        name="Yor"
                    />
                    <Input
                        label="Year of Days"
                        placeholder="Enter Year of Days"
                        name="Yor"
                    />

                    <Input
                        label="Inception Date"
                        placeholder="Enter Inception Date"
                        name="Inception Date"
                    />

                    <Input
                        label="Expiry Date"
                        placeholder="Enter Expiry Date"
                        name="Expiry Date"
                    />
                </nav>
                <nav className=" py-5 border-y grid grid-cols-1 gap-7">
                    <Input
                        label="Cover Type"
                        placeholder="Enter Cover Type"
                        name="Expiry Date"
                    />
                    <Input
                        label="Schedule"
                        placeholder="Enter Schedule"
                        name="Expiry Date"
                    />
                </nav>
                <nav className=" grid grid-cols-2 gap-5">
                    <Input
                        label="Sum Insured"
                        placeholder="Enter Sum Insured"
                        name="Sum Insured"
                    />
                    <Input label="Rate" placeholder="Enter Rate" name="Rate" />
                    <nav className=" col-span-2">
                        <Input label="Excess" placeholder="Enter Excess" name="Yor" />
                    </nav>
                    <Input label="Excess Rate" placeholder="0.00" name="Yor" />

                    <Input
                        label="Excess Amount"
                        placeholder="0.00"
                        name="Excess Amount"
                    />
                    <nav className=" col-span-2">
                        <Input
                            label="Co  Insure"
                            placeholder="Enter Co  Insure"
                            name="Yor"
                        />
                    </nav>
                    <Input
                        label="Co Insured Rate"
                        placeholder="0.00"
                        name="Co Insured Rate"
                    />
                    <Input
                        label="Clousure Amount"
                        placeholder="0.00"
                        name="Clousure Amount"
                    />

                    <Input label="TPPD Rate" placeholder="0.00" name="TPPDRate" />
                    <Input label="TPPD Limit" placeholder="0.00" name="TPPDLimit" />
                </nav>
            </div>
            <nav className=" grid grid-cols-1 gap-7 px-2 pb-5">
                <h3>Comment</h3>
                <textarea
                    cols={20}
                    className=" min-w-full min-h-[10rem] border rounded-md"
                />
            </nav>
        </div>
    );
}

export default Step2;