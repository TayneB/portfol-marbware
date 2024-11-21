import React from 'react'
import Image from 'next/image'

const Proj2Page: React.FC = () => {
  return (
    <div className="page-content">
      <span className="page-content-grid">
        <h1 className="timeParses-h1">
          Time <br /> Parses
        </h1>
        <Image
          className="timeParses-image"
          alt="time parses website layout"
          src="/TimeParses.png"
          width={580 / 2}
          height={571 / 2}
        />
        <p className="timeParses-p">
          The time parses app is fullstack built with javascript utilising react
          and typescript. It integrates with the third party GraphQL
          Warcraftlogs Public Api that players use to record their performance
          during encounters in the massively multiplayer online roleplaying game
          Game World of Warcraft. By inputing a characters name, server, region
          and specified encounter, the app allows user to search for the best
          parses to compare against their own with a focus on cotrolling the
          data for encounter duration.
        </p>
      </span>
    </div>
  )
}

export default Proj2Page
