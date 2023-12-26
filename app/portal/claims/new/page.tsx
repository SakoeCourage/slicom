"use client"
import React from 'react'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'
import { Textarea } from 'app/app/components/form-components/textarea'
import { Input } from 'app/app/components/form-components/input'
import Datepicker from 'app/app/components/form-components/datepicker'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Button } from 'app/app/components/form-components/button'
function page() {
    return (
        <div className=' container mx-auto p-5'>
            <nav className='flex z-20  px-4 backdrop-blur-sm !bg-white !items-center rounded-md  !h-max !gap-3 border py-2' >
                <IconifyIcon icon='ic:baseline-plus' />
                <nav className=' font-semibold text-gray-600 text-base uppercase text-left'>New Claim</nav>
            </nav>
            <form className="flex flex-col gap-3 mt-3">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 h-max pt-5 px-5 rounded-md border'>
                        <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                            <span>  Registration Details</span>
                        </nav>
                        <nav className=' grid-cols-1 grid gap-5'>
                            <Input
                                label="Registration Number"
                                name="registration_number"
                                placeholder="Enter registration number"
                            />
                            <Datepicker
                                label="Report Date"
                                name="report_date"
                                placeholder="Select Date"
                            />
                            <Datepicker
                                label="Loss Date"
                                name="loss_date"
                                placeholder="Select Date"
                            />
                        </nav>
                    </div>
                    <div className="grid grid-cols-1 gap-5 !bg-white pb-10 h-max pt-5 px-5 rounded-md border">
                        <div className='flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                            <span className="">Policy Details</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Input
                                label="Policy Number"
                                name="policy_number"
                                placeholder="Enter policy number"
                            />
                            <Input label="Make" name="make" placeholder="Enter make" />
                            <Input
                                label="Sum Assured"
                                name="sum_assured"
                                placeholder="Enter sum assured"
                            />
                            <Datepicker
                                label="Inception Date"
                                name="inception_date"
                                placeholder="Select Date"
                            />
                            <Input
                                label="Model"
                                name="model"
                                placeholder="Enter model"
                            />
                            <Input
                                label="Premium"
                                name="premium"
                                placeholder="Enter premium"
                            />
                            <Datepicker
                                label="Expiry Date"
                                name="expiry_date"
                                placeholder="Select Date"
                            />
                            <Input
                                label="Seating"
                                name="seating"
                                placeholder="Enter seating"
                            />
                            <Input
                                label="Cubic/Tonnage"
                                name="cubic"
                                placeholder="Enter cubic"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 !bg-white pb-10 h-max pt-5 px-5 rounded-md border">
                    <div className='flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                        <span className="">Claims Details</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid grid-cols-1 gap-5 !bg-white pb-10 h-max pt-5 px-5 rounded-md border">
                            <Input
                                name="location_of_accident"
                                label="Location of Accident"
                            />
                            <Textarea name="notification" label="Notification" />
                            <Textarea
                                name="circustance"
                                label="Circumstance / Cause of Loss"
                            />
                            <Textarea
                                name="police_investigation"
                                label="Police or Fire Service Investigation"
                            />
                            <Textarea
                                name="loss"
                                label="Injury / Extent of Damage or Loss"
                            />
                            <Textarea
                                name="statement_of_claim"
                                label="Statement of Claim"
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-5 !bg-white pb-10 h-max pt-5 px-5 rounded-md border">
                            <Input name="salvage" label="Salvage" />
                            <Textarea name="subrogation" label="Subrogation" />
                            <Textarea
                                name="subrogation"
                                label="Assesment / Consideration"
                            />
                            <Textarea name="reinsatement" label="Reinsatement Cover" />
                            <Input name="Driver" label="Driver Detais (Name)" />
                            <Input name="lice" label="Driver Detais (Licence Number)" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 !bg-white pb-10 h-max pt-5 px-5 rounded-md border">
                    <div className='flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                        <span className="">Processing</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Selectoption name="loss_type" label="Loss Type" options={[]} />
                        <Input name="claim_amount" label="Claim Amount" />
                        <Datepicker name="estimate_date" label="Estimate Date" />
                        <Input name="estimate_amount" label="Estimate Amount" />
                        <Input name="legal_fess" label="Legal Fees" />
                        <Input name="loss_adjustor_fees" label="Loss Adjustor Fees" />
                        <Selectoption name="currency" label="Currency" options={[]} />
                        <Datepicker name="settle_date" label="Settle Date" />
                        <Datepicker name="discharge_date" label="Discharge Date" />
                        <Selectoption
                            name="settlement"
                            label="Settlement Type"
                            options={[]}
                        />
                    </div>
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
        </div>
    )
}

export default page