import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

const calSans = LocalFont({
  src: "../public/font/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: 'Gede Krisna',
  description: 'Informatics Students, Software Engineer, Junior Mobile Dev, Web Pentester',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={`bg-black`}>{children}</body>
    </html>
  )
}
