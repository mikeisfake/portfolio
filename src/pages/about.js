import React from 'react'
import {Helmet} from 'react-helmet'

import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import AboutText from '../components/AboutText'
import { Emoji } from '../components/Emoji'

const About = () => {

  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <div id="about">
        <article>
          <h1><StaticImage src='../images/animoji.png' alt='animoji protrait' /> a bit about me<span>.</span></h1>
          <AboutText />

          <div className="tools">
            <h2>languages/frameworks I have experience in so far.</h2>
            <ul>
              <li><i class="devicon-html5-plain colored"></i> HTML5</li>
              <li><i class="devicon-css3-plain colored"></i> CSS3</li>
              <li><i class="devicon-javascript-plain colored"></i> Javascript</li>
              <li><i class="devicon-ruby-plain colored"></i> Ruby</li>
              <li><i class="devicon-rails-plain colored"></i> Ruby on Rails</li>
              <li><i class="devicon-react-original colored"></i> React</li>
              <li><i class="devicon-sass-original colored"></i> Sass</li>
              <li><i class="devicon-redux-original colored"></i> Redux</li>
              <li><i class="devicon-gatsby-plain colored"></i> Gatsby</li>
            </ul>
            <h2>preferred tools of the trade.</h2>
            <ul>
              <li><i class="devicon-atom-original atom"></i> Atom</li>
              <li><i class="devicon-photoshop-plain colored"></i> Photoshop</li>
              <li><i class="devicon-git-plain colored"></i> Git</li>
              <li><i class="devicon-github-original"></i> GitHub</li>
              <li><i class="devicon-chrome-plain colored"></i> Chrome</li>
            </ul>
            <h2>various skills.</h2>
            <ul>
              <li><Emoji description="writing hand" hex="	&#x270D;"/> written communication</li>
              <li><Emoji description="magnifying glass" hex="&#x1F50E;"/> detail oriented</li>
              <li><Emoji description="brain" hex="&#129504;"/> critical thinking</li>
              <li><Emoji description="chart upwards" hex="&#x1F4C8;"/> growth mindset</li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default About
