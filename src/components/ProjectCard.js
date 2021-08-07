import React from "react"
import Fade from "react-reveal/Fade"

export const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    github,
    site,
    video,
    image,
    technologies,
  } = project

  const pointer = site ? site : video

  return (
    <>
    <Fade>
      <a href={pointer} className="card">
        <div className="title">
          <h3>{title}</h3>
          <div className="links">
            <a href={github} target="_blank" rel="noreferrer">
              <span class="material-icons">code</span>
            </a>
            <a href={pointer}>
              <span class="material-icons">insert_link</span>
            </a>
          </div>
        </div>
        <div className="img-wrapper">
          {/* <div className="blocker"></div> */}

          <p className="description">{description}</p>
          <img src={image} alt={title} />
        </div>
        <div className="tech-stack">
          {/* <h4>Technologies</h4> */}
          <span className="material-icons">storage</span>
          <ul>
            {technologies.map(tech => {
              return <li>{tech}</li>
            })}
          </ul>
        </div>
      </a>
    </Fade>
    </>
  )
}
