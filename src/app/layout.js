import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
