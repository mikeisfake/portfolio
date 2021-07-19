import React from 'react'
import { Link } from 'gatsby'
 
export const Hero = () => {

  const handleClick = e => {
    let el = e.nativeEvent.target.hash
    let node = document.querySelector(el)
    e.preventDefault()
    node && node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

    return (
      <>
        <h3 className="animate__animated animate__fadeInUp delay-3">
          my name is
        </h3>
        <h1 className="animate__animated animate__fadeInUp delay-4">
          Mike Cooper
        </h1>
        <h4 className="animate__animated animate__fadeInUp delay-5">
          and I make beautiful things for the web.
        </h4>
        <p className="animate__animated animate__fadeInUp delay-6">
          I'm a front end web developer with a passion for making beautiful and
          funcional user interfaces to create delightful experences on the web.
        </p>
        <span className="cta animate__animated animate__fadeInUp delay-7">
          <a
            className="my_bounce"
            onClick={handleClick}
            href="#contact"
          >
            <span className="material-icons">mail_outline</span> CONTACT ME
          </a>
        </span>
      </>
    )
}
