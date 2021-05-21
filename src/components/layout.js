import React from 'react'
import {Helmet} from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink"


import '../styles/index.scss'

const Layout = ({children}) => {
  return (

    <div id="main-container">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
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
        <AniLink cover bg="#2f968a" direction="right" to='/contact' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>contact</AniLink>
      </div>
      {children}
      <div id="footer">
        <div className="socials">
          <ul>
            <li>
              <a href='https://github.com/mikeisfake' target="_blank" rel="noreferrer"><i class="devicon-github-original" ></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/michael-cooper-259985105/' target="_blank" rel="noreferrer"><i class="devicon-linkedin-plain"></i> </a>
            </li>
            <li>
              <a href='https://vocitates-blog.tumblr.com/' target="_blank" rel="noreferrer"><i class="fab fa-tumblr fa-fw"></i> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout
