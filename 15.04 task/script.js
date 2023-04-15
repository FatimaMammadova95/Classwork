//1
let arr = [2, 4, -3, -43, 41, -3];
function findPositives(array) {
  array.filter((element) => element > 0);
  return array;
}
console.log(arr);

//2
function isRectangle(a, b, c) {
  let answer;
  if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    answer = "yes";
  } else {
    answer = "no";
  }
  return answer;
}
console.log(isRectangle(3, 4, 5));

//3
function fuctorial(number) {
  let fuctor = 1;
  for (let i = 1; i <= number; i++) {
    fuctor *= i;
  }
  return fuctor;
}
console.log(fuctorial(4));

//4
const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
];
function findMaxLengthArray(array) {
  let elementLength = array.map((element) => element.length);
  let maxLenght = Math.max(...elementLength);
  let maxElement = array.find(
    (element) => element.length == maxLenght && element
  );
  return maxElement;
}
console.log(findMaxLengthArray(countries));
//5
const webTechs = ["html", "CSS", "js", "react", "Redux", "Node", "MongDB"];
function upperCaseElement(array) {
  return array.findIndex(
    (element) => element.toUpperCase() === element && element
  );
}
console.log(upperCaseElement(webTechs));

//6
let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "Trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "Love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "Little",
    key: 10,
  },
];
///////
console.log(arr2.filter((item) => item.name[0] == "t"));
//////
console.log(
  arr2.filter((item) => (item.name[0] == "t") & (item.name.at(-1) == "t"))
);
//////
let lenghtArr = arr2.map((item) => item.name.length);
let maxLength = Math.max(...lenghtArr);
console.log(arr2.find((el) => el.name.length === maxLength).key);
/////
console.log(
  arr2.filter((item) => (item.name[0].toLowerCase() == "l") & (item.key > 10))
);
//////
let lenghtArr1 = arr2.map((item) => item.key);
let maxLength1 = Math.max(...lenghtArr1);
console.log(arr2.find((el) => el.key === maxLength1).name);
//////
console.log("Son");