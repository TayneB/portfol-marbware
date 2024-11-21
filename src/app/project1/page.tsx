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
        outcome was a total success, the chrome extension was published and
        approved by the chrome web store and can be downloaded here.
        https://chromewebstore.google.com/detail/duck-collection/enlefeepfkpjdifepemfoojfcbhomnp
        m The site to sign up for a username and view ducks can be found here
        https://duck-finderz.pushed.nz/ The Loom video website example can be
        found here
        https://www.loom.com/share/347847eb94ef4a2da0bc03813e62884a?sid=1b5dc7cb-416e-45
        e2-97a9-c64f132134e8 The github repo for the extension and its continued
        development can be found here
        https://github.com/TayneB/duck-collector-extension The recording of the
        final presentation and overview of the project can be found here
        https://youtu.be/dWgESJXzoQo
      </p>
    </div>
  )
}

export default Proj1Page
