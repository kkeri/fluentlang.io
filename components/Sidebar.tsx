import Link from "next/link"

export function Sidebar () {
  return (
    <nav className='p-4'>
      <ul className='flex flex-col gap-4'>
        <Link href='.'>Home</Link>
        <Link href='.'>About</Link>
        <Link href='.'>Contact</Link>
      </ul>
    </nav>
  )
}
