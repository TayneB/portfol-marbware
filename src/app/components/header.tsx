'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  let [selectedHome, setSelectedHome] = useState('true')
  let [selectedProj1, setSelectedProj1] = useState('right')
  let [selectedProj2, setSelectedProj2] = useState('right')
  let [selectedProj3, setSelectedProj3] = useState('right')
  let [selectedAbout, setSelectedAbout] = useState('right')
  let [checker, setChecker] = useState(0)
  let path = usePathname()
  console.log(1)
  if (checker === 0) {
    switch (path) {
      case '/project1':
        setSelectedHome('left')
        setSelectedProj1('true')
        setSelectedProj2('right')
        setSelectedProj3('right')
        setSelectedAbout('right')
        setChecker(1)
        break
      case '/project2':
        setSelectedHome('left')
        setSelectedProj1('left')
        setSelectedProj2('true')
        setSelectedProj3('right')
        setSelectedAbout('right')
        setChecker(1)
        break
      case '/project3':
        setSelectedHome('left')
        setSelectedProj1('left')
        setSelectedProj2('left')
        setSelectedProj3('true')
        setSelectedAbout('right')
        setChecker(1)
        break
      case '/about':
        setSelectedHome('left')
        setSelectedProj1('left')
        setSelectedProj2('left')
        setSelectedProj3('left')
        setSelectedAbout('true')
        setChecker(1)
        break
      default:
        setSelectedHome('true')
        setSelectedProj1('right')
        setSelectedProj2('right')
        setSelectedProj3('right')
        setSelectedAbout('right')
        setChecker(1)
    }
  }

  function handleClickHome() {
    setSelectedHome('true')
    setSelectedProj1('right')
    setSelectedProj2('right')
    setSelectedProj3('right')
    setSelectedAbout('right')
  }
  function handleClick1() {
    setSelectedHome('left')
    setSelectedProj1('true')
    setSelectedProj2('right')
    setSelectedProj3('right')
    setSelectedAbout('right')
  }
  function handleClick2() {
    setSelectedHome('left')
    setSelectedProj1('left')
    setSelectedProj2('true')
    setSelectedProj3('right')
    setSelectedAbout('right')
  }
  function handleClick3() {
    setSelectedHome('left')
    setSelectedProj1('left')
    setSelectedProj2('left')
    setSelectedProj3('true')
    setSelectedAbout('right')
  }
  function handleClickAbout() {
    setSelectedHome('left')
    setSelectedProj1('left')
    setSelectedProj2('left')
    setSelectedProj3('left')
    setSelectedAbout('true')
  }
  return (
    <nav className={`nav-bar`}>
      <ul>
        <li>
          <Link
            href="/"
            className={`${selectedHome}`}
            onClick={handleClickHome}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/project1"
            className={`${selectedProj1}`}
            onClick={handleClick1}
          >
            project 1
          </Link>
        </li>
        <li>
          <Link
            href="/project2"
            className={`${selectedProj2}`}
            onClick={handleClick2}
          >
            project 2
          </Link>
        </li>
        <li>
          <Link
            href="/project3"
            className={`${selectedProj3}`}
            onClick={handleClick3}
          >
            project 3
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${selectedAbout}`}
            onClick={handleClickAbout}
          >
            about
          </Link>
        </li>
      </ul>
    </nav>
  )
}
