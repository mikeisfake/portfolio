import * as React from "react"
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <div id="hero">
        <div className="title">
          <h1>i'm mike</h1>
          <h2>& I love to make the web beautiful</h2>
        </div>
        <div className="tools">
          <h2>technologies</h2>
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-sass-original colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-redux-original colored"></i>
          <i class="devicon-gatsby-plain colored"></i>
          <i class="devicon-ruby-plain colored"></i>
          <i class="devicon-rails-plain colored"></i>

          <h2>tools</h2>
          <i class="devicon-atom-original colored"></i>
          <i class="devicon-github-original"></i>
          <i class="devicon-slack-plain colored"></i>
          <i class="devicon-photoshop-plain colored"></i>
          <i class="devicon-npm-original-wordmark colored"></i>
          
        </div>
      </div>
    </Layout>
  )
}

export default Index
