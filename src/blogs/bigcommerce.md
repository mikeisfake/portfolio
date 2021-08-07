---
title: BigCommerce CMS
slug: bigcommerce-cms
tagline: Trying Out An Ecommerce CMS
tags: [ecommerce, CMS, bigcommerce, stencil]
date: 2021.08.07
---

This week I was offered a code challenge from a company that uses BigCommerce to create custom ecommerce solutions for their customers. I personally have never created an ecommerce site and I certainly have never used BigCommerce before. Suffice to say I had a lot to learn, and I don't think I was up to the challenge in the time frame allowed, but I did have some takeaways. Here's what I learned:

### What is BigCommerce

BigCommerce is an ecommerce platform that provides software as a service for retailers. It includes online store creation, SEO built in, hosting, marketing etc. Personally I am more familiar with Shopify as it provides a very similar service. 

For business owners this can be a no code solution for creating a web store quickly and with very low overhead. 

For developers, BigCommerce has a tool for us to dive into the code and really create a bespoke site for a business. This was what I was tasked to do this week, and while I didn't accoplish what I wanted to I learned a bunch in the process.

### Stencil CLI

The Stencil CLI is a tool that allows developers to access the actual code that is behind these BigCommerce themes. The setup requires you to create a store on the BigCommerce website, and then enter the API token you get from there into your terminal to start doing local development. The base theme is a fully functioning web store that technically needs nothing else to work, however there are TONS of files that can be modified and added to to create whatever custom functionality you desire. 

The HTML files are written in handlebars which was net to me this week and definitely provided the biggest learning curve for me. I still am not totally sure what I was looking at even after reading the documentation so I'll absolutely be spending some more time with that, however on a surface level it reminds me of using ERB files in a Ruby on Rails project to dynamically generate HTML.

### Takeaways

Ecommerce sites are the way of the future. It so important for so many business to have an online storefront. We as developers have to be able to work with the tools we have to create these solutions for customers. Dipping my toe into this space for the first time has been illuninating for me and I hope to learn more in this space in the future. 