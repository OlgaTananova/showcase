import '../styles/global.scss'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Car Showcase',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='app'>{children}</body>
    </html>
  )
}
