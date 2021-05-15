import React from 'react'

import {Emoji} from './Emoji'

const Thanks = () => {
  return (
    <a href="/" className="thanks">
      <Emoji description="peace emoji" hex="&#x270C;" className="wave" /> Thanks for reaching out!
    </a>
  )
}

export default Thanks
