const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];

////1
// let falsyValue = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i]) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// console.log(falsyValue(arr));

////2
// let stringValues = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// console.log(stringValues(arr));

////3
// let sliceArr = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if ((i >= 3) & (i <= 7)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// console.log(sliceArr(arr));

////4
let sumArr = (array) => {
  let result = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i]) {
      result.push(array[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    sum = sum + result[i];
  }

  return sum;
};
console.log(sumArr(arr));

////5
// let findLastIndex = (array) => {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 8) {
//       result = 0;
//       result += i;
//     }
//   }
//   return result;
// };
// console.log(findLastIndex(arr));

////6
// let reverseArr = (array) => {
//     let result = [];
//     for (let i = array.length; i >= 0; i--) {
//       result.push(array[i])
//     }
//     result.shift()
//     return result;
//   };
//   console.log(reverseArr(arr));

////7
// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51];
// let sortArr = (array) => {
//   for (let i = 1; i < array.length; i++)
//     for (let j = 0; j < i; j++)
//       if (array[i] < array[j]) {
//         let x = array[i];
//         array[i] = array[j];
//         array[j] = x;

//       }
// };
// console.log(sortLetters(arrLetters));

////9
const arr9 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
const flatArr = (array, flatArray) => {
  flatArray = flatArray || [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArr(array[i], flatArray);
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

console.log(flatArr(arr9));

////10
// function calculator(num1, operator, num2) {
//   let result;
//   switch (operator) {
//     case "+":
//       result=num1+num2;
//       break;

//     case "-":
//         result=num1-num2;
//       break;

//     case "*":
//         result=num1*num2;
//       break;

//     case "/":
//         if (num2===0) {
//             console.log("Can't devide by 0!");
//         } else {
//             result=num1/num2;
//         }
//       break;

//     default:
//         result=0
//       break;
//   }
//   return result
// }

// obj = {
//   "+": function () {
//     return num1 + num2;
//   },
//   "-": function () {
//     return num1 - num2;
//   },
//   "*": function () {
//     return num1 * num2;
//   },
//   "/": function () {
//     return num1 / num2;
//   },
// };

// function calculator(num1, operator, num2) {
//   if (operator === "+") {
//     obj["+"];
//   }
//   if (operator === "-") {
//     obj["-"];
//   }
//   if (operator === "*") {
//     obj["*"];
//   } else {
//     if (num2 === 0) {
//       console.log("Can't devide by 0!");
//     } else {
//       obj["/"];
//     }
//   }
// }
// console.log(calculator(2, "+", 2));
// console.log(calculator(2, "*", 2));
// console.log(calculator(4, "/", 2));
// console.log(calculator(2, "/", 0));
