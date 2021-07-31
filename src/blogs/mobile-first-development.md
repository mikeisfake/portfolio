---
title: Mobile First Development
slug: mobile-first-development
tagline: Developing websites with mobile in mind first
tags: [mobile, css, best practices]
date: 2021.07.28
---

So I have a confession. It's something that I know is a big no-no in the developer community these days. 

I tend not to do mobile first development.

I know throw your tomatoes I get it. The thing is, when I was first learning, mobile wasn't really a priority. These days the vast majority of people visiting a website are visiting from their phones and tablets. A lot of people dont ever even use their computers anymore. We as developers must create things thats are usable to the widest audience possible. This means that we must develop in a way that is suitable for use on mobile devices.

### What is mobile first development

As I mentioned, in the past there was not such a need for mobile development. People didnt have smart phones and didnt rely on them as much as we do now if they did. Today that is not the case and hasn't been for a long time. The idea of mobile first development is that rather than building a whole desktop version of your site, and then taking on the laborious process of making it something that will work on smaller screens, you should instead create the site as it should appear on mobile first, and then adapt upwards in screen size. 

This process makes sense. Often when designing things for larger screens you may get carried away and locked into certain designs that simply do not work for mobile at all. The process of stripping all of that away and refactoring it for mobile can often become more like recreating the entire site from scratch. Painful. Instead, scaling up from a design that work on a smaller screen can feel liberating. It's just adding more and more which can be fun and is also much easier in general. 

### My example

So I'm thinking about this because right now I an in the slow painful process of updating this very site to be mobile respoonsive. When I say apinful I do mean painful. I really carefully thought out every aspect of the design of this site, and to have to strip it all back down and rethink the entire design from the bottom up....I'd really would rather not. Even simple things like the size of text throughout for my headings, or the way elements are organized, choosing `grid` or `flex` to lay things out. 

### How to do mobile-first coding

There has beem plenty said on the subject of *designing* from a mobile-first perspective, but very little tends to be said about how to actually write that code. I think that's part of why I have struggled so much with it. I get how to design a page to look good on mobile, but what are the best practices with regard to how to actually create that in code. 

Here's some of what I've leared on that and my thoughts:

At a base level, any responsive design is going to use `@media` rules in CSS to override styles and conditionally show and hide elements based on screen size. A typical desktop first media query might look something like this:

```css
.header {
    font-size: 2em;
    color: red;
}

@media (max-width: 750px) {
    .header{
        font-size: 1em;
    }
}
```

In the example above we are overriding the `font-size` property when the screen is *below* 750px wide. There is nothing wrong with this, it will work, but it is not mobile first. In this instance the default styling is applied to larger screens only and we have to individually go in and alter things for mobile.

The way to flip this is simple. Rather than using `max-width` in your media query, use `min-width` and write your mobile style as the default instead, like this:

```css
.header {
    font-size: 1em;
}

@media (min-width: 750px) {
    .header{
        font-size: 2em;
        color: red;
    }
}
```

Simple as that! Now the `.header` element will default to a font size of 1em, unless the screen is above a certain size and has the room to spread to 2em and also get a little fanct color on it as well! 

For the time being, this is the standard way to make our websites responsive. There are certainly new things oming down the pipe in CSS that may just be the way of the future and remove the need for us to write our code this way, but all of that is experimental and not widely supported at all. 

### The Commitment

I want to commit myself to getting better about this. I shouldn't have to be reqriting all the CSS for this site at this point after everything is largely done. My next project is going to be designed and coded from a mobile-first perspective to that as many people as possible are able to use it.