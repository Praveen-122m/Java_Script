// type conversion =1

console.log(typeof "om");
console.log(typeof 211);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof ("33"));

// type conversion =2 
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
let score = "33abc"
console.log(typeof (score));
let valueINNumber = Number(score);
console.log(typeof valueINNumber);
console.log(valueINNumber);