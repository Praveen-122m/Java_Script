let name = "krishna"
let age = 21
let isLoggedIn = true
let city;

// Js is a dynamically typed language, which means you don't have to specify the data type of a variable when you declare it. The data type is determined automatically based on the value assigned to the variable. You can also change the data type of a variable by assigning a different type of value to it later in the code.

// Primitive Datatypes in JavaScript:
  // 7 types of primitive datatypes in JavaScript:
  // 1. String: A sequence of characters enclosed in quotes (single, double, or backticks).
  // 2. Number: Represents both integer and floating-point numbers.
  // 3. Boolean: Represents a logical entity that can be either true or false.
  // 4. Null: Represents the intentional absence of any object value.
  // 5. Undefined: Represents a variable that has been declared but not assigned a value.
  // 6. Symbol: Represents a unique identifier (introduced in ES6).
  // 7. BigInt: Represents integers with arbitrary precision (introduced in ES2020).

// Reference (Non perimitive)Datatypes in JavaScript:
    // 1. Object: A collection of key-value pairs, where the keys are strings (or Symbols) and the values can be of any type.
    const person = {
        name: "krishna",
        age: 21,
        city: "delhi"
    }
    // 2. Array: A special type of object used to store ordered collections of values.
    const arr = [1, 2, 3, 4, 5];
    // 3. Function: A block of code designed to perform a particular task, which can be invoked (called) when needed.
    const myFunction = function() {
        console.log("Hello, World!");
    }


    const id = Symbol("123");
    const newId = Symbol("123");
    console.log(id === newId); // false, because each Symbol is unique

    //Return type of variables in JavaScript
/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       /*