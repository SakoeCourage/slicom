"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from 'app/app/components/datatable/datatable'
import { NCD_DTO, ncdData } from '../ncdtypedef'

export const columns: ColumnDef<NCD_DTO>[] = [

    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "number",
        header: "Number"
    },
    {
        accessorKey: "vehicleRegisteration",
        header: "Vehicle Registeration)"
    },
    {
        accessorKey: "insured",
        header: "Insured"
    }

]

function ncdtable() {

    return (
        <div>
          
            <DataTable
                sortableColumns={['number']}
                columns={columns}
                data={ncdData}
                filterable="number"
                actionName='Add NCD'
                actionOptions={{
                    asLink: true,
                    link: "ncd/new"
                }}
            />
        </div>
    )
}

export default ncdtable