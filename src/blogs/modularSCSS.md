---
title: Modular SCSS
slug: modular-scss
tagline: Gushing about how much I love Sass
tags: [CSS, Sass, modular code]
date: 2021.05.29
---

I love writing Sass. I got my start writing code by created extensive stylesheets in CSS for my tumblr blog. Anyone who has created themes for tumblr knows that the process of writing your styles all in one long shot in between `<style></style>` tags within your HTML can be nighmarish at best. Everything is in one long document and the process of creating any sort of modularity/using multiple documents is certainly not intuitive or particularly consistently effective.

This was the environment that I first started to learn code in so of course you can imagine that when I learned about modularity in code; the ability to use multiple documents to break up code into task specific chunks, I was over the moon.

I've been working to create a portfolio site over the past few weeks. It's finally live and I've been sharing it with everyone I know. I could have written it using basic HTML/CSS and a tiny bit of JavaScript. Had several hard coded static HTML pages and styled each one with some complex set of various stylesheets. For the amount of content that honestly wouldn't have been a totally unreasonable solution, however, I wanted the tech stack used to create this site to be rather a bit more modern. I chose GatsbyJS as the core technology. I love React, but wanted to simplify since and SPA, while always nice, is not really needed in this instance (I have no dynamic data and only a couple of pages).

## **What is Sass**

The other primary technology I chose here is Sass. Sass is a CSS preprocessor scripting language. Essentially Sass allows you to write 'CSS' in a variety of modified ways. It takes what you wrote in Sass and translates it into regular old CSS.

A ton of Sass features have been slowly added to CSS over time, such as variables, but Sass still has a TON a functionality that it will likely be years before we see in CSS, if ever.

## **Why I love Sass**

The main reason I started using Sass was because of what I mentioned earlier, modularity. In the past I had always written CSS as one long document frequently finding that I would get lost in a spaghetti code like mess. Hundreds and hundreds of lines, random confusing selectors. It was pretty tough. There of course are standardized ways that people have learned over time to organize things, and of course you can also create a bunch of stylesheets and link them all in your HTML if you are so inclined.  I am not so inclined.

Instead, with Sass, I can link one sheet, say `index.scss` and simply write a few brief `@use` rules at the top to link whatever other documents I create.

For example, in my portfolio site I have `src/styles/index.scss` and at the top of that document I simply reference the stylesheets I created for page specific styles such as `@use './layout'`, and `@use './contact'` (notice I didn't specify '.scss' at the end of these file names. Sass assumes that for us). I also can reference various modules that contain useful snippets of code such as variables or mixins. For example I have `@use './fonts'` and `@use './colors'`

This structure is awesome for a lot of reasons. For one each document has one job, so when I need to make changes I don't have to search all over the place, I have one place to look and it's done. For example I was so indecisive about what font to use for headings all through out my site. Rather than having to go through the entire document and change the CSS rules in a million places, I have one document that takes care of all of the font stuff.

```css
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:wght@100;700&family=Roboto+Mono:wght@300&display=swap');

 $roboto: 'Roboto', sans-serif;
 $monospace: 'Roboto Mono', monospace;
 $display: 'Abril Fatface', cursive;
 ```


 What's happening here is I am importing various fonts from Google Fonts, and assigning them to variables. In order to use them in any document I simply need to `@use` it at the top of the document, and then do something like `font-family: fonts.$display` to use Abril Fatface font. If I do that several places throughout several documents, but then suddenly I decided that I wanted to use Lobster instead of Abril Fatface, I only have to make that change in one place and it applies to every document where it was referenced. Very nice!

 That's just the tip of the iceberg when it comes to the power of Sass.

## **Mixins are life changeing**

During the process of creating this site I used mixins for the first time. Mixins, similarly to variables contain bits of reusable styles, however, where variable will usually only have one CSS rule referenced, mixins can have a whole host of things inside them that you can easily reference throughout you various documents.

In this project, I used mixins in a couple of very powerful ways. I had a few elements on various pages that I wanted to be animated. I wrote some simple custom animations, but I didn't want to have to clutter up any other documents with long `@keyframes` rules. Enter mixins. Here's what I did:

1. Create a `_mixins.scss` partial in my styles directory and reference it in `index.scss`
2. Create a new mixin in the mixins document like so
```css
@mixin animations () {
  ...
}
```
3. Inside the curly braces, write your animations as you usually would.
```css
@keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform:rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
```
4. Pull animations mixin into the `index.scss` using `@include`. In this case `@include mixins.animations;`
5. Use the animation you pulled in to create a class selector.
```css
.wave {
  animation: wave 2s ease-in-out infinite both;
}
```
6. Apply this class to any element you want to animate. For example I used this animation to make a hand Emoji wave on the landing page of my site.

Using this technique you can create a whole animation library quickly and easily and be able to apply them consistently while keeping your code base clean and organized

## **CSS Libraries**

I love to write CSS. As a result, I almost never use any of the popular CSS frameworks of libraries like Bulma, Bootstrap, or Tailwind. They are awesome tools for getting things up and running quickly and consistently, but I simply enjoy writing CSS so much that I prefer not to use them. Also they are as streamlined as possible, but nothing is as trim as a library of only the specific styles you actually use. With Sass, creating a simple CSS library is super easy, and I find it a much more satisfying result since every line of that code was purpose written for my specific project. If I want to implement a border-radius on several elements and I know it needs to be 6px or 10px, I have the flexibility to just declare that as a couple of variables (maybe $radius-6 and $radius-10) and go from there.
