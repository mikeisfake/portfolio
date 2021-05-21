import React from 'react';
import { Helmet } from 'react-helmet'

import TechStack from './TechStack'

const ProjectCard = props => {

  const iframe = <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
      </Helmet>
      <div className="card" >
        <div className="card_content">
          {props.video && iframe}
          <section className="card_details">
            <div>
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
            <div>
              <TechStack technologies={props.technologies} />
              <a href={props.github}><i class="devicon-github-original"></i> on GitHub</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
