---
title: Images in Next.js
slug: images-on-nextjs
tagline: The broad issue of images in a Next app deployed to Netlify
tags: [nextjs, netlify, research, story time]
date: 2021.07.17
---

This week while working on my latest app I ran into a very specific issue and had to do some **MAJOR** rabbit hole research in order to solve it. Really there isn’t an actual ‘solution’ so much as there are a bunch of random hack-y workarounds that may or may not even be applicable depending on the specific situation.

I figured this week I’d talk a bit about *how* I got to my solution rather than the solution itself. The solution is super interesting and I’m really pleased with myself for having figured it out, but the process was...something else.

If me describing several days of research and dead ends interests you, read on:

### The Problem

So here’s the problem. I’m building an app with Next.js. I’m using Contentful to create and send data for my app to consume. Much of that information is images that make up 90% of the site (essentially all the side does is display images and descriptions...at least at a very high level).

I got to a place where I was pretty happy with how everything was looking and was ready to deploy. After dealing with all the standard random build issues I seem to always run into when deploying a site I finally (thought) I was all set up. I went to browse around on my new live site and boom...no images.

I was incredibly confused. Everything else was going smoothly. I got no errors anywhere. But there was not a single image anywhere.

It didn’t take long for me to find out that apparently the next/image component is not compatible with the way Netlify builds your site. Actually unless you deploy to Vercel, chances are you’ll have this same issue. Crazy! Half of the internet is images, there *has* to be a clean solution to this somewhere right? Right?

### The Search

24 hours passed...I read so many articles and forum threads about this particular issue...I had like 83 tabs open in Chrome just for this. I was on YouTube. I read the docs like 14 times just in case I missed something.

Nothing worked.

That’s not entirely true. There were solutions. Crazy complex solutions that would require adding like 6 new dependencies to my project. Or someone deep in some forum boldly claiming they had solved it with one line of code. None of it got me anywhere. After a full day of this I decided to try my first workaround, if next/image is the problem...why not just not use it?

### Half measures

Well...I got my images to display. If you’re okay with waiting for about a solid minute for images to slooooooowly start appearing on your screen. At this point I was so disgusted I was ready to just let it be. I deployed it with the slow imaged and was ready to move on with life.

Except I wasn’t. I woke up in the middle of the night still pissed off that this app I spent so much time on, that was so beautiful and ran so well on my machine and was one of the nicest looking things I’ve ever made was simply not going to be able to be shared? Nope, unacceptable.

Cut to me in front of my computer at like 3 in the morning 87 more tabs open.

Then I went back and read the docs again. And then finally after all this reading and stressing a lightbulb went off.

### Turning a corner

Again, I’m not going to go too deep into the solution I found that worked for me, but essentially it was, as all the best solutions to programming issues, simple enough to make you scream at having spent so long trying to get there.

The broad strokes? I replaced the image loader some something that was compatible with deployment to Netlify, Cloudinary. Added bonus for Cloudinary, it has a plugin for Contentful that allows you to pull images directly into you content model with absolutely no fuss.

This was an example of how problems like these go. You don’t have to reinvent the wheel you just have to get good at reading documentation and applying a bit of critical thinking!

Anyway, here’s to being in the weeds!
