"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IBrancesSchema, branchesList } from '../branchestypedef'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Newbranchform from './newbranchform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'
export const columns: ColumnDef<IBrancesSchema>[] = [
    {
        accessorKey: "code",
        header: "Code",
    },
    {
        accessorKey: "name",
        header: "Branch Name",
    },
    {
        accessorKey: "institutionName",
        header: "Insitution ",
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

function branchtable() {
    const [showNewTypeForm, setShowNewTypeForm] = useState(false)
    return (
        <div>
            <Modal title='Add Branch'
                open={showNewTypeForm}
                closeModal={() => setShowNewTypeForm(false)}
            >
                <Newbranchform />
            </Modal>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={branchesList}
                filterable="name"
                actionName='Add Branch'
                onAction={() => setShowNewTypeForm(true)}
            />
        </div>
    )
}

export default branchtable