import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

import DataTable from 'app/app/components/datatable/datatable'
import { IclaimDTO, claimsList } from '../claimstypedef'

export const columns: ColumnDef<IclaimDTO>[] = [
  {
    accessorKey: "claimNumber",
    header: "Claim#"
  },
  {
    accessorKey: "registerationDate",
    header: "Registeration Date"
  },
  {
    accessorKey: "carRegisteration",
    header: "Car Registeration"
  }

]
function claimtable() {
  return (
    <div>
      <DataTable
        sortableColumns={['carRegisteration']}
        columns={columns}
        data={claimsList}
        filterable="invoiceNumber"
        actionName='Add Claim'
        actionOptions={{
          asLink: true,
          link: "claims/new"
        }}
      />
    </div>
  )
}

export default claimtable