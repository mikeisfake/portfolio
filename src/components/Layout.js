import React from 'react'
import {Helmet} from 'react-helmet'


import NavLinks from '../components/NavLinks'
import '../styles/index.scss'

const Layout = ({children}) => {

  const handleBurger = event => {
    const menu = document.querySelector('.nav-links')
    const burger = document.querySelector('.hamburger')
    const container = document.getElementById('main-container')
    const cover = document.getElementById('cover')

    menu.classList.toggle('open')
    burger.classList.toggle('open')
    container.classList.toggle('open')
    cover.classList.toggle('open')
  }

  return (

    <div id="main-container">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </Helmet>
      <div id="cover" onClick={handleBurger}></div>
      <div id="nav">
        <div className="hamburger" onClick={handleBurger}>
          <span className="line"></span>
        </div>
        <NavLinks />
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
