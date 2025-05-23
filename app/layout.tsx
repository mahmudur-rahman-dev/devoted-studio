import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Devoted Studio - Interior Design & Architecture',
  description: 'Professional interior design and architectural consultancy services in Bangladesh. Residential and commercial projects with quality materials and custom designs.',
  keywords: 'interior design, architecture, Bangladesh, residential, commercial, devoted design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 