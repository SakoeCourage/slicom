import React from 'react'
import Selectoption from 'app/app/components/form-components/selectoption';
import IconifyIcon from 'app/app/components/ui/Iconsbutton';
import { Button } from 'app/app/components/form-components/button';
import ImageUpload from 'app/app/components/ui/Imageupload';
import { Input } from 'app/app/components/form-components/input';

export function Step3() {
    return (
        <div className="grid grid-cols-1 gap-5 mb-5">
            <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                <div className=" grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
                    <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                        <IconifyIcon icon="grommet-icons:money" className=" text-gray-600" />
                        <span>Premium Computation</span>
                    </nav>
                    <Input
                        label="Basic Premium"
                        placeholder="0.00"
                        name="BasicPremium"
                    />
                    <Input
                        label="Adjusted Premium"
                        placeholder="0.00"
                        name="LastName"
                    />
                    <Input label="Sticker Fee" placeholder="0.00" name="LastName" />
                    <Input
                        label="Brown Card Fee"
                        placeholder="0.00"
                        name="LastName"
                    />
                    <Input label="Extra Seets" placeholder="0.00" name="LastName" />
                    <Input label="Extra TPPD" placeholder="0.00" name="LastName" />
                    <Input label="GST" placeholder="0.00" name="LastName" />
                </div>

                <div className=" h-max grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
                    <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
                        <IconifyIcon icon="grommet-icons:money" className=" text-gray-600" />
                        <span>Total Premium Payerables</span>
                    </nav>
                    <Input
                        label="Applicable Rate"
                        placeholder="100.00"
                        name="Applicable Rate"
                    />
                    <Input
                        label="Sub Total"
                        placeholder="0.00"
                        name="Applicable Rate"
                    />
                    <Input
                        label="Total Loading"
                        placeholder="0.00"
                        name="Applicable Rate"
                    />
                    <Input
                        label="Total Discount"
                        placeholder="0.00"
                        name="Applicable Rate"
                    />
                    <Input
                        label="Total Premium"
                        placeholder="0.00"
                        name="Applicable Rate"
                    />
                </div>
            </div>
        </div>
    );
}

export default Step3;