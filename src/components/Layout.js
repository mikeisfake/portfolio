import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import "../styles/index.scss"

const Layout = ({ children }) => {
  const handleClick = e => {
    let el = e.nativeEvent.target.hash
    let node = document.querySelector(el)
    e.preventDefault()
    node && node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Helmet>
        <title>Mike Cooper | Front End Developer</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        />
      </Helmet>
      <div id="layout">
        <nav id="main-nav">
          <div
            onClick={scrollToTop}
            className="img-wrapper animate__animated animate__fadeInUp"
          >
            <StaticImage src="../images/animoji.png" alt="animoji protrait" />
          </div>

          <div className="spacer"></div>
          <ul>
            <li className="animate__animated animate__fadeInUp delay">
              <a href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li className="animate__animated animate__fadeInUp delay-1">
              <a href="#projects" onClick={handleClick}>
                Projects
              </a>
            </li>
            <li className="animate__animated animate__fadeInUp delay-2">
              <a href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
            <li className="animate__animated animate__fadeInUp delay-3">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        {children}
        <div className="socials">
          <a href="https://twitter.com/mikecdev">
            <i class="devicon-twitter-original"></i>
          </a>
          <a href="https://github.com/mikeisfake">
            <i class="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/michael-cooper-259985105/">
            <i class="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Layout
