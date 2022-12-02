// 3. Assignment (Conditional Statements & Loops):

// a) Write a JavaScript program that accepts two integers and displays the larger of the two.

function integer(a, b) {
    if (a > 0 && b > 0 && a > b) {
        console.log("The larger number is " + a);
    } else if (a > 0 && b > 0 && a < b) {
        console.log("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
        console.log("Both larger are equal!");
    } else {
        console.log("Please add an integer!");
    }
}
integer(8, 12);

// b) Write a JavaScript program that checks whether an integer is an even or an odd number.

function isEvenOrOdd(n) {
    if (n % 2 == 0) {
        console.log("The number is even = " + n);
    } else {
        console.log("The number is odd = " + n);
    }
};

isEvenOrOdd(3)
isEvenOrOdd(10)


