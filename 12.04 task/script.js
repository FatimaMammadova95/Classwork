//1
let myText =
  "An Array is a collection of items of same data type stored at contiguous memory location.";
let add = 0;
for (let i = 0; i < myText.length; i++) {
  if (myText[i] == "a" || myText[i] == "A") {
    add++;
  }
}
console.log("There are x number of 'a'", add);

//2
const arr1 = [1, 2, 4, 5, 7, 9, 13, 22];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}
console.log(sum);

//3
const arr2 = [false, 0, 2, true, 23, undefined, "are u stack?", "come on"];
const newArr = [];
for (let i = 0; i < arr2.length; i++) {
  if (i % 2 == 0 && i != 0) {
    newArr.push(arr2[i]);
  }
}
console.log(newArr);

//4
let text1 = "How is it going?";
let newText = "";
for (let i = 0; i < text1.length; i++) {
  if (text1[i] !== "i") {
    newText += text1[i];
  }
}
console.log(newText);

//5
const numbersArr = [2, false, "5", "true", 9, 0, "1"];
let sum5 = 0;
for (let i = 0; i < numbersArr.length; i++) {
  if (typeof numbersArr[i] == "number") {
    sum5 = sum5 + numbersArr[i];
  }
}
console.log(sum5);

//6
const mixType = [1, "3", 4, false, null, 22, true];
let mixString = [];
for (let i = 0; i < mixType.length; i++) {
  mixString[i] = String(mixType[i]);
}
console.log(mixString);

//7
const myObj = {
  color: "red",
  width: 320,
  height: 200,
  padding: 4,
  fontSize: "22px",
};
for (let key in myObj) {
  if (typeof myObj[key] == "number") {
    myObj[key] *= 2;
  }
}
console.log(myObj);
