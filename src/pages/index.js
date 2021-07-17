import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { Emoji } from "../components/Emoji"

const Index = () => {
  return (
    <Layout>
      <section id="hero">
        <h3>my name is</h3>
        <h1>Mike Cooper</h1>
        <h4>and i make beautiful things for the web.</h4>
        <p>
          I'm a front end web developer with a passion for making beautiful and
          funcional user interfaces to create delightful experences on the web.
        </p>
        <span className="cta">
          <Link to="#contact">contact me.</Link>
        </span>
      </section>

      <section id="about">
        <h3>About Me</h3>
        <p>
          My name is Mike. I am a frontend software engineer based in the DMV
          area. I have been writing HTML, CSS and Javascript pages as a hobby
          since I was 12 years old... I had a really cool myspace, and I created
          a ton of themes for tumblr back in the day too!.
        </p>
        <p>
          Now, 10 years on, I have decided to make my hobby into a career. I
          have formalized my casual experience into an education at Flatiron
          School, where I expanded on my foundational knowledge and acquired a
          deeper love and understanding of software engineering.
        </p>
        <p>
          I am currently seeking my first full-time real-life job as a developer
          to start my new career. If you think I might be a good fit for your
          team please get in touch.
        </p>
      </section>

      <section id="projects"></section>

      <section id="contact"></section>
    </Layout>
  )
}

export default Index
