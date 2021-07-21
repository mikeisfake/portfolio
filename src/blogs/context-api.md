---
title: Context API
slug: contex-api
tagline: Learning about React's Context API
tags: [context api, react, research, state management]
date: 2021.07.03
---

In the past, when working in React, regarding state management, I had only used Redux. This week as a part of the project I’ve been working on, I had the opportunity to use Context instead. After a bit of practice and research, I find it far more intuitive and simpler to implement than using something as bulky as Redux. 

Here’s what I learned:

At a high level, React comes built in with a hook that allows us to pass state as props to any component and all of its children. This allows us to avoid prop drilling if we need state in multiple places. It also allows us to initialize some piece of state totally outside of the component and easily consume that state between sibling components as well.

My implementation of this was relatively simple. I created a separate directory under `src` called contexts and inside this directory created a file called `UserContext.js` (in this instance the state I wanted to manage was a logged in users information, but if I needed to manage some other state I could create another file in the directory too).

In this file I imported 2 things from react, `useState` and `createContext`

Creating the actual context is a simple as this:

`export const UserContext = createContext()`

That’s really it, however there is no real functionality here. The pattern I discovered that I like and decided to use was to also export from this file as default a Provider function that would return the actual provider needed for other components to consume from.

This provider function will have other functions inside it that allow components to read and update state or any number of other things I want to pass down to them. The Provider will take all of these functions/varibles/etc into its values prop and pass them down to the consuming component using the `useContext` hook.

In this case I just created a login and logout function. I also declared a piece of state for `user` and passed all those a values into the provider allowing me to access any of these things from any component i tell to consume from this file.

Easy as that! Much less overhead than Redux and perfect for a relatively small project like this. 