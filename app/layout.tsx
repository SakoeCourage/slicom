"use client"
import Sidebar from './sidebar'
import './globals.css'
import 'simplebar-react/dist/simplebar.min.css';
import Nprogressprovider from './providers/Nprogressprovider'
import Header from './header';
import { Breadcrumbserviceprovider } from './providers/Breadcrumbserviceprovider';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex overflow-hidden'>
        <Nprogressprovider>
          {/* Sidebar starts here */}
          <Sidebar toggleSidebar={() => void (0)} />

          {/* Main  section here */}
          <main className=' flex flex-col basis-full'>
            {/* Main  section header */}
            <Header />

            <section className='h-[calc(100vh-var(--header-height))] bg-gray-50/60 pb-4 overflow-y-scroll overflow-x-hidden'>
              <Breadcrumbserviceprovider>
                {children}
              </Breadcrumbserviceprovider>
            </section>
          </main>

        </Nprogressprovider>
      </body>
    </html>
  )
}
