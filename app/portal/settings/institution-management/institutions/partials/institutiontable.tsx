"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { institutionList, intsitutionSchema } from '../instituitionsetuptypedefs'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Institutionform from './institutionform'
const Sidemodal = dynamic(() => import('app/app/components/ui/sidemodal'), { ssr: false })
import Modal from 'app/app/components/ui/modal'
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
        header: "Action",
        // cell: ({ row }) => `${formatcurrency(row.original.orderTotal)}`
    },

]



function Institutiontable() {
    const [showNewInstitutionForm, setShowNewInstitutionForm] = useState(false)
    return (
        <div>
            <Modal onConfirm={()=>void(0)} size="xl" open={showNewInstitutionForm} closeModal={() => setShowNewInstitutionForm(false)} title='Add Institution'>
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