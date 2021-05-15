import React from 'react'
import Layout from '../components/layout'

import { projectData } from '../data/projectData'
import ProjectCard from '../components/projectCard'

const Projects = () => {

  const cards = projectData.map((project, i) => {
    return (
      <ProjectCard
        title={project.title}
        description={project.description}
        github={project.github}
        technologies={project.technologies}
      />
    )
  });


  return (
    <Layout>
      {cards}
    </Layout>
  )
}

export default Projects
