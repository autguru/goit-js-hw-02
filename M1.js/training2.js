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


  //   function checkForSpam(message){
  //     if (message.toLowerCase.includes("spam") ||  message.toUpperCase.includes("sale")) {
  //      return `true`;   
  //     } else {
  //       return false;  
  //     }
  //  }






