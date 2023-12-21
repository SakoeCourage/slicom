"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IdentificationtypeScheme, identificationtypeslist } from '../identificationtypedefs'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Newidentificationtypeform from './newidentificationtypeform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'

export const columns: ColumnDef<IdentificationtypeScheme>[] = [
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
        header: "Created At",
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

function identificationtypetable() {
    const [showNewIDTypeForm, setShowNewIDTypeForm] = useState(false)
    return (
        <div>
            <Modal title='Add Identification Type'
                open={showNewIDTypeForm}
                closeModal={() => setShowNewIDTypeForm(false)}
            >
                <Newidentificationtypeform />
            </Modal>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={identificationtypeslist}
                filterable="name"
                actionName='Add Identification Type'
                onAction={() => setShowNewIDTypeForm(true)}
            />
        </div>
    )
}

export default identificationtypetable