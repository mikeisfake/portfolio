import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from '../components/Layout'
import { Emoji } from '../components/Emoji'

const Index = () => {
  return (
    <Layout>
      <div id="hero">
        <div className="title">
          <h1>
            <Emoji description="waving hand" hex="&#x1F44B;&#x1F3FE;" className="wave" />i'm mike</h1>
          <h2>& I make beautiful things for the web.</h2>
        </div>
        <span className="cta">
          <AniLink cover bg="#2f968a" direction="right" to='/contact' className="pulse">contact me</AniLink>
        </span>

      </div>

    </Layout>
  )
}

export default Index
