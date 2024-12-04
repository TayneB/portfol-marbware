import Image from 'next/image'
import Header from './components/header'
import Link from 'react'

export default function Home() {
  return (
    <div className="page-content">
      <h1 className="landing-h1">Tayne Bilyard</h1>
      <h2 className="landing-h2">
        Web Developer | Turning Ideas into Smiles with Code
      </h2>
      <p className="landing-p">
        I’m a passionate web developer dedicated to creating apps that
        entertain, engage, and bring joy. My journey started in the world of 3D
        fabrication, where I brought creative projects to life—ranging from
        custom modular electronic signs and mechanical display models to
        boutique electronic housings. Now, I’ve shifted gears to code,
        channeling my creativity and technical expertise into building digital
        experiences. I specialize in JavaScript, React, and TypeScript (for now)
        to craft apps that blend functionality with a touch of fun. With an
        optimistic outlook, a dash of cheeky humor, and a knack for innovative
        problem-solving, I strive to make the process enjoyable for everyone
        involved. Check out my projects above and see how I’ve turned clever
        ideas into delightful solutions!
      </p>
    </div>
  )
}
