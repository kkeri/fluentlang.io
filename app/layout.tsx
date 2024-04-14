import type { Metadata } from "next"
import { inter } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fluent",
  description: "The Fluent programming language",
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen text-gray-200`}>{children}</body>
    </html>
  )
}
