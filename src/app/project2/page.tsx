import React from 'react'

const Proj2Page: React.FC = () => {
  return (
    <div className="page-content">
      <h1>Time Parses</h1>
      <p>
        The time parses app is fullstack built with javascript utilising react
        and typescript. It integrates with the third party GraphQL Warcraftlogs
        Public Api that players use to record their performance during
        encounters in the massively multiplayer online roleplaying game Game
        World of Warcraft. By inputing a characters name, server, region and
        specified encounter, the app allows user to search for the best parses
        to compare against their own with a focus on cotrolling the data for
        encounter duration.
      </p>
    </div>
  )
}

export default Proj2Page
