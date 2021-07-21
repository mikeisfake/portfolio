---
title: What is BEM
slug: what-is-bem
tagline: Disecting the popular CSS methodology
tags: [css, methodologies]
date: 2021.06.05
---

I keep seeing BEM listed on job applications or mentioned in technical articles and I finally decided to learn what exactly they were talking about. Turns out this may be something I find really useful in future projects and I'm glad I took some time to investigate. Here's what I learned:

## **What is BEM**

BEM is a methodology that helps developers to create reuasable components and code sharing in front-end development. It stands for **B**lock **E**lement **M**odifier. What does this actually mean? I find it to be useful to look at an actual example.

```
<div class="card">
  <img src="image.png" alt=""><h2>Title</h2>
  <div class="content">
    <span>onething</span>
    <span>twothings</span>
    <span>thirdthing</span>
    <p>Lorem ipsum dolor sit amet,
     consectetur adipisicing elit.
     Rerum eum facilis assumenda est facere officia,
     minima corrupti doloremque excepturi ducimus.</p>
    <ul><li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul><button>somevalue</button>
</div>
```
Consider the markup above. This is pretty standard, but can be made a bit more effective with BEM. With this methodology, the **Block** is the `.card` div. It's a standalone entity that is meaningful on its own. **Elements** are part of a block that have no standalone meaning and are semantically tied to its parent block. In our example that everything inside the `.card`. Lastly a **Modifier** is a flag on a block or element that's used to modify appearance or behavior.

BEM uses `__` to indicate an element, and `--` to denote modifiers. In our example since the Block is `.card`, the elements inside that would all be prefixed with that so for example the `<h2>` would get the class `.card__title` and the `.content` div would get the new class name `.card__content`. Additionally if we want to add a modifier, say to the button to change it when its disabled we simply do this `.card__button--disabled`

Our example BEMified might look something like this:

```

      <img src="image.png" alt="" class="card__image">
      Title</h2>
      <div class="card__content">
        <span class="card__note">onething</span>
        <span class="card__note">twothings</span>
        <span class="card__note">thirdthing</span>
        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eum facilis assumenda est facere officia, minima corrupti doloremque excepturi ducimus.</p>
        <ul class="card__list"><li class="card__list-item"><a href="#"></a></li>
          <li class="card__list-item"><a href="#"></a></li>
          <li class="card__list-item"><a href="#"></a></li>
          <li class="card__list-item"><a href="#"></a></li>
          <li class="card__list-item"><a href="#"></a></li>
        </ul><button class="card__button card__button--disabled"></button>
      </div>
    </div>
```

## **Okay but the CSS**

The CSS for this would be pretty straightforward. Like always you simply use selectors to target the specific elements. I however love Sass and using Sass and BEM together is magical. Here's some of what the Sass might look like for this example.

```
.card {
  ...
  &__image {
    ...
  }
  &__title {
    ...
  }
  &__content {
    ...
  }
  ...
  &__button {
    ...
    &--disabled
  }
}
```

Here the nested selectors using `&` prevent us from having to write the parent selector over and over, just reference the element with its flag. And for the `--disabled` modifier we nest that within button since its specifically for that. When Sass compiles of course these will all be separated out into separate selectors that the browser can understand but as far as making sense to a human this is a vast improvement, especially for large projects where naming can quickly get out of hand and super confusing.

## **Conclusion**

BEM is a great way to avoid specificity issues when trying to style large projects, and when combined with Sass it's an awesome workflow that should reduce stress and confusion when writing code and we all want that!