import { Footer, Navbar } from '@/components'
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head><link rel="shortcut icon" href="/favicon.ico" /></Head>
      <body className={"relative"}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
