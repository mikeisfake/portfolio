import React from 'react'
import {Helmet} from 'react-helmet'

import {Link} from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import { AboutText } from '../components/AboutText'

const About = () => {

  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <div id="about">
        <section>
          <h1><StaticImage src='../images/animoji.png' alt='animoji protrait' /> a bit about me</h1>
          <AboutText />

          <div className="tools">
            <h2>languages/frameworks I have experience in so far.</h2>
            <ul>
              <li><i class="devicon-html5-plain"></i> HTML5</li>
              <li><i class="devicon-css3-plain"></i> CSS3</li>
              <li><i class="devicon-javascript-plain"></i> Javascript</li>
              <li><i class="devicon-ruby-plain"></i> Ruby</li>
              <li><i class="devicon-rails-plain"></i> Ruby on Rails</li>
              <li><i class="devicon-react-original"></i> React</li>
              <li><i class="devicon-sass-original"></i> Sass</li>
              <li><i class="devicon-redux-original"></i> Redux</li>
              <li><i class="devicon-gatsby-plain"></i> Gatsby</li>
            </ul>
            <h2>preferred tools of the trade.</h2>
            <ul>
              <li><i class="devicon-atom-original"></i> Atom</li>
              <li><i class="devicon-photoshop-plain"></i> Photoshop</li>
              <li><i class="devicon-git-plain"></i> Git</li>
              <li><i class="devicon-github-original"></i> GitHub</li>
              <li><i class="devicon-chrome-plain"></i> Chrome</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
