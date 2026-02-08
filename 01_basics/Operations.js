// So many types of operations in JavaScript
// Arithmetic operators: +, -, *, /, % (modulus), ** (exponentiation)
console.log(3 + 4); // Addition
console.log(10 - 2); // Subtraction
console.log(5 * 6); // Multiplication
console.log(20 / 4); // Division
console.log(10 % 3); // Modulus (remainder)
console.log(2 ** 3); // Exponentiation (2 raised to the power of 3)

// Assignment operators: =, +=, -=, *=, /=, %=
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // 15

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality checks datatype as well)
console.log(5 != '5'); // false (loose inequality)
console.log(5 !== '5'); // true (strict inequality)
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true results in true because null is converted to 0 for the comparison, and 0 >= 0 is true

// Logical operators: && (AND), || (OR), ! (NOT)
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Increment and Decrement operators: ++, --
let count = 0;
count++; // Increment by 1
console.log(count); // 1
count--; // Decrement by 1
console.log(count); // 0

// pre-increment and post-increment
let a = 5;
console.log(a++); // 5 (post-increment: returns a then increments)
console.log(a);   // 6
let b = 5;
console.log(++b); // 6 (pre-increment: increments b then returns it)
console.log(b);   // 6


let str1 = "hello";
let str2 = " world";
console.log(str1 + str2); // String concatenation

console.log("1"+2); // "12" (number 1 and 2 are converted to strings)
console.log(1+"2"); // "12" (number 1 and 2 are converted to strings)
console.log("1"+2+3); // "123" (number 2 and 3 are converted to strings)
console.log(1+2+"3"); // "33" (number 1 and 2 are added first, then converted to string and concatenated with "3")


console.log(true);
console.log(+true); // 1 (true is converted to 1)
console.log("");
console.log(+""); // 0 (empty string is converted to 0)