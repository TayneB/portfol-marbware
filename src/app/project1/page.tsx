import React from 'react'
import DuckFinderzVideo from '../components/duckFinderzVideoEmbed'

const Proj1Page: React.FC = () => {
  return (
    <div className="page-content">
      <h1 className="project1-h1">Duck Finderz</h1>
      <DuckFinderzVideo />
      <p className="project1-p">
        For our final project with Dev Academy Aotearoa, I pitched an idea which
        was voted on and decided as the direction for the final project. The
        idea was to create an interactive and entertaining website centered
        around collecting ducks from webpages. The project was implemented in
        two ways, the first is a site that lets you sign up for an account,
        receive a username and view the ducks you have collected. The second is
        a chrome extension which I was primarily responsible for that can be
        signed into and that inserts ducks into web pages that can then be
        clicked on to collect them for the associated username. The project
        outcome was a total success! <br></br> <br></br>{' '}
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
