import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from '@/comps/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laper',
  description: 'Laper WebApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />

        {children}
      </body>
    </html>
  )
}
