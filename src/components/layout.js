import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'gatsby'

import '../styles/index.scss'

const Layout = ({children}) => {
  return (

    <div id="main-container">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <div id="nav">
        <Link to='/' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>home</Link>
        <Link to='/projects' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>projects</Link>
        <Link to='/about' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>about</Link>
        <Link to='/blog' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>blog</Link>
        <Link to='/contact' activeStyle={{
          'border-right' : '5px solid #2f968a'
        }}>contact</Link>
      </div>
      {children}
      <div id="footer">
        <div className="socials">
          <ul>
            <li>
              <Link to='https://github.com/mikeisfake'><i class="devicon-github-original"></i>
              </Link>
            </li>
            <li>
              <Link to='https://www.linkedin.com/in/michael-cooper-259985105/'><i class="devicon-linkedin-plain"></i> </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout
