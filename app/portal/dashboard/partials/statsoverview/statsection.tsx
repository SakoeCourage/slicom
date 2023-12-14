"use client"
import React from 'react'
import Statscard from './statscard'
function statsection() {
    return (
        <div className=' '>
            <nav className=' font-bold text-base text-gray-500 my-5'>
                Statistic Overview
            </nav>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                <Statscard
                    total={35009}
                    title='Total Insured'
                    series={[400, 44]}
                    colors={['#22c55e', '#64748b']}
                    themecolor='#22c55e'
                    labels={['Individual', "Institution"]}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="ipSProtect0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M6 9.256L24.009 4L42 9.256v10.778A26.316 26.316 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z" /><path stroke="#000" stroke-linecap="round" d="m15 23l7 7l12-12" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSProtect0)" /></svg>}

                />
                <Statscard
                    total={25}
                    title='Total Policies'
                    series={[10, 15]}
                    colors={['#eab308', '#64748b']}
                    themecolor='#ca8a04'
                    labels={['Active', "Pending"]}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 1.575-.413 3.063T18.4 17l-2.95-2.95q.275-.475.413-.987T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16q.525 0 1.038-.137T14 15.45l3.225 3.2q-1.05 1.225-2.363 2.1T12 22m0-8q-.825 0-1.412-.587T10 12q0-.825.588-1.412T12 10q.825 0 1.413.588T14 12q0 .825-.587 1.413T12 14" /></svg>
                    }

                />
                <Statscard
                    total={2}
                    title='Expiring Policies(Today)'
                    series={[5, 1]}
                    colors={['#0ea5e9', '#64748b']}
                    themecolor='#0284c7'
                    labels={['Tomorrow', "In a Month"]}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8.175.002a8 8 0 1 0 2.309 15.603a.75.75 0 0 0-.466-1.426a6.5 6.5 0 1 1 3.996-8.646a.75.75 0 0 0 1.388-.569A8 8 0 0 0 8.175.002M8.75 3.75a.75.75 0 0 0-1.5 0v3.94L5.216 9.723a.75.75 0 1 0 1.06 1.06L8.53 8.53l.22-.22zM15 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/></svg>}

                />
            </div>
        </div>
    )
}

export default statsection