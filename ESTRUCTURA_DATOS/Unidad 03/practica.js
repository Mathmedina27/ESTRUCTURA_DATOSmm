// PREGUNTA 1
let b1 = true;
let b2 = Boolean(true);

let n1 = 1001;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;

// PREGUNTA 2
console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);

// PREGUNTA 3
let b = Boolean(BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// PREGUNTA 4
let b_sum = true + false;
let n_sum = 160 + 2001;
let bi_sum = 100n + 200n;
let s_sum = "Hello " + "World";
let u_sum = undefined + undefined;

// PREGUNTA 5
let res1 = true + 100;
let res2 = true + "100";
let res3 = 100 + "200";
let res4 = 100n + "200";

// PREGUNTA 6
const stri = 42;
console.log(`${stri} [${typeof stri}]`);