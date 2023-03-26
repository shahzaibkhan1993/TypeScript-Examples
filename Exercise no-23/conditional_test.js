"use strict";
let age = 25;
let first_name = "John";
let x = 10;
let y = 5;
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let obj1 = { name: "John", age: 25 };
let obj2 = { name: "John", age: 25 };
// Test 1: Equality test
console.log("Is age equal to 25? I predict true.");
console.log(age == 25);
// Test 2: Inequality test
console.log("Is age not equal to 30? I predict true.");
console.log(age != 30);
// Test 3: Greater than test
console.log("Is x greater than y? I predict true.");
console.log(x > y);
// Test 4: Less than test
console.log("Is y less than x? I predict true.");
console.log(y < x);
// Test 5: Logical AND test
console.log("Is x greater than 5 AND y less than 10? I predict true.");
console.log(x > 5 && y < 10);
// Test 6: Logical OR test
console.log("Is x greater than 5 OR y greater than 10? I predict true.");
console.log(x > 5 || y > 10);
// Test 7: Identity test for arrays
console.log("Is array1 equal to array2? I predict true.");
console.log(array1 === array2);
// Test 8: Identity test for objects
console.log("Is obj1 equal to obj2? I predict true.");
console.log(obj1 === obj2);
// Test 9: Non-identity test
console.log("Is name not equal to 'Peter'? I predict true.");
console.log(first_name !== 'Peter');
// Test 10: Not operator
console.log("Is NOT(x less than 5) true? I predict true.");
console.log(!(x < 5));
