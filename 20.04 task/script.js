// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = [
  "d",
  7,
  "1",
  "7",
  7,
  0,
  "c",
  "a",
  undefined,
  7,
  "3",
  false,
  1,
  null,
];

//1.1
// console.log(arr.splice(1, arr.length-2));
//1.2
console.log(arr.slice(-3));
//1.3
console.log([true, "8", "myName"].concat(arr));
//1.4
console.log(arr.indexOf(7, 2));
//1.5
console.log(arr.filter((item) => item));
//1.6
console.log(
  arr
    .filter((item) => typeof item === "number")
    .reduce((acc, curr) => acc + +curr, 0)
);
//1.7
console.log(arr.filter((item) => !item).length);

// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.1
const findSmallest = (inks) => {
  return Math.min(...Object.values(inks));
};
console.log(
  findSmallest({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
); // 10

console.log(
  findSmallest({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
); // 432

console.log(
  findSmallest({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  })
); // 0
//2.2
const maxNums = (arr) => {
  return arr.map((item) => Math.max(...item));
};
console.log(
  maxNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
); //[7, 90, 2]
console.log(
  maxNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ])
); // [-34, -2, 7]

//2.3
const findLetterIndex = (text, letter) => {
  return [text.indexOf(letter), text.lastIndexOf(letter)];
};
console.log(findLetterIndex("hello", "l")); // [2,3]
console.log(findLetterIndex("happy", "h")); //[0, 0]

//2.4
const checkNum = (arr, n) => {
    for (i = 0; i < arr.length - 1; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == n) {
          return true;
        }
      }
    }
    return false;  
};
console.log(checkNum([10, 12, 4, 7, 9, 11], 16)); //true
console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false


function insertwhiteSpace(param){    
   return param.split("").map(item=>item.toLocaleUpperCase()===item?item=" "+item:item).join("").trim()
}
console.log(insertwhiteSpace("SheWalksToTheBeach"));