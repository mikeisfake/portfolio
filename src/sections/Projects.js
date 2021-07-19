import React from "react"
import { ProjectCard } from '../components/ProjectCard';



export const Projects = ({ data }) => {

  const cards = data.map(project => {
    return <ProjectCard project={project} />
  })

  return (
    <>
      <h1>{`<projects />`}</h1>
      <div className="cards">
        {cards}
      </div>
    </>
  )
}
