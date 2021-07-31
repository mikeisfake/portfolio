import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import resume from "../images/resume.pdf"

export const About = () => {
    return (
      <>
        <article className="content">
          <div className="img-wrapper my_bounce">
            <StaticImage
              src="../images/head-transparent.png"
              alt="animoji protrait"
            />
          </div>
          <div className="details">
            <h3>{`<about />`}</h3>
            <p>
              My name is Mike. I am a frontend software engineer based in the
              DMV area. I have been writing HTML, CSS and Javascript pages as a
              hobby since I was 12 years old... I had a really cool MySpace, and
              I created a ton of themes for Tumblr back in the day too!.
            </p>
            <p>
              Now, roughly 10 years on, I have decided to make my hobby into a
              career. I have formalized my casual experience into an education
              at Flatiron School, where I expanded on my foundational knowledge
              and acquired a deeper love and understanding of software
              engineering.
            </p>
            <p>
              I am currently seeking my first full-time real-life job as a
              developer to start my new career. If you think I might be a good
              fit for your team please get in touch.
            </p>
            <a className="resume" href={resume} target="_blank" rel="noreferrer">
              RESUME
            </a>
          </div>
        </article>
        <div className="technologies">
          <ul>
            <h3>Languages</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Ruby</li>
          </ul>
          <ul>
            <h3>Libraries/ Frameworks</h3>
            <li>React</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Gatsby</li>
            <li>Ruby on Rails</li>
          </ul>
          <ul>
            <h3>Tools</h3>
            <li>GitHub</li>
            <li>Contentful</li>
            <li>Netlify</li>
            <li>VS Code</li>
            <li>Adobe Photoshop</li>
          </ul>
          <ul>
            <h3>Methodologies</h3>
            <li>REST</li>
            <li>MERN</li>
            <li>Responsive Design</li>
            <li>Object Oriented Programming</li>
            <li>Test Driven Developemnt</li>
          </ul>
        </div>
      </>
    )
}
