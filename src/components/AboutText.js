import React from 'react'
import { Link } from 'gatsby'

export const AboutData = () => {
  return (
    <p className="description">
      My name is Mike. I am a frontend software engineer based in the DMV area. I have been writing HTML, CSS and Javascript pages as a hobby since I was 12 years old... I had a really cool myspace, and I created a ton of themes for tumblr back in the day too!. <br /><br />
      Now, 10 years on, I have decided to make my hobby into a career. I have formalized my casual experience into an education at Flatiron School, where I expanded on my foundational knowledge and acquired a deeper love and understanding of software engineering. <br/><br/>
      I am currently seeking my first full-time real-life job as a developer to start my new career. If you think I might be a good fit for your team please <Link to="/contact">get in touch</Link>.
    </p>
  )
};
