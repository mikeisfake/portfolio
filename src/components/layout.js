import React from 'react'
import {Link} from 'gatsby'

import '../styles/index.scss'

const Layout = ({children}) => {
  return (<div id="main-container">
    <div id="nav">
      <Link to='/' activeStyle={{
          color: "#2f968a"
      }}>home.</Link>
      <Link to='/projects' activeStyle={{
          color: "#2f968a"
      }}>projects.</Link>
      <Link to='/resume' activeStyle={{
          color: "#2f968a"
      }}>resume.</Link>
      <Link to='/about' activeStyle={{
          color: "#2f968a"
      }}>about.</Link>
      <Link to='/blog' activeStyle={{
          color: "#2f968a"
      }}>blog.</Link>
      <Link to='/contact' activeStyle={{
          color: "#2f968a"
      }}>contact.</Link>
    </div>
    {children}
  </div>)
}

export default Layout
