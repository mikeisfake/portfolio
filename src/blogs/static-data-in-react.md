---
title: Static Data in React
slug: static-data-in-react
tagline: 
tags: [gatsby, react, data]
date: 2021.05.15
---

While working on a Gatsby project recently, I found myself in need of a way to import some data into another component to display it. Typically this would be done by making an async call to your database or some external API and then using your component to translate that data to display on the DOM. In 99% of situations this is what you want, so 99% of information on this topic outlines various ways to complete this task.

However, for my particular case this was not what I wanted. The data I have is a fixed, static bit of data that I would store within the application itself, not in a database, not pulled from a third party.


This use case is not common, but should anyone be curious, here is how I accomplished this.

## **The Problem**

I am currently making a personal portfolio site to send to potential employers as I job hunt. One of the most important things in a portfolio of course is examples of your work. Currently I have about 5 projects that I would like to highlight here. The model for this data is relatively simple; each project will have a title, description, GitHub link, an optional link to the live application, an image and an `array` containing the technologies used to create it.

Since it’s only 5 or so objects I’d need for this, the idea of creating a whole backend to manage this little bit of essentially static data seemed like overkill. What I decided to do instead is manually write some `JSON` with the data I needed and store it locally in the application, in `src/data/data.json`.

## **The Setup**

The issue here is exporting JSON and using it in another component. My solution here was to simply use a JavaScript file instead. So now, my data is here.

`src/data/data.js`

and is structured like so:

```javascript
  export const Data = [
    {
      title: 'project 1',
      description: 'Lorem ipsum dolor sit amet.',
      github: 'https://github.com/account/slug',
      image: 'image1.png',
      technologies: ['ruby','html', 'css']
    },
    {
      title: 'project 2',
      description: 'Lorem ipsum dolor sit amet.',
      github: 'https://github.com/account/slug2',
      image: 'image2.png',
      technologies: ['react','redux', 'sass']
    },
    ...
  ]
```

## **The Solution**

With my data now structured like this I am free to import and use it in any React component.

This is done by adding `import { Data } from 'src/data/data'` to the top of the component, and then calling it however your need in the component.

In my application it looks somewhat like this:

```javascript
  const projects = Data.map(project => {
    return (
      // I made a separate component 
      //to handle creating individual 
      //cards for each project
      
    )
  })
```

Then, in the return of your component, you simply call `{projects}` and it should output your data formatted and styled however you like.

## **Other Uses**

This technique can be used for a variety of things. For example, I cam across a library of icons I'd like to use. Rather than hard coding them into the JSX each time I want to use them, I can simply store the icons in `src/data/icons.js` and then refer to them this way. Formatting this like a JSON object is handy because you can easily store multiple icons with useful names associated with them and simply call on them using dot notation in the JSX.

I personally am using this to add emojis easily throughout my application. I created an component that takes some props to properly format an emoji using its hexadecimal code, and I have a small library that contains the hex code associated with a simple description of that emoji for accessibility (all emoji should have a `role="img"` attribute as well as an `aria-label` for screen readers).

## **Conclusion**

This is a relatively straightforward process, but one that I found next to no information on throughout the web. Certainly nothing particularly clear. Using static data like this is not very common, but on a smaller project like mine it makes more sense than creating a whole separate backend, or calling in whole libraries of information when you only need 2-3 bits of data.