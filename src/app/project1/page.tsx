import React from 'react'
import DuckFinderzVideo from '../components/duckFinderzVideoEmbed'

const Proj1Page: React.FC = () => {
  return (
    <div className="page-content">
      <h1 className="project1-h1">Duck Finderz</h1>
      <DuckFinderzVideo />
      <p className="project1-p">
        For our final project at Dev Academy Aotearoa, I pitched an idea that
        was voted the top choice for development. The concept was to create an
        interactive and entertaining platform centered around &#34;duck
        collecting&#34;. This project aimed to combine gamification with web
        interaction, and it was implemented in two main components: <br></br>
        <p className="project1-p-ls">
          <br></br>1. Interactive Website: A user-friendly site where users can
          sign up for an account, receive a unique username, and view the
          collection of ducks they&apos;ve gathered. This component served as
          the hub for managing user progress and engagement. <br></br>
          <br></br> 2. Chrome Extension: I led the development of this feature,
          which allows users to sign in with their account and experience an
          immersive &#34;duck hunt&#34; across the web. The extension inserts
          collectible ducks into various web pages, which users can click to add
          to their collection. <br></br>
          <br></br>{' '}
        </p>
        The project was a resounding success, delivering both functionality and
        fun. It demonstrated our ability to integrate frontend development, user
        authentication, and creative design to create a seamless and engaging
        user experience. <br></br> <br></br>{' '}
        <a
          target="_blank"
          href="https://chromewebstore.google.com/detail/duck-collection/enlefeepfkpjdifepemfoojfcbhomnpm"
        >
          - The chrome extension is published on the chrome web store -
        </a>{' '}
        <br></br> <br></br>
        <a href="">- NO LONGER HOSTED | Duck Finderz Home -</a> <br></br>
        <br></br>
        <a
          target="_blank"
          href="https://github.com/TayneB/duck-collector-extension"
        >
          - The github repo for the extension and its continued development -
        </a>
        <br></br>
        <br></br>
        <a target="_blank" href="https://youtu.be/dWgESJXzoQo">
          - The Youtube recording of Duck Finderz presentation -
        </a>
      </p>
    </div>
  )
}

export default Proj1Page
