import React from 'react'
import ReactApexChart, { Props as apexProps } from 'react-apexcharts'
import dynamic from 'next/dynamic'
import { formatcurrency } from 'app/app/lib/utils';

function statschart() {
    const state: apexProps = {
        series: [400, 430, 448],
        
        options: {
            labels: ['Comprehensive', 'Third Party', 'Fire and Theft'],
            legend: {
                show: true,
                position: "bottom",
            },
            dataLabels: {
                enabled: false,
            },
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: "100%"
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
        
        },
        colors: ['#678AE2', '#9262C9', '#53CEC1'],
        dataLabels: {
            enabled: false
        },
   

    }

    return (
        <div className='w-full md:col-span-2 ' id='chart'>
            <ReactApexChart
                className="w-full bar-chart p-5"
                options={state.options}
                series={state.series} type="donut"
                height={200}
            />
        </div>
    )
}

export default statschart