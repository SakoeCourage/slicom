"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { institutionList, intsitutionSchema } from '../instituitionsetuptypedefs'
import DataTable from 'app/app/components/datatable/datatable'
import Institutionform from './institutionform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'
export const columns: ColumnDef<intsitutionSchema>[] = [
    {
        accessorKey: "name",
        header: "Institituion Name",
    },
    {
        accessorKey: "institutionType",
        header: "Institution Type",
    },
    {
        accessorKey: "contactPerson",
        header: "Contact Person",
    },
    {
        accessorKey: "contactPhone",
        header: "Contact Phone",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
    {
        accessorKey: "",
        header: "Actions",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "Edit", onOptionSelected: () => console.log(row.original.name), icon: "basil:edit-outline", theme:'success' },
                    { optionName: "Delete", onOptionSelected: () => console.log(row.original.name), icon: "mdi-light:delete", theme:'danger'},
                ]
            }
        />
    },

]

function Institutiontable() {
    const [showNewInstitutionForm, setShowNewInstitutionForm] = useState(false)
    return (
        <div>
            <Modal size="xl" open={showNewInstitutionForm} closeModal={() => setShowNewInstitutionForm(false)} title='Add Institution'>
                <Institutionform />
            </Modal>
            <DataTable
                sortableColumns={['institutionType']}
                columns={columns}
                data={institutionList}
                filterable="name"
                actionName='New Institution'
                onAction={() => setShowNewInstitutionForm(true)}
            />
        </div>
    )
}

export default Institutiontable