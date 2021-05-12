import React from 'react'
import {Link} from 'gatsby'

import '../styles/index.scss'

const Layout = ({children}) => {
  return (
    <div id="main-container">
      <div id="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      {children}
    </div>
  )
}

export default Layout
