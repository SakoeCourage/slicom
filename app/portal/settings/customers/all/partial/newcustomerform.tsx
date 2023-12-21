import React from 'react'
import { useForm } from 'react-hook-form'
import Selectoption from 'app/app/components/form-components/selectoption'
import { Input } from 'app/app/components/form-components/input'
import { Button } from 'app/app/components/form-components/button'
import Datepicker from 'app/app/components/form-components/datepicker'

function newcustomerform() {
    const uform = useForm()
    return (<form className=' max-w-xl p-5 w-full mx-auto'>
        <nav className='grid grid-cols-1 gap-4'>
            <Selectoption required placeholder=' Identification Type' label='Select Identification Type'
                options={[
                    { key: "Driver's License", value: "DriversLicense" },
                    { key: "Voter ID", value: "VoterID" },
                    { key: "Passport", value: "Passport" },
                    { key: "National ID", value: "NationalID" },
                    { key: "Other", value: "Other" },
                ]} />
            <Input type='text' label='Identification Number' placeholder='Identification Number' />
            <Input type='text' label='First Name' placeholder='First Name' />
            <Input type='text' label='Last Name' placeholder='Last Name' />
            <Selectoption required placeholder=' Gender' label='Select Gender'
                options={[
                    { key: "Male", value: "Male" },
                    { key: "Female", value: "Female" },
                    { key: "Unkown", value: "Unkown" }
                ]} />
            <Input type='text' label='Contact Number' placeholder='Contact Number' />
            {/* <Input type='date' label='Date Of Birth' placeholder='Date Of Birth' />
             */}
             <Datepicker placeholder='Select Date of Birth' label='Date of Birth' />
            <Input type='text' label='Customer Type' placeholder='Customer Type' />
            <Input type='text' label='Residential Address' placeholder='Residential Address' />
            <Input type='text' label='Postal Address' placeholder='Postal Address' />
            <Input type='text' label='Email' placeholder='example@email.com' />
            <Input type='text' label='Digital Address' placeholder='Digital Address' />
            <Selectoption required placeholder=' Occupation' label='Select Occupation'
                options={[
                    { key: "Driver", value: "Drivers" },
                    { key: "Others", value: "Others" },
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

export default newcustomerform