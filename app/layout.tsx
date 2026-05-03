import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Dispute Evidence Builder — Win Chargebacks Automatically',
  description: 'Auto-generate winning Stripe chargeback evidence packages. Analyze transaction data and produce professional dispute evidence in minutes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ab944f62-a1fd-499a-985c-cf7595860ce9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
