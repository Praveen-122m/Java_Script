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

console.log("1"+2); // "12" (number 1 and 2 are converted to strings)
console.log(1+"2"); // "12" (number 1 and 2 are converted to strings)
console.log("1"+2+3); // "123" (number 2 and 3 are converted to strings)
console.log(1+2+"3"); // "33" (number 1 and 2 are added first, then converted to string and concatenated with "3")


console.log(true);
console.log(+true); // 1 (true is converted to 1)
console.log("");
console.log(+""); // 0 (empty string is converted to 0)
