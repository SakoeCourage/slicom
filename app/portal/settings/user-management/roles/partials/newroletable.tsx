"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IroleScheme, roleList } from '../rolestypedef'
import DataTable from 'app/app/components/datatable/datatable'
import Newroleform from './newroleform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'

export const columns: ColumnDef<IroleScheme>[] = [
    {
        accessorKey: "name",
        header: "Role Name",

    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },

    {
        accessorKey: "action",
        header: "Actions",
        cell: ({ row }) => <Moreoptions
            options={
                [
                    { optionName: "Edit", onOptionSelected: () => console.log(row.original.name), icon: "basil:edit-outline", theme: 'success' },
                    { optionName: "Delete", onOptionSelected: () => console.log(row.original.name), icon: "mdi-light:delete", theme: 'danger' },
                ]
            } />
    },

]

function newroletable() {
    const [showNewRoleForm, setShowNewRoleForm] = useState(false)
    return (
        <div>
            <Modal open={showNewRoleForm} closeModal={() => setShowNewRoleForm(false)} title='Add Role'>
                <Newroleform />
            </Modal>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={roleList}
                filterable="name"
                actionName='Add Role'
                onAction={() => setShowNewRoleForm(true)}
            />
        </div>
    )
}

export default newroletable