import React from 'react';

import TechStack from './TechStack'

const ProjectCard = props => {

  const iframe = <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  return (
    <div className="card" >
      <h2>{props.title}</h2>
      {props.video && iframe}
      <p>{props.description}</p>
      <a href={props.github}>github repo</a>
      <TechStack technologies={props.technologies} />
    </div>
  )
}

export default ProjectCard
