## Javascript 1 - Terminology & Defitions - Questions and Answers.

### 1. Name the three ways to declare a variable?

var, let or const.

### 2. Which of the three variable declarations should you avoid and why?

var declarations are tricky, so they shouldn't be used. Dead code like unused variables should be removed. Variable assignment chains are also tricky since the middleware variables are all declared as global variables, so we should assign them all in their own line.

### 3. What rules should you follow when naming variables?

a) The name must contain only letters, digits, or the symbols $ and \_
b) The first character must not be a digit.
Naming variables contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

### 4. What should you look out for when using the + operator with numbers and strings?

the operator + can mean two different things, string concatenation or numeric addition.

### 5. How does the % operator work?

The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

### 6. Explain the difference between == and ===?

The difference between == and === is that: == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.

### 7. When would you receive a NaN result?

NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance: usually occurs in the cases when an expression results in a number that is undefined or can't be represented.

### 8. How do you increment and decrement a number?

the increment operator ++ increases the value of a variable by 1.
Similarly, the decrement operator -- decreases the value of a variable by 1.

### 9. Explain the difference between prefixing and post-fixing increment/decrement operators.

The prefix increment returns the value of a variable after it has been incremented. On the other hand, the more commonly used postfix increment returns the value of a variable before it has been incremented.

### 10. What is operator precedence and how is it handled in JS?

Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

### 11. How do you log information to the console?

Shortcut to acess console painel```Control + Shift + J```
The console.log() is a function in JavaScript that is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user. "https://bramus.github.io/chrome-dtt-11-demo/"

### 12. What does unary plus operator do to string representations of integers?

The Unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number

### 13. What are the eight data types in JavaScript?

JavaScript has 8 types: undefined, null, boolean, number, bigint, string, symbol, and object.

```
let name = "Fabio"; // string
let age = 44; // number
let fullName = {first:"Fabio", last:"Gomes"}; // object
let truth = false; // boolean
let language = ["HTML","CSS","JS"]; // array
let x; typeof x; // undefined
let val = null; // value null
```

### 14. Which data type is NOT primitive?

Non-primitive data types is the object.

### 15. What is the relationship between null and undefined?

Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
Undefined: It means the value does not exist in the compiler.

### 16. What is the difference between single, double, and backtick quotes for strings?

In JavaScript, single quotes (‘’) and double quotes (“”) are used to create string literals.
Backticks are mostly used for string concatenation.

### 17. What is the term for embedding variables/expressions in a string?

JavaScript string interpolation is the process of embedding an expression into part of a string. A template literal is used to embed expressions. You can add values such as variables and mathematical calculations into a string using interpolation.

### 18. Which type of quote lets you embed variables/expressions in a string?

````
Backtiks. Example: ``const student_brainnest_address = `The Studant's address is ${address}.`;```
````

### 19. How do you embed variables/expressions in a string?

Using the + operator

### 20. How do you escape characters in a string?

use the backslash ( \ ) escape character to prevent JavaScript from interpreting a quote as the end of the string.

### 21. What is the difference between the slice/substring/substr string methods?

slice() extracts parts of a string and returns the extracted parts in a new string.
substring() extracts parts of a string and returns the extracted parts in a new string.
substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

### 22. What are the three logical operators and what do they stand for?

There are three logical operators: AND , OR , and NOT.

### 23. What are the comparison operators?

Javascript Comparison Operators

```
== Equal to
=== Equal value and equal type
!= Not equal
!== Not equal value or not equal type
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
? Ternary operator
```

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In math the notation is ≠, but in JavaScript it’s written as a != b.

### 24. What are truthy and falsy values?

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN . JavaScript uses type coercion in Boolean contexts.

### 25. What are the falsy values in JavaScript?

A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string), and false.

### 26. What are conditionals?

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.

There are multiple different types of conditionals in JavaScript including:

“If” statements: where if a condition is true it is used to specify execution for a block of code.
“Else” statements: where if the same condition is false it specifies the execution for a block of code.
“Else if” statements: this specifies a new test if the first condition is false.

### 27. What is the syntax for an if/else conditional?

if (condition1) { //These statements would execute if the condition1 is true } else if(condition2) { //These statements would execute if the condition2 is true } else if (condition3) { //These statements would execute if the condition3 is true } . . else { //These statements would execute if all the conditions return

Syntax:

```
if(condition expression)
{
    //Execute this code block
}
else if(condition expression){
    //Execute this code block
}
```

### 28. What is the syntax for a switch statement?

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

### 29. What is the syntax for a ternary operator?

? called ternary operator is shorcut for, "if statement".
condition ? doThisIfTrue : doThisIfFalse // below we make object with key id, and assign it a value from body.id.
// if body.id is null it will return false and we assign it res.id.

```
{ id: body.id? body.id : res.id } // we can write it in if statement like this
if(body.id){
 return {id:body.id}
}else{
  return {id:res.id}
}
```

### 30. What is nesting?

Nesting is when you write something inside of something else. You can have a function inside of another function: function x () { function y() { // something; } } You can have an if condition inside of another if condition: if (daylight) { if (before 12) { //It's morning; } else { // it's afternoon; } }

```
Function Syntax:
function functionName(parameter1, parameter2, ...) {
	return something;
}
Chrome Devtools, shortcut Ctrl+Shift+J than open console
let side = 9
let diagonal = side * Math.sqrt(2)
console.log(diagonal) // expected output: 12.727922061357857
```

### 31. What are functions useful for?

In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A JavaScript function can be defined using function keyword.

### 32. How do you invoke a function?

This is done by including the name of the function in the code somewhere, followed by parentheses: ` <function-name>();`

### 33. What are anonymous functions?

An anonymous function is a function without a function name. Only function expressions can be anonymous, function declarations must have a name:
``` (function () {}); ````

### 34. What is function scope?

JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var , let and const are quite similar when declared inside a function. They all have Function Scope:

```
function myFunction() {
  var carName = "Volvo";   // Function Scope
}
```

### 35. What are return values?

The values that a function returns when it has completed. A return value can be any one of the four variable types: handle, integer, object, or string.

### 36. What are arrow functions?

Arrow functions are a short syntax, introduced by ECMAscript 6, that can be used similarly to the way you would use function expressions.

```
hello = (name) => { return ("Hello " + name); }
(name), //calling arrow function
```

another example,

```
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));  // expected output: Array [8, 6, 7, 9]
```
