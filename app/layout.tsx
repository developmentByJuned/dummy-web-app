import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dummy Web App',
  description: 'This application is for test purpose.',
  icons: "assets/images/svg/logo.svg"
}

// replace font family with monstreatt
/**
 * RootLayout component is the main layout for the entire application.
 * It wraps the content with common HTML and provides a consistent structure for all pages.
 *
 * @param {Object} props - The props for the RootLayout component.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The JSX element representing the RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} bg-black text-white font-mono`}>
          <Header />
          {children}
        </body>
      </html>
    </>
  )
}
