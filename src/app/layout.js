import './globals.css'
import { Ubuntu } from 'next/font/google'


const ubuntu = Ubuntu({ subsets: ['latin'], weight : '300' })

export const metadata = {
  title: 'Laper',
  description: 'Laper WebApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='box-border' >
      <body className={` container sm:mx-auto px-2 font-[${ubuntu}] `}>
        {children}
      </body>
    </html>
  )
}
