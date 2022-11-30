## JavaScript Assignments


### 1. Read more about JS and try to answer as many questions as you can from the JS1 - Terminology & Definitions file, which you can find attached in the email.

https://github.com/fabiolpgomes/Training_Brainnest_JS/blob/main/js_assignments/js_questions_answers.md


### 2. Assignment (Mathematical Shapes):
#### a. Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

```
Chrome Devtools, shortcut Ctrl+Shift+J than open console
let side = 9
let diagonal = side * Math.sqrt(2)
console.log(diagonal.Math.randow) // expected output: 12.727922061357857
```

#### b. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

```
let a = 5
let b = 6
let c = 7
let p=(a+b+c)/2 // expected output: 9
area=Math.sqrt(p *(p-a)*(p-b)*(p-c)) // expected output: 14.696938456699069
```

#### c. Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
*When trying to find these values, you will need to use PI. Remember constants?

```
const pi = 3.14             // π = pi = 3,141592653
let radius = 4
let circum = 2 *pi *radius //circum= circumference
console.log(circum)       // expected output: 25.12

let area = pi *radius**2 
console.log(area)        // expected output: 50.24
```

#### 3. Assignment (Conditional Statements & Loops):
a) Write a JavaScript program that accepts two integers and displays the larger of the two.
```
function integer(a,b) { 
    if (a > 0 && b > 0 && a > b) 
    { document. write("The larger number is " + a ); 
    } else if (a > 0 && b > 0 && a < b) 
    { document. write("The larger number is " + b); 
    } else if (a === b && a > 0 && b > 0) 
    { document. write("Both numbers are equal!") 
    } else { document.write("Please add an integer!");
  }
}

integer(5,10);
```



b) Write a JavaScript program that checks whether an integer is an even or an odd number.