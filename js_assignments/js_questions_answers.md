## CSS - Terminology & Defitions - Questions and Answers.

### 1. Name the three ways to declare a variable?

var, let or const.

### 2. Which of the three variable declarations should you avoid and why?

var declarations are tricky, so they shouldn't be used. Dead code like unused variables should be removed. Variable assignment chains are also tricky since the middleware variables are all declared as global variables, so we should assign them all in their own line.

### 3. What rules should you follow when naming variables?

a) The name must contain only letters, digits, or the symbols $ and _
b) The first character must not be a digit.
Naming variables  contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

### 4. What should you look out for when using the + operator with numbers and strings?

the operator + can mean two different things, string concatenation or numeric addition.

### 5. How does the % operator work?

The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

### 6. Explain the difference between == and ===?

The difference between == and === is that: == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.

### 7. When would you receive a NaN result?

The CSS box model represents the design and layout of the site. It consists of margins, borders, paddings, and the actual content. The properties work in the same order: top, right, bottom, and left. The term "box model" is used when talking about design and layout.

### 8. What does the box-sizing CSS property do?

The box-sizing property allows us to include the padding and border in an element's total width and height. If you set box-sizing: border-box; on an element, padding and border are included in the width and height.

### 9. What is the difference between the standard and alternative box model?

If you are using the standard box model, the size of the border is added to the width and height of the box. If you are using the alternative box model then the size of the border makes the content box smaller as it takes up some of that available width and height.

### 10. Would you use margin or padding to create more space between 2 elements?

Use margins when you're adjusting the spacing of an element in relation to another element.

### 11. Would you use margin or padding to create more space between the contents of an element and its border?

Padding is the space inside of an element

### 12. Would you use margin or padding if you wanted two elements to overlap each other?

use margin to create space between items on a webpage, such as between a photo and the words describing it. They also use margin to change the amount of space between items, prevent elements from touching, overlap elements and center an element horizontally in its space.

### 13. What is the difference between a block element and an inline element?

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
An inline element does not start on a new line, only takes up as much width as necessary.

### 14. What is the difference between an inline element and an inline-block element?

Inline , the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.

### 15. Is an h1 block or inline?

```
<p> <div> <h1> < h2> <address> etc are block level elements
<b>, <strong>, <i>, <span>, <u> and <s> are inline level elements.
```

### 16. Is button block or inline?

Most browsers display button elements as inline-block by default.

### 17. Is div block or inline?

```
The <div> element is a block-level element.
```

### 18. Is span block or inline?

span is an inline element.

### 19. What’s the difference between a flex container and a flex item?

Flex Container is the parent element while Flex Item represents the children

### 20. How do you create a flex item?

To create a flex container, we set the value of the area's container's display property to flex or inline-flex .

### 21. What are the 3 values defined in the shorthand flex property?

flex-grow is 0, flex-shrink is 1 and flex-basis is 0%.

### 22. How do you make flex items arrange themselves vertically instead of horizontally?

By default items start from the left if flex-direction is row , and from the top if flex-direction is column . You can change this behavior using justify-content to change the horizontal alignment, and align-items to change the vertical alignment.

### 23. What is the difference between justify-content and align-items?

First, align-items is for items in a single row. So for a single row of elements on main axis, align-items will align these items respective of each other and it will start with fresh perspective from the next row.
Now, align-content doesn't interfere with items in a row but with rows itself. Hence, align-content will try to align rows with respect to each other and flex container.

### 24. How do you use flexbox to completely center a div inside a flex container?

display: flex;
align-items: center;
justify-content: center;

### 25. What’s the difference between justify-content: space-between and justify-content: space-around?

justify-content: space-between => Distribute items evenly The first item is flush with the start, the last is flush with the end;

justify-content: space-around => Distribute items evenly Items have a half-size space on either end.
