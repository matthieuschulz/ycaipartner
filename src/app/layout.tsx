import type { Metadata } from 'next'
import '../index.css'
import { Providers } from './providers'
import { inter, robotoMono } from './fonts'
import { cn } from '@/lib/utils'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'YC AI Partner',
  description: 'YC AI Partner Office Hours - Simulation of YC partner conversations for educational purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      inter.variable,
      robotoMono.variable
    )}>
      <body className={cn('font-sans antialiased')}>
        <Providers>
          {children}
        </Providers>
        <Script 
          src="https://cdn.gpteng.co/gptengineer.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
} 