//
// let f = (a) => {
//     console.log(Math.floor(a/100))
//     console.log(Math.floor(a/10%10))
//     console.log(a%10);
// }
// f(456)

//1
const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
const getRandomLetter = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
console.log("Task 1: ", getRandomLetter(arr1));

//2
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum = 0;
let calcSum = () => {
  for (let item of arr2) {
    if (!(item % 2)) {
      sum += item;
    }
  }
  return sum;
};
console.log("Task 2: ", calcSum());

//3
const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
let getPositiveNam = function () {
  for (let i = 0; i < arr3.length; i++) {
    arr3[i] = Math.abs(arr3[i]);
  }
  return arr3;
};
console.log("Task 3: ", getPositiveNam());

//4
const arr4 = [4, 9, 16, 20, 24, 43, 81, 100];
let calcSquareRoot = () => {
  for (let i = 0; i < arr4.length; i++) {
    arr4[i] = parseInt(Math.sqrt(arr4[i]));
  }
  return arr4;
};
console.log("Task 4: ", calcSquareRoot());

//5
const arr5 = [
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
];
let filInfo = () => {
  for (let item of arr5) {
    item.name = "Fatima";
    item.surname = "Mammadova";
    item.city = "Gandja";
  }
  return arr5;
};
console.log("Task 5: ", filInfo());

//6
const minMax = (arry) => {
  let min = arry[0];
  let max = arry[0];
  for (let i = 0; i < arry.length; i++) {
    if (min > arry[i]) {
      min = arry[i];
    } else {
      max = arry[i];
    }
  }

  return `${min} ${max}`;
};
console.log(minMax([1, 5, 7, 0]));
