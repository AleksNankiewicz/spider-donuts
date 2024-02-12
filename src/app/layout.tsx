import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/templates/Navbar'

import Footer from '@/components/templates/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pajączkarnia',
  description: 'Twój ulubiony sklep z pająkami!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-screen-2xl mx-auto">
          <Navbar />

          <div className="min-h-screen">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
