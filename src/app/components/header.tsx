'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/project1">project 1</Link>
        </li>
        <li>
          <Link href="/project2">project 2</Link>
        </li>
        <li>
          <Link href="/project3">project 3</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  )
}
