const accountId = 2251331;
let Email = "parful";
var password= "password123";
accountCity = "pune";
let accountCountry; // variable declared but not assigned a value, so it is undefined

//accountId = 1234567; // const cannot be reassigned
Email = "parful123"; // let can be reassigned
// let Email = parful009; // let cannot be redeclared in the same scope
password = "newpassword";
accountCity = "mumbai"; // var can be reassigned and redeclared
/*
perfer not use var, use let and const instead
beacuse var is function scoped and can lead to unexpected behavior, while let and const are block scoped and provide better control over variable declarations.

*/
console.table([ accountCountry, accountId, Email, password, accountCity]);


let a = 10; // block scope // global scope
{
    let a = 25;
    console.log("inside a:", a); 
}
console.log("outside a:", a);