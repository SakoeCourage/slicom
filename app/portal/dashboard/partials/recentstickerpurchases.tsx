"use client"
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import DataTable from '@/components/datatable/datatable'
import { formatcurrency } from 'app/app/lib/utils'

type Order = {
    orderID: string,
    customerName: string,
    quantity: number,
    orderDate: string,
    status: "paid" | "pending",
    orderTotal: number
}

const orders: Order[] = [
    {
        orderID: "STACO1700057815408",
        customerName: "Staco Insurance company Limited",
        quantity: 100,
        orderDate: "15-Nov-2023",
        status: "paid",
        orderTotal: 2332,
    },
    {
        orderID: "ABC123456789",
        customerName: "John Doe",
        quantity: 50,
        orderDate: "16-Nov-2023",
        status: "pending",
        orderTotal: 750,
    },
    {
        orderID: "XYZ987654321",
        customerName: "Jane Smith",
        quantity: 75,
        orderDate: "17-Nov-2023",
        status: "paid",
        orderTotal: 1125,
    },
    {
        orderID: "DEF567890123",
        customerName: "Acme Corporation",
        quantity: 200,
        orderDate: "18-Nov-2023",
        status: "pending",
        orderTotal: 3000,
    },
    {
        orderID: "GHI456789012",
        customerName: "Tech Solutions Ltd",
        quantity: 30,
        orderDate: "19-Nov-2023",
        status: "paid",
        orderTotal: 450,
    },
    {
        orderID: "JKL234567890",
        customerName: "Happy Customers Inc",
        quantity: 80,
        orderDate: "20-Nov-2023",
        status: "pending",
        orderTotal: 1200,
    },
];


function Statusindicator({status}: {status: "paid" | "pending"}): React.JSX.Element {
    return <nav>
        {status == "paid" ? <nav className=" bg-green-200 whitespace-nowrap text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> paid</nav> :
            <nav className=" bg-red-200 whitespace-nowrap text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> pending</nav>
        }
    </nav>
}


export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "orderID",
        header: "Order ID",
    },
    {
        accessorKey: "customerName",
        header: "Customer name",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "orderDate",
        header: "Order Date",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row})=> <Statusindicator status={row.original.status}/>,
      
        
    },
    {
        accessorKey: "orderTotal",
        header: "Order Total",
        cell: ({ row }) => `${formatcurrency(row.original.orderTotal)}`
    },

]

export default function recentstickerpurchases() {


    return (
        <div className=" basis-full lg:basis-[70%]">
            <DataTable
                enableFilterOptions={false}
                enablePaginator={false}
                heading='Recent Sticker Purchases'
                columns={columns} data={orders} />

        </div>
    )
}