import * as React from "react"
import { Link } from "gatsby"

import { Hero } from "../sections/Hero"
import { About } from "../sections/About"
import { Contact } from "../sections/Contact"
import { Projects } from "../sections/Projects"

import Layout from "../components/Layout"
import { Emoji } from "../components/Emoji"

import { ProjectData as data } from "../data/ProjectData"

const Index = () => {

  return (
    <Layout>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects data={data} />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  )
}

export default Index
