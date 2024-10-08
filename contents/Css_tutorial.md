---
title: Css tutorial
description: In this tutorial, we are going to cover each and every topic of CSS
slug: Css_tutorial
date: 2024/10/01
image: https://th.bing.com/th?q=CSS+Icon+Pic&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NP&setlang=en&adlt=moderate&t=1&mw=247
---

# CSS Tutorial

## Introduction
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Table of Contents
1. [Selectors](#selectors)
2. [Box Model](#box-model)
3. [Flexbox](#flexbox)
4. [Grid](#grid)
5. [Typography](#typography)
6. [Colors](#colors)
7. [Backgrounds](#backgrounds)
8. [Borders](#borders)
9. [Margins and Padding](#margins-and-padding)
10. [Positioning](#positioning)
11. [Transitions and Animations](#transitions-and-animations)
12. [Media Queries](#media-queries)
13. [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
14. [Responsive Design](#responsive-design)
15. [CSS Variables](#css-variables)

## Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

```css
/* Example of a class selector */
.class-name {
  color: blue;
}

---
title: Css tutorial
description: In this tutorial, we are going to cover each and every topic of CSS
slug: Css_tutorial
date: 2024/10/01
image: 
---

# CSS Tutorial

## Introduction
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Table of Contents
1. [Selectors](#selectors)
2. [Box Model](#box-model)
3. [Flexbox](#flexbox)
4. [Grid](#grid)
5. [Typography](#typography)
6. [Colors](#colors)
7. [Backgrounds](#backgrounds)
8. [Borders](#borders)
9. [Margins and Padding](#margins-and-padding)
10. [Positioning](#positioning)
11. [Transitions and Animations](#transitions-and-animations)
12. [Media Queries](#media-queries)
13. [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
14. [Responsive Design](#responsive-design)
15. [CSS Variables](#css-variables)

## Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

```css
/* Example of a class selector */
.class-name {
  color: blue;
}

/* Example of an ID selector */
#id-name {
  color: red;
}

/* Example of an element selector */
p {
  color: green;
}

## Box Model
The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

/* Example of box model properties */
div {
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}


## Flexbox
CSS Flexbox Layout is a one-dimensional layout method for laying out items in rows or columns.

/* Example of a flexbox container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}


## Grid
CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns.

/* Example of a grid container */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}


## Typography
CSS provides various properties to style text, including font-family, font-size, font-weight, line-height, and more.

/* Example of typography properties */
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
}


## Colors
CSS supports color names, RGB, RGBA, HEX, HSL, and HSLA values to define colors.

/* Example of color properties */
div {
  color: #ff0000; /* HEX */
  background-color: rgba(0, 255, 0, 0.5); /* RGBA */
}


## Backgrounds
CSS background properties are used to define the background effects for elements.

/* Example of background properties */
div {
  background-color: yellow;
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}


## Borders
CSS border properties allow you to specify the style, width, and color of an element's border.

/* Example of border properties */
div {
  border: 2px solid black;
  border-radius: 10px;
}


## Margins and Padding
CSS margin properties are used to create space around elements, outside of any defined borders. Padding properties are used to generate space around an element's content, inside of any defined borders.

/* Example of margin and padding properties */
div {
  margin: 20px;
  padding: 10px;
}


## Positioning
CSS positioning properties allow you to position an element in the document flow.

/* Example of positioning properties */
div {
  position: absolute;
  top: 50px;
  left: 100px;
}


## Transitions and Animations
CSS transitions and animations provide a way to animate changes to CSS properties over time.

/* Example of transition */
div {
  transition: background-color 0.5s ease;
}

div:hover {
  background-color: blue;
}

/* Example of animation */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

div {
  animation: example 5s infinite;
}


## Media Queries
CSS media queries are used to apply different styles for different media types/devices.

/* Example of a media query */
@media (max-width: 600px) {
  div {
    background-color: lightblue;
  }
}


## Pseudo-classes and Pseudo-elements
CSS pseudo-classes and pseudo-elements are used to style specific parts of an element or elements in a specific state.

/* Example of pseudo-class */
a:hover {
  color: red;
}

/* Example of pseudo-element */
p::first-line {
  font-weight: bold;
}


## Responsive Design
Responsive design ensures that web pages render well on a variety of devices and window or screen sizes.

/* Example of responsive design */
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 200px;
}


## CSS Variables
CSS variables (also known as Custom Properties) allow you to store values that you can reuse throughout your CSS.

/* Example of CSS variables */
:root {
  --main-color: #06c;
}

div {
  color: var(--main-color);
}

