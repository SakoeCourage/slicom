"use client"
import Sidebar from './sidebar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex'>
        <Sidebar toggleSidebar={() => void (0)} />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
