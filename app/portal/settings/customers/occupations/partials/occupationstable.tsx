"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Ioccupationtype,occupationList } from '../occupationdef'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Newoccupationform from './newoccupationform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'

export const columns: ColumnDef<Ioccupationtype>[] = [
    {
        accessorKey: "code",
        header: "Code",
    },
    {
        accessorKey: "name",
        header: "Occupation Name",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
    {
        accessorKey: "action",
        header: "Actions",
        cell: ({ row }) => <Moreoptions
        options={
            [
                { optionName: "Edit", onOptionSelected: () => console.log(row.original.name), icon: "basil:edit-outline", theme:'success' },
                { optionName: "Delete", onOptionSelected: () => console.log(row.original.name), icon: "mdi-light:delete", theme:'danger'},
            ]
        }/>
    },
]

function occupationstable() {
    const [showNewOccupationForm, setShowNewOccupationForm] = useState(false)
    return (
        <div>
            <Modal title='Add Occupation'
                open={showNewOccupationForm}
                closeModal={() => setShowNewOccupationForm(false)}
            >
                <Newoccupationform />
            </Modal>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={occupationList}
                filterable="name"
                actionName='Add Occupation'
                onAction={() => setShowNewOccupationForm(true)}
            />
        </div>
    )
}

export default occupationstable