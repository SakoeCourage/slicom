"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from 'app/app/components/datatable/datatable'
import { ITarrifDTO, tarriffList } from '../tarriftypedef'
import Newtarrifform from './newtarrifform'
import Modal from 'app/app/components/ui/modal'
import { formatcurrency } from 'app/app/lib/utils'

function Statusindicator({status}: {status: "Active" | "Inactive"}): React.JSX.Element {
    return <nav>
        {status == "Active" ? <nav className=" bg-green-200 whitespace-nowrap text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> Active</nav> :
            <nav className=" bg-red-200 whitespace-nowrap text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> Inactive</nav>
        }
    </nav>
}

function formatnumber(num: number){
    return num.toFixed(2)
} 

export const columns: ColumnDef<ITarrifDTO>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "startDate",
        header: "Start Date"
    },
    {
        accessorKey: "endDate",
        header: "End Date"
    },
    {
        accessorKey: "basicPremium",
        header: "Basic Premium(GH)",
        cell: ({row})=> formatnumber(Number(row.original.basicPremium))
    },
    {
        accessorKey: "stickerFee",
        header: "Sticker Fee(GH)" ,
        cell: ({row})=> formatnumber(Number(row.original.stickerFee))
    },
    {
        accessorKey: "browncardStickerFee",
        header: "browncard Sticker Fee(GH)",
        cell: ({row})=> formatnumber(Number(row.original.browncardStickerFee))

    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row})=> <Statusindicator status={row.original.status}/>,
    },

]

function tarifftable() {
    return (
        <div>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={tarriffList}
                filterable="name"
                actionName='Add Tarrif'
                actionOptions={{
                    asLink: true,
                    link: "/settings/tarrifs/new"
                }}
            />
        </div>
    )
}

export default tarifftable