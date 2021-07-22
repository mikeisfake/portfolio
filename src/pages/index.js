import * as React from "react"
import { Link } from "gatsby"

import Fade from "react-reveal/Fade"

import { Hero } from "../sections/Hero"
import { About } from "../sections/About"
import { Projects } from "../sections/Projects"
import { Contact } from "../sections/Contact"

import Layout from "../components/Layout"

import { ProjectData as data } from "../data/ProjectData"

const Index = () => {
  return (
    <Layout>
        <section id="hero">
          <Hero />
        </section>

      <Fade bottom>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects data={data} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Fade>
    </Layout>
  )
}

export default Index
