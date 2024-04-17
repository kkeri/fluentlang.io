import Link from "next/link"
import { ReactNode } from "react"
import FluentLogo from "./Logo"
import { headerFont } from "@/app/fonts"

export function NavBar () {
  return (
    <nav className={`${headerFont.className} text-lg flex flex-row flex-wrap
     items-center px-6 md:pr-24 py-4`}>
      <Link href='/' className='flex flex-row items-center'>
        <div className='w-8 h-8 m-2'>
          <FluentLogo />
        </div>
        <div className='font-bold'>
          Fluent
        </div>
      </Link>
      <div className='grow' />
      {/* <ul className='flex flex-row gap-8 flex-wrap p-4'>
        <NavItem href='/roadmap'>Roadmap</NavItem>
      </ul> */}
    </nav>
  )
}

function NavItem ({ children, href }: {
  children: ReactNode
  href: string
}) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}
