"use client"
import Sidebar from './sidebar'

import Header from './header';
import { Breadcrumbserviceprovider } from '../providers/Breadcrumbserviceprovider';

export default function portalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex overflow-hidden'>
      {/* Sidebar starts here */}
      <Sidebar toggleSidebar={() => void (0)} />
      {/* Main  section here */}
      <main className=' flex flex-col w-full md:w-[calc(100vw-var(--sidebar-width))]'>
        {/* Main  section header */}
        <Header />
        <section id='outlet' className='h-[calc(100vh-var(--header-height))] bg-gray-50/60 pb-4 overflow-y-scroll overflow-x-hidden '>
          <Breadcrumbserviceprovider>
            {children}
          </Breadcrumbserviceprovider>
        </section>
      </main>
    </main>
  )
}
