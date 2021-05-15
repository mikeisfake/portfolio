import React from 'react'
import PropTypes from 'prop-types'

export const Emoji = props => {
  return (
    <span
      role="img"
      aria-label={props.desciption}
      className={props.className}
    >
      {props.hex}
    </span>
  )
};


Emoji.propTypes = {
  description: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
}
