"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { customerList, customerScheme } from '../customerstypedef'
import DataTable from 'app/app/components/datatable/datatable'
import Newcustomerform from './newcustomerform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'
import Datepicker from 'app/app/components/form-components/datepicker'
export const columns: ColumnDef<customerScheme>[] = [
    {
        accessorKey: "number",
        header: "Number",
    },
    {
        accessorKey: "customerFullName",
        header: "Customer Full Name",
    },
    {
        accessorKey: "customerType",
        header: "Customer Type",
    },
    {
        accessorKey: "identitificationType",
        header: "Identification Type",
    },
    {
        accessorKey: "identitificationNumber",
        header: "Identification Number",
    },
    {
        accessorKey: "",
        header: "Actions",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "Edit", onOptionSelected: () => console.log(row.original.customerFullName), icon: "basil:edit-outline", theme: 'success' },
                    { optionName: "Delete", onOptionSelected: () => console.log(row.original.customerFullName), icon: "mdi-light:delete", theme: 'danger' },
                ]
            }
        />
    },

]

function customerstable() {
    const [showNewCustomerForm, setShowNewCustomerForm] = useState(false)
    return (
        <div>
            <Modal size="xl" open={showNewCustomerForm} closeModal={() => setShowNewCustomerForm(false)} title='Add Customer'>
                <Newcustomerform />
            </Modal>
            <DataTable
                sortableColumns={['customerFullName']}
                columns={columns}
                data={customerList}
                filterable="customerFullName"
                actionName='New Customer'
                onAction={() => setShowNewCustomerForm(true)}
            />
        </div>
    )
}

export default customerstable