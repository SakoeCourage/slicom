"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IinstitionTypeSchema, insitituionTypeList } from '../instuitiontypesdefs'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Newinstitutiontypeform from './newinstitutiontypeform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'

export const columns: ColumnDef<IinstitionTypeSchema>[] = [
    {
        accessorKey: "name",
        header: "Institution Type",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "Edit", onOptionSelected: () => console.log(row.original.name), icon: "basil:edit-outline", theme: 'success' },
                    { optionName: "Delete", onOptionSelected: () => console.log(row.original.name), icon: "mdi-light:delete", theme: 'danger' },
                ]
            } />
    },

]

function Institutiontypetable() {
    const [showNewTypeForm, setShowNewTypeForm] = useState(false)
    return (
        <div>
            <Modal title='New institution Type'
                open={showNewTypeForm}
                closeModal={() => setShowNewTypeForm(false)}
            >
                <Newinstitutiontypeform />
            </Modal>

            <DataTable
                sortableColumns={['name', 'createdAt']}
                columns={columns}
                data={insitituionTypeList}
                filterable="name"
                actionName='New Institution Type'
                onAction={() => setShowNewTypeForm(true)}
            />
        </div>
    )
}

export default Institutiontypetable