"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from 'app/app/components/datatable/datatable'
import Newstickerpriceform from './newstickerpriceform'
import { IStickerPricesDTO, stickerPricesList } from './stickerpricestypedef'
import Modal from 'app/app/components/ui/modal'
function Statusindicator({ status }: { status: boolean }): React.JSX.Element {
    return <nav>
        {status ? <nav className=" bg-green-200 whitespace-nowrap text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> yes</nav> :
            <nav className=" bg-red-200 whitespace-nowrap text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> no</nav>
        }
    </nav>
}

export const columns: ColumnDef<IStickerPricesDTO>[] = [
    {
        accessorKey: "amount",
        header: "Amount - GHS"
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
        accessorKey: "comment",
        header: "Comment"
    },


]
function stickerpricestable() {
    const [showForm, setShowForm] = useState<boolean>(false)
    return (
        <div>
            <Modal size="xl" open={showForm} closeModal={() => setShowForm(false)} title='New Sticker Price'>
                <Newstickerpriceform />
            </Modal>
            <DataTable
                sortableColumns={['startDate',"amount"]}
                columns={columns}
                data={stickerPricesList}
                actionName='New Sticker Price'
                onAction={() => setShowForm(true)}
            />
        </div>
    )
}

export default stickerpricestable