import React from 'react'
import Layout from '../components/Layout'

import { ProjectData } from '../data/ProjectData'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {

  const cards = ProjectData.map((project, i) => {
    return (
      <div className="project_cards">
        <ProjectCard
          title={project.title}
          description={project.description}
          github={project.github}
          technologies={project.technologies}
          image={project.image}
          video={project.video}
        />
      </div>
    )
  });


  return (
    <Layout>
      {cards}
    </Layout>
  )
}

export default Projects
