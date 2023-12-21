"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IuserScheme, usersList } from '../userdefinition'
import DataTable from 'app/app/components/datatable/datatable'
import Newuserform from './newuserform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'
import Datepicker from 'app/app/components/form-components/datepicker'


function Statusindicator({ status }: { status: "Active" | "Inactive" }): React.JSX.Element {
    return <nav>
        {status == "Active" ? <nav className=" bg-green-200 w-max min-w-[5rem] text-xs whitespace-nowrap text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> Active</nav> :
            <nav className=" bg-red-200 w-max min-w-[5rem] text-xs whitespace-nowrap text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> Inactive</nav>
        }
    </nav>
}

export const columns: ColumnDef<IuserScheme>[] = [
    {
        accessorKey: "user",
        header: "User",
        cell: ({ row }) => <div className='flex items-center gap-2 w-max'>
            <nav className=' h-9 w-9 shadow text-orange-800 font-medium rounded-full bg-orange-100 p-1 aspect-square flex items-center justify-center gap-1'>
                {row.original.firstName.charAt(0).toUpperCase()}
                {row.original.lastName.charAt(0).toUpperCase()}
            </nav>
            <nav className='flex flex-col'>
                <h1 className=' font-medium text-gray-500'>{row.original.lastName} {row.original.firstName}</h1>
                <h1 className=' font-thin'>{row.original.email}</h1>
            </nav>
        </div>
    },
    {
        accessorKey: "institution",
        header: "Institution",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <Statusindicator status={row.original.status} />
    },
    {
        accessorKey: "",
        header: "Actions",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "Edit", onOptionSelected: () => console.log(row.original.email), icon: "basil:edit-outline", theme: 'success' },
                    { optionName: `${row.original.status == "Active" ? "Disable Account": "Enable Account"}`, onOptionSelected: () => console.log(row.original.email), icon: "ph:lock-bold", theme: 'danger' },
                    { optionName: "Reset Password", onOptionSelected: () => console.log(row.original.email), icon: "ic:outline-lock-reset", theme: 'secondary' },
                ]
            }
        />
    },

]

function userstable() {
    const [showNewUserForm, setShowNewUserForm] = useState(false)
    return (
        <div>
            <Modal size="xl" open={showNewUserForm} closeModal={() => setShowNewUserForm(false)} title='Add User'>
                <Newuserform />
            </Modal>
            <DataTable
                sortableColumns={['email']}
                columns={columns}
                data={usersList}
                filterable="firstName"
                actionName='Add User'
                onAction={() => setShowNewUserForm(true)}
            />
        </div>
    )
}

export default userstable