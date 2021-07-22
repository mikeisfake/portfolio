---
title: Gatsby Filesystem Route API
slug: filesystem-route-api
tagline: How I used GAtsby's Filesystem Route API to make this blog
tags: [gatsby, blog, routing, graphql]
date: 2021.07.22
---

One of the neatest features of Gatsby is automatic page generation. You simply place a regulat React component file in a folder located inside `src/pages/` and Gatsby will automatically create a page for you from that component. Very nice. 

The challenge then is, what if I want to just have a template and dynamically generate the url and pump data into it. Up until very recently the method for doing this was frankly very cumbersome and almost not worth the effort in my opinion. In fact for something like this I would still highly recommend the Next.js framework as their method for accomplishing this is super streamlined and use friendly. That said, this site is built using Gatsby and there is now a ***much*** simpler way to dynamically generate routes called Filesystem Route API.

Here's what I learned:

### The Situation

I wanted to create my own blog fron scratch. I had always planned to but never got around to it and instead I've been posting all my writing to a junky little tumblr blog. This past week I decided to redisgn my entire portfolio site, and I figured, while I was at it I would finally pull the trigger on moving my blog over here as well. The challenge was finding the best way to store and display my content. 

Most of my blog posts I have stored locally as markdown files already, I so I knew that I likely would want to use those in some form. I toyed with the idea of using Contenful again to recreate all my posts and send a query to get them all but that ultimately seemed like more work on top of more owrk and not in any way an improved result.

### The Beginning

My first step was figuring out how to query data correctly in Gatsby. Gatsby has a built in content layer using Graphql. I personally have never used graphql so I figured I'd start there. There is a tiny bit of set up, but basically if you need data in an component you can simply export a graphql query and use the data in the component. Like so:

```javascript
//import graphql from react
import { graphql } from 'gatsby'

const Component = ({ data }) => {
    //...component consuming data 
}

//export graphql query to be consumed by component. 
//in this instance we're grabbing the full path names of all files in directories specified in the gatsby-source-filesystem configuration in gatsby-config.js (more on that below)
export const query = graphgl`
query MyQuery {
  allFile {
    nodes {
      absolutePath
    }
  }
}
`
```

Graphql queries are simple and super powerful. In order for us to grab information from our files, we need to tell Gatsby which folders to look in for data. We do this in our `gatsby-config.js` file. In my instance I have all my markdown files in a folder located at `/src/blogs`. In the plugins array I added the following object:

```javascript
 {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`,
      },
    },
```

This tells Gatsby it can look in the `/src/blogs` folder for data to add to the graphql data layer. Additionally, since these are markdown files I need a transformer so that the markdown can be understood in the React component. That would be `gatsby-transformer-remark`, installed via npm and added to the plugins array as well. 

### The Fun Part

So that was all of the set up. This is how I used it. 

First of all I wanted to make a blog index page to list all of the posts out with links to each one. The query to get the dat I needed to make that happen looked like this.

```javascript
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
```

Here I'm getting all of the blogposts (I filtered because it was also returing some other file types I didn't need it to), and accessing the data from the frontmatter of each post. I also grabbed the unique generated id and an excerpt just in case. I used this information in my blog index component to create a list of links for the index page. Simple as that. 

### The Hard Part

So the next bit was dynamically generating the blog post pages based on the slug. After a bunch of searching around I was able to determine that using the Filesystem Route API was going to be the way to go, however there was next to no information about it on the internet. Usually when I want to learn a new thing, I peruse the docs, then have a look at some articles around the web, blogs posts etc, then I find a couple tutorials on YouTube to look at before giving in a shot myself. By that point I have a bunch of different ideas on how to implement a thing on my own and have accumulated resources already that should be helpful. 

That was not going to be so easy this time. I looked all over and most of the information around was related to the old way using the gatsby-node.js file and the createPages method. Again, I could have done it this way, but I'm a fan of the cutting edge so I really didn't want to. Also I mentioned that this seemed really cumbersome for an app as small as this one. 

Ultimately I found a couple of guys on YouTube struggle through this (one of the was even en Français), and I read through the docs so many times I could probebly recite them from memory at this point, eventually I was able to piece together an understanding of what to do which...once I got that clarity I realized it was embarassingly simple and all the reading and watching I did just made it seem more complicated than it actually was. 

### Solution

To create a dynamically generated page in Gatsby you first need to name the document based on the query you would do in graphql to get the individual item. There are some syntactic requirements such as using `__` for nested attributes. Also the whole thing needs to be wrapped in curly brackets. In my case my file is called `{markdownRemark.frontmatter__slug}.js` because to get the individual blog post I would query like this:

```javascript
query MyQuery {
  markdownRemark {
    frontmatter {
      slug
    }
  }
}
```

The actual query in the component itself looks like this

```javascript
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
```

I literally just copied this from the docs and replaced it with my own field names. I also named the queries because there are 2 of them in my case, one for the actual post I want to display, and the other to get a list of all my posts to grab a few at random to suggest more to read.

### Conclusion

There was plenty more I learned along this process and I'll probably be sharing what I learned this week for a good little while since it was really so much from algorithims to cool UI techniques and tricks. My most useful takeaway from this process was perhaps dipping my toe into graphql for the first time. I want to explore more with that because it seems super powerful and easy to use.