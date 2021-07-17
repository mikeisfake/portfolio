import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <nav id="main-nav">
        <ul>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Layout
