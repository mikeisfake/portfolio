import { graphql, Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import "../../styles/index.scss"

const blog = ({ data }) => {
  // console.log(data.allMarkdownRemark.nodes)

  const posts = data.allMarkdownRemark.nodes.slice(0, 4).map(post => {
    const { title, tagline, tags, slug, date } = post.frontmatter
    const tagList = tags.map((tag, i) => {
      return <li key={`${i}${post.id}`}>#{tag}</li>
    })
    const formattedDate = date.split(".").reverse().join("")
    console.log(formattedDate)
    return (
      <div className="post-card" key={post.id}>
        <Link to={`/blog/${slug}`}>
          <span className="date">{formattedDate}</span>
          <h2>{title}</h2>
          <p>{tagline && tagline}</p>
          <ul>{tagList}</ul>
        </Link>
      </div>
    )
  })

  const lastPost = data.allMarkdownRemark.nodes.length

  const archive = data.allMarkdownRemark.nodes.slice(4, lastPost).map(post => {
    const { title, slug } = post.frontmatter
    return (
      <Link to={`/blog/${slug}`} key={post.id}>
        <li>
          {" "}
          <span className="material-icons">folder_open</span> {title}
        </li>
      </Link>
    )
  })

  return (
    <div id="blog">
      <Helmet>
        <title>Mike Cooper | Blog</title>
      </Helmet>
      <Link to="/">
        <span className="material-icons home-button">home</span>
      </Link>
      <div className="blog-container">
        <h1>{`<blog />`}</h1>
        <h3>recent posts</h3>
        <div className="card-container">{posts}</div>
        <div className="archive-list">
          <h3>post archive</h3>
          <ul>{archive}</ul>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blogs)/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          slug
          tagline
          tags
          title
          date
        }
        id
      }
    }
  }
`

export default blog
