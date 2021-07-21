---
title: Setting Up Gatsby
slug: setting-up-gatsby
tagline: My first introduction to a Gatsby project
tags: [gatsby]
date: 2021.05.08
---

This week I decided to dip my toe into learning [Gatsby](https://www.gatsbyjs.com/). So far it’s wonderful. If you’re someone who enjoys React, Gatsby is absolutely a tool I recommend adding to your belt

**What is Gatsby?**

Gatsby is an open source static website generator that is based on React. From what I understand to simplify it is really just a simple way to build sides using React without a lot of the business of setting things up.

Many of the features you may have to add to a React project are built in when using Gatsby. For example, routing in Gatsby is mind-blowingly simple. A Gatsby project will have a directory located at /src/pages. Any React component defined in src/pages/*.js will become a page. Meaning src/pages/about.js will automatically be available at localhost:8000/about.

Gatsby uses GraphQL to get data meaning it can get data from just about anywhere, from a database, common CMS’s like WordPress, or even a simple CSV.

**How to get started Using Gatsby**

The Gatsby docs are very clear and helpful for getting up and running. They even have a whole section devoted to helping you [set up a development environment](https://www.gatsbyjs.com/docs/tutorial/part-zero/) if you need to.

Personally I have completed the first section of the docs to learn some of the basics. Generally its a simple as running gatsby new [project name] from the command line to create a new repo with the default Gatsby setup files.

From there most of the set up for a basic project is done. You’ll need to import react to each component like always and then create your components as always.

**Next Steps**

I have a bit more learning to do but I’m excited do dive deeper. I want to understand if some of the modern react hooks would be available here, and if they’d even be useful for the type of projects Gatsby is suited for. Similarly for things like state management. I’m also curious about the various plugins available; is that library particularly robust?

I plan to use Gatsby to build my personal portfolio site. I’ve been digging around for a tool that will help me quickly build a beautiful frontend without a whole bunch of extra that. I won’t need since primarily the site will be presentational and have no real need of a full backend. I also wanted to write in React rather than using basic HTML/CSS/Javascript. Gatsby seems like the perfect solution so far.