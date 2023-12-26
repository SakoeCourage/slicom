import React from 'react'
import { IPolicyDTO } from '../policiestypdef'
import { ColumnDef } from '@tanstack/react-table'
import Moreoptions from 'app/app/components/datatable/moreoptions'
import DataTable from 'app/app/components/datatable/datatable'
export const columns: ColumnDef<IPolicyDTO>[] = [
    {
        accessorKey: "number",
        header: "Number"
    },
    {
        accessorKey: "customerName",
        header: "Customer Name"
    },
    {
        accessorKey: "coverType",
        header: "Cover Type"
    },
    {
        accessorKey: "schedule",
        header: "Schedule"
    },
    {
        accessorKey: "vehicleRegistration",
        header: "Vehicle Registration"
    },
    {
        accessorKey: "makeModel",
        header: "Make/Model"
    },
    {
        accessorKey: "company",
        header: "Company"
    },
    {
        accessorKey: "inception",
        header: "Inception"
    },
    {
        accessorKey: "expiry",
        header: "Expiry"
    },
    {
        accessorKey: "sumInsured",
        header: "Sum Insured"
    },
    {
        accessorKey: "premium",
        header: "Premium"
    },
    {
        accessorKey: "status",
        header: "status"
    },
    {
        accessorKey: "",
        header: "Action",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "View", onOptionSelected: () => console.log(), icon: "carbon:view", theme: 'secondary' },
                    { optionName: "Edit", onOptionSelected: () => console.log(), icon: "basil:edit-outline", theme: 'secondary' },
                    { optionName: `${"Approve"}`, onOptionSelected: () => console.log(), icon: "simple-line-icons:check", theme: 'secondary' },
                    { optionName: "Apply Discount", onOptionSelected: () => console.log(), icon: "tdesign:discount", theme: 'secondary' },
                ]
            }
        />
    }

]

type PolicyTypes = {
    data: IPolicyDTO[]
}
function policytable({ data }: PolicyTypes) {
    return (
        <div>
            <DataTable
                sortableColumns={['number']}
                columns={columns}
                data={data}
                filterable="number"
                actionName='New Policy'
                actionOptions={{
                    asLink: true,
                    link: "/underwriting/policy-underwriting"
                }}
            />
        </div>
    )
}

export default policytable