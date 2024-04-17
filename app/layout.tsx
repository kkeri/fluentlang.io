import type { Metadata } from "next"
import { inter } from "./fonts"
import "./globals.css"
import { NavBar } from "../components/NavBar"

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
      <body className={`${inter.className} w-screen bg-gray-950 text-gray-200`}>

        <div className='bg-amber-600 text-white white p-4 text-center'>
          <h2 className='hidden'>
            Disclaimer
          </h2>
          Fluent is under development and is not ready for use.
          The website is gradually filled with content as the project moves forward.
        </div>

        <NavBar />

        <div>
          {children}
        </div>

      </body>
    </html>
  )
}
