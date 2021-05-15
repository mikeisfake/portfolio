import React from 'react';

import TechStack from './TechStack'

const ProjectCard = props => {
  return (
    <div className="card" >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.github}>github repo</a>
      <TechStack technologies={props.technologies} />
    </div>
  )
}

export default ProjectCard
