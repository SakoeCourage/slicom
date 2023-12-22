"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IintermediaryScheme, intermediaryList } from '../intermediariestypedef'
import DataTable from 'app/app/components/datatable/datatable'
import Newintermediaryform from './newintermediaryform'
import Modal from 'app/app/components/ui/modal'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'

export const columns: ColumnDef<IintermediaryScheme>[] = [
    {
        accessorKey: "intermediaryID",
        header: "Int.#",
    },
    {
        accessorKey: "SLICOMRegno",
        header: "SLICOM Reg.#",
    },
    {
        accessorKey: "",
        header: "Intermediary",
        cell: ({ row }) => <nav className='flex flex-col'>
            <h1 className=' font-medium text-gray-500'>{row.original.name} </h1>
            <h1 className=' font-thin'>{row.original.email}</h1>
        </nav>

    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "",
        header: "Actions",
        cell: ({ row }) => <IconifyIcon className='text-green-50 bg-green-400 cursor-pointer' icon='basil:edit-outline' />
    },

]

function intermediarytable() {
    const [showNewUserForm, setShowNewUserForm] = useState(false)
    return (
        <div>
            <Modal size="xl" open={showNewUserForm} closeModal={() => setShowNewUserForm(false)} title='Add Intermeidary'>
                <Newintermediaryform />
            </Modal>
            <DataTable
                sortableColumns={['email']}
                columns={columns}
                data={intermediaryList}
                filterable="SLICOMRegno"
                actionName='Add Intermeidary'
                onAction={() => setShowNewUserForm(true)}
            />
        </div>
    )
}

export default intermediarytable