import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavLinks = () => {

  const activeStyle = {
    'border-bottom' : '3px solid #2f968a',
  }
  const coverColor = '#2f968a'

  return (
    <div className="nav-links">
      <AniLink cover bg={coverColor} to='/' activeStyle={activeStyle}>home</AniLink>
      <AniLink cover bg={coverColor} to='/projects' activeStyle={activeStyle}>projects</AniLink>
      <AniLink cover bg={coverColor} to='/about' activeStyle={activeStyle}>about</AniLink>
      <AniLink cover bg={coverColor} to='/contact' activeStyle={activeStyle}>contact</AniLink>
    </div>
  )
}

export default NavLinks
