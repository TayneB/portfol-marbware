'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  let [selectedHome, setSelectedHome] = useState('trueLeft')
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
        setSelectedHome('mostLeft')
        setSelectedProj1('true')
        setSelectedProj2('right')
        setSelectedProj3('right')
        setSelectedAbout('right')
        setChecker(1)
        break
      case '/project2':
        setSelectedHome('mostLeft')
        setSelectedProj1('left')
        setSelectedProj2('true')
        setSelectedProj3('right')
        setSelectedAbout('right')
        setChecker(1)
        break
      case '/project3':
        setSelectedHome('mostLeft')
        setSelectedProj1('left')
        setSelectedProj2('left')
        setSelectedProj3('true')
        setSelectedAbout('right')
        setChecker(1)
        break
      case '/about':
        setSelectedHome('mostLeft')
        setSelectedProj1('left')
        setSelectedProj2('left')
        setSelectedProj3('left')
        setSelectedAbout('true')
        setChecker(1)
        break
      default:
        setSelectedHome('trueLeft')
        setSelectedProj1('right')
        setSelectedProj2('right')
        setSelectedProj3('right')
        setSelectedAbout('right')
        setChecker(1)
    }
  }

  function handleClickHome() {
    setSelectedHome('trueLeft')
    setSelectedProj1('right')
    setSelectedProj2('right')
    setSelectedProj3('right')
    setSelectedAbout('right')
  }
  function handleClick1() {
    setSelectedHome('mostLeft')
    setSelectedProj1('true')
    setSelectedProj2('right')
    setSelectedProj3('right')
    setSelectedAbout('right')
  }
  function handleClick2() {
    setSelectedHome('mostLeft')
    setSelectedProj1('left')
    setSelectedProj2('true')
    setSelectedProj3('right')
    setSelectedAbout('right')
  }
  function handleClick3() {
    setSelectedHome('mostLeft')
    setSelectedProj1('left')
    setSelectedProj2('left')
    setSelectedProj3('true')
    setSelectedAbout('right')
  }
  function handleClickAbout() {
    setSelectedHome('mostLeft')
    setSelectedProj1('left')
    setSelectedProj2('left')
    setSelectedProj3('left')
    setSelectedAbout('true')
  }
  return (
    <nav className={`nav-bar`}>
      <ul>
        <li className={`${selectedHome}`}>
          <Link href="/" onClick={handleClickHome}>
            I AM
          </Link>
        </li>
        <li className={`${selectedProj1}`}>
          <Link href="/project1" onClick={handleClick1}>
            DUCK FINDERZ
          </Link>
        </li>
        <li className={`${selectedProj2}`}>
          <Link href="/project2" onClick={handleClick2}>
            TIME PARSES
          </Link>
        </li>
        <li className={`${selectedProj3}`}>
          <Link href="/project3" onClick={handleClick3}>
            YETAN
          </Link>
        </li>
        <li className={`${selectedAbout}`}>
          <Link href="/about" onClick={handleClickAbout}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  )
}
