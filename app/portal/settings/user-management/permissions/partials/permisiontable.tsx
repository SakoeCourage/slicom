"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IpermissionScheme, permissionsList } from '../permissiontypedef'
import DataTable from 'app/app/components/datatable/datatable'
import Newpermissionform from './newpermissionform'
import Modal from 'app/app/components/ui/modal'
import Moreoptions from 'app/app/components/datatable/moreoptions'

export const columns: ColumnDef<IpermissionScheme>[] = [
    {
        accessorKey: "name",
        header: "Permission Name",

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

function newpermissiontable() {
    const [showPermissionForm, setShowPermissionForm] = useState(false)
    return (
        <div>
            <Modal open={showPermissionForm} closeModal={() => setShowPermissionForm(false)} title='Add Permission'>
                <Newpermissionform />
            </Modal>
            <DataTable
                sortableColumns={['name']}
                columns={columns}
                data={permissionsList}
                filterable="name"
                actionName='Add Permission'
                onAction={() => setShowPermissionForm(true)}
            />
        </div>
    )
}

export default newpermissiontable