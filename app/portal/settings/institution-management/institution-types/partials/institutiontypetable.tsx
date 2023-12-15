"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IinstitionTypeSchema, insitituionTypeList } from '../instuitiontypesdefs'
import DataTable from 'app/app/components/datatable/datatable'
import dynamic from 'next/dynamic'
import Newinstitutiontypeform from './newinstitutiontypeform'
const Modal = dynamic(import('app/app/components/ui/modal'),{ssr:false})
const Sidemodal = dynamic(() => import('app/app/components/ui/sidemodal'), { ssr: false })

export const columns: ColumnDef<IinstitionTypeSchema>[] = [
    {
        accessorKey: "name",
        header: "Institution Type",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    }
]



function Institutiontypetable() {
    const [showNewTypeForm, setShowNewTypeForm] = useState(false)
    return (
        <div>
            <Sidemodal size='lg' open={showNewTypeForm} closeModal={() => setShowNewTypeForm(false)} title='Add Institution Type'>
                <Newinstitutiontypeform />
            </Sidemodal>
            <Modal />
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