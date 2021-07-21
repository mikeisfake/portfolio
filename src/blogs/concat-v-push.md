---
title: concat v. push
slug: concat-v-push
tagline: Clarifying the differences and use cases
tags: [fundamentals, javascript, methods, concat, push]
date: 2021.05.01
---


I’ve been backtracking lately to look at some relatively basic things that I feel like I never really mastered or fully understood. One of those things was really understanding when to use `.push()` vs when to use `.concat()`

There are many JavaScript array methods (methods in most languages for that matter) that on the surface seem to do the same thing. In fact, in my reading to ensure my understanding here, I came across several similar situations.

The conclusion? The difference is almost always what is actually returned by the method. For example, with `.push()` vs .concat, push is mutating the original array and returning the element added to the array, while `.concat()` is going to return a new array and leave the original unchanged.

For example:

```javascript
const arr = [1,2,3,4,5]
const pushArr = arr.push(6)

console.log(pushArr) // 6
console.log(arr) // [1,2,3,4,5,6]
```

vs. using concat:

```javascript 
const arr = [1,2,3,4,5]
const concatArr = arr.concat(6)

console.log(concatArr) // [1,2,3,4,5,6]
console.log(arr)// [1,2,3,4,5]
```

It's important to remember what is actually being returned by any method you use. It's easy to overlook, but I know for me it's one of the first things I think about when i am getting unexpected resilts from some code.