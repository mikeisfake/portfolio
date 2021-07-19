import React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export const ProjectCard = ({ project }) => {

  const {title, description, github, site, video, image, technologies} = project;

  const pointer = site ? site : video;

  return (
    <>
      <div className="card">
        <div className="title">
          <h3>{title}</h3>
          <div className="links">
            <a href={github} target="_blank">
              <span class="material-icons">code</span>
            </a>
            <a href={pointer}>
              <span class="material-icons">insert_link</span>
            </a>
          </div>
        </div>
        <div className="img-wrapper">
          <div className="blocker"></div>
          <a href={pointer}>
            <img src={image} alt={title} />
          </a>
          <div className="tech-stack">
            <h4>Technologies</h4>
            <ul>
              {technologies.map(tech => {
                return <li>{tech}</li>
              })}
            </ul>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  )
}
