//1
const arr1 = ["a", "b", "c", "d", "e"];
// arr1.splice(1,1)
// console.log(arr1);
// arr1.splice(2,2)
// console.log(arr1);
// arr1.splice(-1)
// console.log(arr1);
// arr1.splice(-3);
// console.log(arr1);
// arr1.splice(3,0,3,4)
// console.log(arr1);
// arr1.splice(0, 2, "A", "B");
// console.log(arr1);

//2
const arr2 = ["user1", "user2", "user3", 11, 3, 5];
// let newArr = arr2.slice(0)
// console.log(newArr);
// let newArr = arr2.slice(1, 5);
// console.log(newArr);
// let newArr = arr2.slice(2);
// console.log(newArr);

//3
const arr3 = [1, 2, 3];
const arr33 = [4, 5, 6];
// let concated = arr3.concat(arr33);
// console.log(concated);
// let newArr3 = arr3.concat(["a", "b"]);
// console.log(newArr3);

//4
const arr4 = ["name", "surname", 10, "age", "city", "uni", 80, 20];
// arr4.forEach((item) => console.log(item));
// arr4.forEach((item) => {
//   if (typeof item == "number") {
//     console.log(item * 2);
//   }
// });

//5
const arr5 = [4, 5, 6, "2", 6, true, undefined, "55"];
// arr5.map((item) => console.log(item));
// arr5.map((item) =>
//   typeof item == "number" ? console.log(item * 5) : console.log(item)
// );
// let arr5String = arr5.map((item) => {
//   return String(item);
// });
// console.log(arr5String);
// let arr5Boolean = arr5.map((item) => {
//   return Boolean(item);
// });
// console.log(arr5Boolean);
// let arr5Number = arr5.map((item) => {
//   return Number(item);
// });
// console.log(arr5Number);

//6
// const mixArray = [
//   "1",
//   2,
//   4,
//   "a",
//   false,
//   "9",
//   12,
//   "42",
//   undefined,
//   3,
//   true,
//   null,
// ];
// let result = mixArray.filter((item) => typeof item == "number");
// console.log(result);
// let result = mixArray.filter((item) => typeof item == "string");
// console.log(result);
// let result = mixArray.filter((item) => typeof item == "boolean");
// console.log(result);
// let resultFalse = mixArray.filter(item=> !item)
// console.log(resultFalse);

//7
const arr7 = [44, 3, 6, "2", 6, true, undefined, "55", null];
// let arr7Result = arr7
//   .filter((item) => Boolean(item) != false)
//   .map((item) => Number(item));
// let max = arr7Result[0];

// for (let i = 1; i < arr7Result.length; i++) {
//   if (arr7Result[i] > max) {
//     max = arr7Result[i];
//   }
// }

const result = Math.max(
  ...arr7.map((item) => Number(item)).filter((item) => item)
);
console.log(result);
