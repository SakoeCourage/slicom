"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from 'app/app/components/datatable/datatable'
import { NCD_DTO, ncdData } from '../ncdtypedef'
import Modal from 'app/app/components/ui/modal'
import Newncdform from './newncdform'


export const columns: ColumnDef<NCD_DTO>[] = [

    {
        accessorKey: "date",
        header: "Nate"
    },
    {
        accessorKey: "number",
        header: "Number"
    },
    {
        accessorKey: "vehicleRegisteration",
        header: "vehicle Registeration)"
    },
    {
        accessorKey: "insured",
        header: "Insured"
    }

]

function ncdtable() {
    const [showNewNCDForm, setShowNCDForm] = useState<boolean>(false)

    return (
        <div>
            <Modal size='xl' title='Add NCD' open={showNewNCDForm} closeModal={() => setShowNCDForm(false)}>
                <Newncdform/>
            </Modal>
            <DataTable
                sortableColumns={['number']}
                columns={columns}
                data={ncdData}
                filterable="number"
                actionName='Add NCD'
                onAction={() => setShowNCDForm(true)}
            />
        </div>
    )
}

export default ncdtable