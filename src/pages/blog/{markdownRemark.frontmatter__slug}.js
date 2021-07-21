import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

const post = ({ data }) => {
  // console.log(data);
  const post = data.blogPost
  const content = post.html
  const more = data.readMore.nodes

  const randoms = more.sort(()=> 0.5 - Math.random()).slice(0, 3)

  const readMoreList = randoms.map(post => {
    const {slug, title, tagline} = post.frontmatter
    return (
      <Link to={`/blog/${slug}`}>
        <h3>{title}</h3>
        <h4>{tagline}</h4>
      </Link>
    )
  })
 

  const taglist = post.frontmatter.tags.map((tag, i) => {
    return <li key={`${i}-${post.id}`}>#{tag}</li>
  })
  const formattedDate = post.frontmatter.date.split(".").reverse().join(".")
  return (
    <div id="post">
      <Helmet>
        <title>Mike Cooper | {post.frontmatter.title}</title>
      </Helmet>
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
        <h2>Read More:</h2>
      <div className="read-more">
        {readMoreList}
      </div>
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    blogPost: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tagline
        tags
        date
      }
      timeToRead
    }

    readMore: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          tagline
          title
        }
      }
    }
  }
`

export default post
