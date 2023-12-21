"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Icustomertype, customertypeslist } from '../customertypedef'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Newcustomertypeform from './newcustomertypeform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'

export const columns: ColumnDef<Icustomertype>[] = [
    {
        accessorKey: "code",
        header: "Code",
    },
    {
        accessorKey: "name",
        header: "Branch Name",
    },
    {
        accessorKey: "createdAt",
        header: "Create At ",
    },
    {
        accessorKey: "action",
        header: "Actions",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "Edit", onOptionSelected: () => console.log(row.original.name), icon: "basil:edit-outline", theme: 'success' },
                    { optionName: "Delete", onOptionSelected: () => console.log(row.original.name), icon: "mdi-light:delete", theme: 'danger' },
                ]
            } />
    },
]

function customertypetable() {
    const [showNewCustomerTypeForm, setShowNewCustomerTypeForm] = useState(false)
    return (
        <div>
            <Modal title='Add Customer Type'
                open={showNewCustomerTypeForm}
                closeModal={() => setShowNewCustomerTypeForm(false)}
            >
                <Newcustomertypeform />
            </Modal>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={customertypeslist}
                filterable="name"
                actionName='Add Customer Type'
                onAction={() => setShowNewCustomerTypeForm(true)}
            />
        </div>
    )
}

export default customertypetable