import React from 'react'

const TechStack = props => {

  const langs = props.technologies.map(tech => {
    return (<span>{tech}</span>)
  });

  return (<div>{langs}</div>
  )
}

export default TechStack
