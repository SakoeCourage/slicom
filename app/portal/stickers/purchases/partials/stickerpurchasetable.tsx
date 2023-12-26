"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from 'app/app/components/datatable/datatable'
import Newstickerpurchaseform from './newstickerpurchaseform'
import { IStickerPurchaseDTO, stickerPurchaseList } from './stickerpurchasetypedef'
import Modal from 'app/app/components/ui/modal'
import IconifyIcon from 'app/app/components/ui/Iconsbutton'

function Statusindicator({ status }: { status: "Paid" | "Unpaid" }): React.JSX.Element {
    return <nav>
        {status == "Paid" ? <nav className=" bg-green-200 whitespace-nowrap text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> paid</nav> :
            <nav className=" bg-red-200 whitespace-nowrap text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> unpaid</nav>
        }
    </nav>
}

export const columns: ColumnDef<IStickerPurchaseDTO>[] = [
    {
        accessorKey: "invoice",
        header: "Invoice#"
    },
    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "quantityMotorVehicle",
        header: <nav className=''>Quantiy Motor <br />(vehicle)</nav>
    },
    {
        accessorKey: "priceMotorVehicle",
        header: <nav className=''>Price Motor <br />(vehicle)</nav>

    },
    {
        accessorKey: "quantityMotorCyle",
        header: <nav className=''>Quantity Motor <br />cycle</nav>
    },
    {
        accessorKey: "priceMotorCycle",
        header: "Price Motor cycle"
    },
    {
        accessorKey: "total",
        header: "Total"
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <Statusindicator status={row.original.status} />
    },
    {
        accessorKey: "",
        header: "Actions",
        cell: ({ row }) => <IconifyIcon className='text-green-50 bg-green-400 cursor-pointer' icon='basil:edit-outline' />

    },


]
function stickerpurchasetable() {
    const [showForm, setShowForm] = useState<boolean>(false)
    return (
        <div>
            <Modal size="xl" open={showForm} closeModal={() => setShowForm(false)} title='Sticker Purchase'>
                <Newstickerpurchaseform />
            </Modal>
            <DataTable
                sortableColumns={["status"]}
                columns={columns}
                data={stickerPurchaseList}
                filterable="invoice"
                actionName='Make Purchase'
                onAction={() => setShowForm(true)}
            />
        </div>
    )
}

export default stickerpurchasetable