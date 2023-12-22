"use client"
import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { IApiuserScheme, apiUsersList } from '../apiusertypedef'
import DataTable from 'app/app/components/datatable/datatable'
import Newapiuserform from './newapiuserform'
import Modal from 'app/app/components/ui/modal'
import { dateReformat } from 'app/app/lib/utils'
export const columns: ColumnDef<IApiuserScheme>[] = [
    {
        accessorKey: "username",
        header: "User Name",

    },
    {
        accessorKey: "institution",
        header: "Institution",
    },

    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({row})=> dateReformat(row.original.createdAt)

    },

]

function apiuserstable() {
    const [showNewApiUserForm, setShowNewApiUserForm] = useState(false)
    return (
        <div>
            <Modal size="xl" open={showNewApiUserForm} closeModal={() => setShowNewApiUserForm(false)} title='Add Api User'>
                <Newapiuserform />
            </Modal>
            <DataTable
                sortableColumns={['username']}
                columns={columns}
                data={apiUsersList}
                filterable="username"
                actionName='Add Api User'
                onAction={() => setShowNewApiUserForm(true)}
            />
        </div>
    )
}

export default apiuserstable