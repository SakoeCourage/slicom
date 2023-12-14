"use client"
import React from 'react'
import { formatnumber } from 'app/app/lib/utils'
import ReactApexChart, { Props as apexProps } from 'react-apexcharts'

const colors_sets: Array<string> = ['#22c55e', '#64748b', '#fde047', '#92400e', '#15803d', '#312e81', '#fda4af', '#1e293b', '#84cc16', '#312e81']


interface Iparam {
    series: [number, number],
    labels: [string, string],
    colors: [string, string],
    themecolor: string,
    title: string,
    icon: React.ReactNode
    total: number
}

function statscard(props: Iparam) {
    const state: apexProps = {
        series: [...props.series],
        options: {
            labels: [...props.labels],
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            chart: {
                type: 'donut',
            },
            colors: [...props.colors],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            }]
        },


    };
    return (
        <div className='shadow-c-md  flex flex-col w-full max-w-sm md:max-w-none mx-auto  h-full rounded aspect-square bg-white'>
            <nav className=' basis-[30%] overflow-hidden grid grid-cols-4 gap-3 p-5 border-b'>
                <nav className={`aspect-square shadow rounded text-white flex items-center justify-center `} style={{ backgroundColor: props.themecolor,opacity:0.7 }}>
                    {props.icon}
                </nav>
                <nav className=' flex flex-col justify-between col-span-3'>
                    <nav className=' text-gray-600 font-bold text-base whitespace-nowrap truncate'>
                        {props.title}
                    </nav>
                    <nav className=' text-green-700 font-semibold text-xl'>
                        {formatnumber(props.total)}
                    </nav>
                </nav>
            </nav>
            <nav className='basis-[70%] flex items-center '>
                <div className=' flex items-center my-auto'>
                    <ReactApexChart options={state.options} series={state.series} type="donut" />
                </div>

                <div className=' w-[40%] flex flex-col '>
                    {props.labels.map((label, i) => {
                        return <nav key={i} className={`flex flex-col gap-1 pb-2 ${i == 0 ? 'border-b-2 pb-2' : 'pt-2'}`}>
                            <nav className=' font-semibold text-lg px-2 text-gray-600'>
                                {formatnumber(props.series[i])}
                            </nav>
                            <nav style={{ color: props.colors[i] }} className='font-bold text-sm  px-2 py-[0.10rem] w-max rounded-full '>
                                {label}
                            </nav>
                        </nav>
                    })}

                </div>

            </nav>
        </div>
    )
}

export default statscard