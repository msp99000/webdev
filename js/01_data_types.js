/*

There are two type of datatypes in Javascript
    - Primitive Data Types (immutable, stored by value)
        - string
        - number
        - boolean
        - undefined
        - null 
        - bigint
        - Symbol
    
    - Non-Primitive/Reference Data Types (mutable, stored by reference)
        - Object
        - Array
        - Function
        - Date

*/


// 1. Primitive Data Types (Immutable, Stored by Value)

let myName = "Hunter"; // string
let age = 30; // number
let isAdult = true; // boolean
let state; // undefined
let education = null; // null

console.log(`The type of "name" is ==> ${typeof myName}`);
console.log(`The type of "age" is ==> ${typeof age}`);
console.log(`The type of "isAdult" is ==> ${typeof isAdult}`);
console.log(`The type of "state" is ==> ${typeof state}`);
console.log(`The type of "education" is ==> ${typeof education}`);

// 1.1. Numbers

let a = 42; // integer
let b = 42.5; // floating-point
let c = 1e3; // 1000
let d = NaN; // Not a Number
let e = Infinity; // Infinity

// Big Int (Used for numbers beyond 2^53 - 1)
let bigNumber = 123456789012345678901234567890n;

/*

bigNumber cannot be added to normal number 
for eg: 
console.log(bigNumber + 2);  ❌
console.log(bigNumber + 2n); ✅

*/

console.log(`The type of "bigNumber" is ==> ${typeof bigNumber}`);

// Template literals
let string1 = "Hello";
let string2 = "New";
let string3 = `${string1} ${string2} World!`;

console.log(`The resultant string literal is "${string3}"`);

// Symbol (used for unique identifiers)

let sym1 = Symbol("id");
let sym2 = Symbol("id");

/*

Since "Symbol" is for unique identifiers, therefore sym1 ≠ sym2
so console.log(sym1 === sym2) will return `false`

*/

console.log(`Are sym1 and sym2 equal? (sym1 === sym2) ==> ${sym1 === sym2}`);


// 2. Non-Primitive/Reference Data Types (mutable, stored by reference)
