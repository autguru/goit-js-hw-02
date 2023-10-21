"use strict"

console.log("123");

// ne parne = 1 parne=0 x=9 x=12// X=8%5=3 ostacha
const x = 9;
console.log(x % 2);

// "name" - v consoli bude - name
const name = "Anna";
console.log(name);
let age = 24;
console.log(age);
const isAdmin = true;
console.log(isAdmin);

// const str = "Hello \"World\""; // string
// const num = 2048; // number
// const isAdmin = true; // boolean
// const user = null; // null
// let task; // undefined

// console.log(typeof(task));

// * - Конкатенація рядків

const firstName = "Anna";
const lastName = "Tata";

const fullName = firstName + " " + lastName;
console.log(fullName);

// ||||||

const quantity = 15;
const orderMsg = `You ordered ${quantity * 2 + "11" * 2 + "oooo"} bots`;

console.log(orderMsg);

// * - Шаблонні рядки

/** Задача 1
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */

// const companyName = "Systems";
// const repairBots = 100;
// const defenceBots = 50;

// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"

// * - Довжина рядка

// console.log(companyName[0]);
console.log(firstName.length);
console.log(firstName[0]);
// letter A
console.log(firstName[1]);
// letter n
console.log(name[0] + lastName[0]);

/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(Number(false)); // 0
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
// console.log(Boolean("")); // "undefined"

// console.log("5" + 3); // "53"
// console.log("5" + "true"); // "5true"
// console.log("5" + false); // "5false"
// console.log(5 + true); // 6
// console.log(5 + false); // 5
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // "5undefined"
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(null));

// lesson 2

console.log(typeof NaN); // number

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(Number("22.7px")); // NaN

// console.log(Number.parseInt("1232.2px")); //1232

console.log(Math.random(3));

("use strict"); // dali suvoryi regim. abo type=modul v html

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN

// console.log("5.2"**2); // 10, *, -, /, **, %
// console.log("10" - "5"); // 5

// console.log(5 + true); // 6
// console.log(5 - false); // 5

function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// 2 variants of writing
// 1
// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// 2
const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"

// Zadacha 1
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// function calcBMI(weight, height) {
//     const parcedWeight = parseFloat(weight.replace(',', '.'));
//     const parcedHeight = parseFloat(height.replace(',', '.'));

//     const bmi = parcedWeight / parcedHeight**2

//     return Math.round(bmi * 10) / 10;
// }


function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
 }
 add ();
 add(15, 27, 10);
 add(10, 20, 30);
 add(5, 10, 15);
 