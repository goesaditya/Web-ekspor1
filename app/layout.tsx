import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Indo Blitz Agriculture – Premium Rice Husk Exporter from Pati, Central Java",
  description:
    "Indo Blitz Agriculture adalah pemasok dan eksportir sekam padi premium dari Pati, Jawa Tengah. Kami menyediakan Raw Rice Husk, Rice Husk Pellets, dan Husk Ash untuk pasar global.",
  keywords:
    "rice husk exporter, sekam padi, Indo Blitz Agriculture, Pati, Jawa Tengah, rice husk pellets, husk ash, arang sekam",
  openGraph: {
    title: "Indo Blitz Agriculture – Premium Rice Husk Exporter",
    description: "Global Supply of Premium Rice Husk from Pati, Central Java",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable} scroll-smooth bg-white`}>
      <body className="font-body antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
