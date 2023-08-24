import '../styles/global.scss'
import type { Metadata } from 'next';
import {Navbar} from "@/components";
import {Footer} from "@/components";
export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='app'>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
