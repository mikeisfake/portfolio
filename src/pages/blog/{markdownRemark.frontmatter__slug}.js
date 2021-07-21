import React from "react"
import { graphql, Link } from "gatsby"

const post = ({ data }) => {
  const post = data.markdownRemark
  const content = post.html

  const taglist = post.frontmatter.tags.map((tag, i) => {
    return <li key={`${i}-${post.id}`}>#{tag}</li>
  })
  const formattedDate = post.frontmatter.date.split(".").reverse().join(".")
  return (
    <div id="post">
      <Link to="/blog">
        <span className="back material-icons">apps</span>
      </Link>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.tagline}</h2>
        <div className="details">
          <p>
            <span className="material-icons">schedule</span> {post.timeToRead}{" "}
            min read
          </p>
          <p>
            <span className="material-icons">event</span>
            {formattedDate}
          </p>
        </div>
      </header>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <ul>{taglist}</ul>
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tagline
        tags
        date
      }
      timeToRead
    }
  }
`

export default post
