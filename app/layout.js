import { Host_Grotesk } from 'next/font/google'
import './globals.css'

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-host-grotesk',
})

export const metadata = {
  title: 'Dennis — Portfolio',
  description: 'Personal portfolio and blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hostGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
