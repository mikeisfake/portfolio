import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <h1>About page</h1>
      <div className="tools">
        <h2>technologies</h2>
        <div>
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-sass-original colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-redux-original colored"></i>
          <i class="devicon-gatsby-plain colored"></i>
          <i class="devicon-ruby-plain colored"></i>
          <i class="devicon-rails-plain colored"></i>
        </div>

        <h2>tools</h2>
        <div>
          <i class="devicon-atom-original colored"></i>
          <i class="devicon-github-original"></i>
          <i class="devicon-npm-original-wordmark colored"></i>
          <i class="devicon-slack-plain"></i>
          <i class="devicon-photoshop-plain colored"></i>
        </div>

      </div>
    </Layout>
  )
}

export default About
