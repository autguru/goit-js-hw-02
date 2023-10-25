"use strict";

// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

// function getSubstring(string, length) {

//     return getSubstring.slice(string, length);
//   }
//   getSubstring("Hello world", 8);

// M2
//   Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують
// до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

function normalizeInput(input, to) {
  return to == `upper` ? input.toUpperCase() : input.toLowerCase();

  // if (to == `upper`) {
  //   return input.toUpperCase();
  // } else {
  //   return input.toLowerCase();
}

console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
console.log(normalizeInput("Big SALE", "lower"));
console.log(normalizeInput("Big SALE", "upper"));

// DZ 3
// function checkForSpam(message){
//     let a = message.toLowerCase;
//     let b = message.toUpperCase;
//  if (a || b == "spam" || "sale"){
//     return true;}
//     else {
//         return false;
//     }
//  }

//   return message.toUpperCase || message.toLowerCase == spam && sale ? true : false;

// if (message == `spam` || message == `sale`) {
//   return true;
// } else {
//     return false;

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//   DZ Task4 function checkForSpam(message){
//     if (message.toLowerCase.includes("spam") ||  message.toUpperCase.includes("sale")) {
//      return `true`;
//     } else {
//       return false;
//     }
//  }

//   function calculateTotal(number) {
//     let n = 0;
//     let sum = 0;
//   while (n <= number) {
//     return sum(n += 1) ;
//       sum = n += 1;

//     }
//   }
//   calculateTotal();
//   calculateTotal(3);

//   let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// function calculateTotal(number) {
//   let n = 0;
//   let sum = 0;
// while (n <= number) {
//   console.log(n);
//   sum += n;
//     n += 1;
//   }
//   return sum;
// }
// calculateTotal();
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// for (let i = 20; i >= 0; i -= 5) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     console.log(i);
//     sum += i;
//   }
//   return sum;
// }
// calculateTotal();
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     // console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));

// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());


// calculateEvenTotal(3);
// calculateEvenTotal(7);
// calculateEvenTotal(18);
// calculateEvenTotal(27);
// calculateEvenTotal();
// повертає 0, 2, 12, 90, 182

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку 
// від start до end, яке ділиться на 5 без остачі.
const start = 17;
const end = 25;
let number;
for (let i = start; i <= end; i+=1) {

  if (i % 5 === 0) {
    number = i;
    console.log(number);

    break;
  }
  
}