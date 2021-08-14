---
title: Flexbox
slug: flexbox
tagline: Unravelling the mystrious CSS layout model
tags: [CSS, flexbox, reference]
date: 2021.08.13
---

Flexbox (more formally Flexible Box Layout) is a CSS layout model that allows responsive elements to be automatically arranged within a container. It's one of the most useful ways to layout elements on a page, in my opinion often enen moreso than CSS Grid, however, for many folks it can be very mysterious and tricky to get a hold on. There's a ton of different properties and they are often reliant on one another to work. It can quickly get confusiong, and the assignments can often devolve into what I like to reder to as magic numbers where you're just fiddling with tenths values with no clear understanding of why these number s are working. 

I want to create here a relatively simple overview of the Flexbox properties and exactly what they do for reference and clarity.

### Flexbox properties

First of all, to clarify, Flexbox properties are divided into 2 categories, parent and child. The parent properties are assigned to the elements that will contain the flex item(s). For example you may have a div container and several cards within that container.

```css

.card-container {
    display: flex;
}

.card {
  flex-grow: 1;  
}
```

The above example `.card-container` is the parent and `.card` is the child.

### Flexbox parent properties

Note that any flexbox container is created using the `display` property set to `flex`. Here is a list of all the properties of a flex container:

| Property | Description |
| -------- | ----------- |
| display  | This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children. |
| flex-direction | This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns |
| flex-wrap | By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. |
| flex-flow | This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap. |
| justify-content | This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. |
| align-items | This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). |
| align-content | This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. | 

### Justify-content and align-items

Justify-content and align-items are the 2 properties that I pretty much always use when making a flexbox layout. The others all come in hands on a case by case basis, but almost always after setting display to flex I'm using one or both of those properties to finish things off. It's worth listing out the values that can be used here because there's a lot and they all are super useful. 

***justify-content***
flex-start (default): items are packed toward the start of the flex-direction.
flex-end: items are packed toward the end of the flex-direction.
start: items are packed toward the start of the writing-mode direction.
end: items are packed toward the end of the writing-mode direction.
left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.
center: items are centered along the line
space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.