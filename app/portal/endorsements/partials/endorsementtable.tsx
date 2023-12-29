"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import Newendorsmentform from './newendorsmentform'
import DataTable from 'app/app/components/datatable/datatable'
import { IEndorsementDTO, endorsementList } from '../endorsementtypedef'
import Modal from 'app/app/components/ui/modal'
function Statusindicator({ status }: { status: boolean }): React.JSX.Element {
    return <nav>
        {status ? <nav className=" bg-green-200 whitespace-nowrap text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> Yes</nav> :
            <nav className=" bg-red-200 whitespace-nowrap text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> No</nav>
        }
    </nav>
}

export const columns: ColumnDef<IEndorsementDTO>[] = [
    {
        accessorKey: "createdAt",
        header: "Date"
    },
    {
        accessorKey: "number",
        header: "Number"
    },
    {
        accessorKey: "registrationNumber",
        header: "Vehicle Registeration"
    },
    {
        accessorKey: "type",
        header: "Endorsement Type"
    },
    {
        accessorKey: "creator",
        header: "Creator"
    },
    {
        accessorKey: "authorizer",
        header: "Authorizer"
    },
    {
        accessorKey: "insured",
        header: "Insured",
        cell: ({ row }) => <Statusindicator status={row.original.insured} />
    }

]
function endorsementtable() {
    const [showForm, setShowForm] = useState<boolean>(false)
    return (
        <div>
            
            <Modal size="xl" open={showForm} closeModal={() => setShowForm(false)} title='Add Endorsement'>
                <Newendorsmentform />
            </Modal>
            <DataTable
                sortableColumns={['number']}
                columns={columns}
                data={endorsementList}
                filterable="number"
                actionName='Add Endorsement'
                onAction={() => setShowForm(true)}
            />
        </div>
    )
}

export default endorsementtable