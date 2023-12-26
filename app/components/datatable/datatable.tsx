"use client"
import React from 'react'
import { DataTablePagination } from 'app/app/components/datatable/partials/tablepagination'
import { Button } from '../form-components/button'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, VisibilityState, ColumnFiltersState, SortingState } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "app/app/components/datatable/partials/table"
import { ArrowUpDown } from "lucide-react"
import TableFilterOptions from './partials/tablefilteroptions'


export type IActionOptions =  {
    asLink?: boolean,
    link: string ,
}

interface DataTableProps<TData, TValue, K extends keyof TData> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    filterable?: K;
    sortableColumns?: (keyof TData)[];
    actionName?: string,
    onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    actionOptions?: IActionOptions,
    enablePaginator?: boolean
    enableFilterOptions?: boolean,
    heading?: string
}

/**
 * 
 * @param columns - Describes table colums
 * @param data - Describes table data
 * @param actionName - Describes the placeholder for table action button
 * @param onAction - Action for when action button is clicked 
 * @param actionOptions - Set of options to be treated to the action button 
 * @param enableFilterOptions - Show table filter section ie. top of the table 
 * @param enablePaginator - Show table pagination section ie. buttom of the table 
 * @param heading - Describes table heading text
 * @param sortableColumns - Array of columns to be sortable
 * @param filterable - Column to be filter from on search input
 * @returns 
 */

function DataTable<TData, TValue, K extends keyof TData>({
    columns,
    data,
    filterable,
    sortableColumns = [],
    actionName,
    onAction,
    enableFilterOptions = true,
    enablePaginator = true,
    heading,
    actionOptions = {
        asLink: false,
        link: ""
    },
}: DataTableProps<TData, TValue, K>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        },
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
    })

    return (
        <div className="rounded-md border bg-white  ">
            {heading && <nav className=' px-5  flex items-center !gap-0 text-gray-600 font-semibold py-2 border-b w-full '>
                <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                <nav className=''>{heading}</nav>
            </nav>}
            {enableFilterOptions && <TableFilterOptions actionOptions={actionOptions} filterable={filterable as string} actionName={actionName} table={table} onAction={onAction} />}
            <Table >
                <TableHeader className=' '>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead className='  text-gray-600 font-medium  whitespace-nowrap flex-nowrap' key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        {sortableColumns.map(str => str.toString().toLowerCase()).includes(header.column.columnDef.header?.toString().toLocaleLowerCase().replace(/\s/g, ''))
                                            && <button
                                                className='inline-flex items-center justify-center'
                                                onClick={() => header.column.toggleSorting(header.column.getIsSorted() == "asc")}
                                            >
                                                <ArrowUpDown className="ml-1 whitespace-nowrap inline my-auto h-3 w-4" />
                                            </button>}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody >
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className=' text-gray-500/90 font-medium table-tr'
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"} >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell className=' min-w-max' key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {enablePaginator && <DataTablePagination table={table} />}
        </div>
    )
}


export default DataTable