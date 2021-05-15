import React from 'react'
import {Helmet} from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink"


import '../styles/index.scss'

const Layout = ({children}) => {
  return (

    <div id="main-container">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <div id="nav">
        <AniLink cover bg="#2f968a" direction="right" to='/' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>home</AniLink>
        <AniLink cover bg="#2f968a" direction="right" to='/projects' activeStyle={{
            'border-right' : '5px solid #2f968a'
        }}>projects</AniLink>
        <AniLink cover bg="#2f968a" direction="right" to='/about' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>about</AniLink>
        <AniLink cover bg="#2f968a" direction="right" to='/blog' activeStyle={{
            'border-right' : '5px solid #2f968a'
        }}>blog</AniLink>
        <AniLink cover bg="#2f968a" direction="right" to='/contact' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>contact</AniLink>
      </div>
      {children}
      <div id="footer">
        <div className="socials">
          <ul>
            <li>
              <a href='https://github.com/mikeisfake'><i class="devicon-github-original"></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/michael-cooper-259985105/'><i class="devicon-linkedin-plain"></i> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout
