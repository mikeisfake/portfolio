---
title: Deploying with Netlify
slug: deploying-with-netlify
tagline: Some trouble-shooting tips I found while deploying my first site with Netlify
tags: [netlify]
date: 2021.05.22
---

I'm finally at the finish line (for now) with my personal portfolio site. Most of the development is in a good place and it's time to actually deploy the site to live on the internet!

As exciting as all that is, I actually have never deployed a site before and the process seemed daunting. After a bit of research, I discovered a very simple and steam-lined way to get my site hosted; Netlify. I've heard of Netlify before, but never investigated any further, so I decided to take a closer look at this. Here's what I learned and the steps I took.


## **Step One: Build**

Netlify has a few different ways that you can handle getting your site deployed with them. I decided to go with a method that links directly to the GitHub repo and re-deploys the site with updated code whenever you push it up. This seems to me like the least fussy way to handle this, and for something as relatively simple as my portfolio, this was a perfect solution.

First I signed up for a Netlify account using my GitHub credentials. Then from the overview page, I just selected the big green 'New site from Git' button and followed the prompts. Literally that easy. Link the repository and you're done.

## **Case Sensitivity and Netlify**

I did run into an error however during the build process that I think might be useful to share. During my development process, I changed a bunch of file names to make capitalization consistent through all the files. This is fine, and as someone who gets obsessive about details, it simply had to be done. However, keep in mind that Git does not care about case, but Netlify does. I repeatedly kept getting an error that several of my files didnt exist and didn't understand why at first.

Essentially, in Git, my file was was at `src/components/layout.js` however in reality the location was `src/components/Layout.js`. For git purposes this does not matter, but for Netlify this will throw and error and prevent your build from completing.

The fix I discovered for this is pretty simple. Just renaming the file won't help because again, git doesnt care about case. Instead you can just replace the file in git with the correct one.

Example, take my `layout.js` from forom before. In order to correct this, from the command line, I typed `git mv src/components/layout.js src/components/Layout.js`. This is explicitly telling git to rename these files. Once successful it will stage the change and you simply have to commit, and push it up with the updated file names. Voila no more case sensitivity error.

## **Other issues**

I had another smaller issue with the `gatsby-plugin-manifest` in `gatsby-config.js`. Essentially, I had deleted the default Gatsby icon from the images directory, and this is referenced in this document. During development it's not an issue but it will break during build.

My quick fix to get this moving along was to remove the entire thing seeing as the data there is really just related to the Gatsby default starter and not my custom site. I haven't run a new build with this correction yet so stay tuned, but I currently am using my own image in that file because without the manifest the development environment breaks. Will see how this works when I re-deploy, but I dont think it'll be an issue.

## **Custom URL**

Having the site live is awesome, however, the URL that Netlify will automatically assign is very ugly and not easy to share. In this instance I need to be able to send a link to this site to potential employers, so I need something clean, professional and succinct. I chose to purchase a domain from Google. That process couldn't be simpler. Just go to Google Domains, search for a URL you like, if it's available, purchase it. Done.

The challenge was making my custom domain [mcooper.dev](https://www.mcooper.dev) point to the gibberish URL from Netlify.

This process was...not complicated per se, but it was certainly out of my wheelhouse. I referred to a couple of neat video tutorials on YouTube to get this done. The essence here is that you have to get some info from Netlify and pop it into Google Domains so that they can talk to each other.

## **All Done....For Now**

Deploying a site with Netlify is super easy. I am still making some updates to the code (for example I found a few visual bugs with my responsive mobile version, and I decided I hate the color palette I chose), but I know it'll be super easy to re-deploy. I don't even have to do anything but push the code up to GotHub and Netlify automatically handles deploying changes! How neat!
