import React from "react"

import type { Metadata }   from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mateus Hamade | Portfólio",
  description: "Portfólio de Mateus Hamade, desenvolvedor Full-Stack e mestrando em Ciência da Computação.",
  icons: {
    icon: "./binary.png",
  },
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="pt-BR"
      data-theme="dark"
      className={`${inter.variable}`}
    >
      <body className="font-nunito">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
