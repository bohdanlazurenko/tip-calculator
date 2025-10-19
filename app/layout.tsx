import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Tip Calculator',
  description: 'Calculate tips and split bills easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-very-light-grayish-cyan min-h-screen flex items-center justify-center p-4`}>
        {children}
      </body>
    </html>
  )
}