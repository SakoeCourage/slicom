"use client"
import Sidebar from './sidebar'
import './globals.css'
import 'simplebar-react/dist/simplebar.min.css';
import Nprogressprovider from './providers/Nprogressprovider'
import Header from './header';
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
          <main className=' flex flex-col w-full'>
            {/* Main  section header */}
            <Header />
            
            <section className='h-[calc(100vh-var(--header-height))] bg-[var(--primary-bg-gray)] pb-4 overflow-y-scroll overflow-x-hidden'>
              {children}
            </section>
          </main>
        
        </Nprogressprovider>
      </body>
    </html>
  )
}
