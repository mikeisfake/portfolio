---
title: Headless CMS
slug: headless-cms
tagline: A bit of research I did about the Contentful Headless CMS
tags: [headless cms, contentful]
date: 2021.06.12
---

I was recently creating my portfolio site in Gatsby and while I was reading up and trying to learn a bit about the framework, I came across a term I’d never heard before. ‘Headless CMS’. After a bit of quick reading I discovered that this was something I definitely wanted to incorporate in to a future project.

### What is a Headless CMS
Headless CMS or Content Management System, is essentially a tool or managing the data or content of a site or application, without the frontend business attached. For example, Wordpress is not a headless CMS since the content you create is pumped directly into a theme. A service like Contentful is a headless CMS since it allows you to create content but is completely agnostic about where that content goes.

### How does it work
I’ve chosen to use Contentful as the CMS behind my latest project which is a simple app to show off my builds in The Sims 4. Rather than creating a whole backend API on my own (doable, but probably more work than really necessary) I used Contentful to model my data. Just like you would when creating a model in a regular backend, Contentful allows you to simply describe the type of data you need, it has various categories for the data attributes (text, media, boolean etc.) each attribute can be given various validations, such as required to match a regex or some other pattern, length, or even must be limited to some pre specified set of values.

The frontend of Contentful is super clean and easy to use, so if someone is only responsible for creating content for your site or application they don’t need any technical know how to do that. Just type it in or upload and publish and the content is immediately available.

Contentful provides developers with a unique ‘space id’ as well as an API key that allows them to access the data the same as you might for any third party API. Simply store these values as environment variables in the `.env` file in your project, access them with `process.env.YOUR_VARIABLE_NAME_HERE` and use the data you’ve uploaded to Contentful in your frontend application. 