import React from 'react'
import Layout from '../components/Layout'

import { ProjectData } from '../data/ProjectData'
import ProjectCard from '../components/ProjectCard'
import { Emoji } from '../components/Emoji'

const Projects = () => {

  const cards = ProjectData.map((project, i) => {
    return (
        <ProjectCard
          title={project.title}
          description={project.description}
          github={project.github}
          technologies={project.technologies}
          image={project.image}
          video={project.video}
        />
    )
  });


  return (
    <Layout>
      <div className="project_cards">
        <h1><Emoji hex="&#x1F468;&#x1F3FE;&#x200D;&#x1F4BB;" description="man at computer"/> some of my work.</h1>
        {cards}
      </div>
    </Layout>
  )
}

export default Projects
