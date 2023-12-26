
import './globals.css'
import 'simplebar-react/dist/simplebar.min.css';
import Nprogressprovider from './providers/Nprogressprovider';
import Toastserviceprovider from './providers/Toastserviceprovider';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='overflow-hidden w-full'>
                <Nprogressprovider>
                    <Toastserviceprovider>
                        {children}
                    </Toastserviceprovider>
                </Nprogressprovider>
            </body>
        </html>
    )
}