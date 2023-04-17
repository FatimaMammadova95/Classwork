////////// Task 1
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
let getUpper = (anyArr) => {
  return anyArr.map(
    (item) =>
      item[0].toUpperCase() + item.slice(1, -1) + item.at(-1).toUpperCase()
  );
};
console.log(getUpper(arr1));

///////// Task 2
let text = "We are MERN-Stack developers";

//1
console.log(text.replace("MERN-Stack", "Front-end"));
//2
console.log(text.replaceAll("e", "a"));
//3
console.log(text.concat(" in Microsoft!"));
//4
let emptyArr = text.toLocaleLowerCase().split("");
let newArr = [];
emptyArr.map((item, i) => (item === "r" ? newArr.push(i) : newArr));
console.log(newArr);
//5
console.log(text.toLocaleLowerCase().indexOf("r", 5));
//6
let vowels = ["a", "i", "o", "u", "e"];
let newArr1 = [];
vowels.map((item) => (text.includes(item) ? newArr1.push(item) : newArr1));
console.log(newArr1);

///////// Task 3
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];
console.log(
  arr3.reduce((acc, curr) => curr.region.length === 6 && acc + curr.area, 0)
);

///////// Task 4
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
console.log(arr4.sort((a, b) => a - b));

///////// Task 5
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
console.log(arr5.flat(Infinity));

///////// Task 6
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
console.log(
  colors.sort((a, b) => (a > b ? 1 : -1)).sort((a, b) => a.length - b.length)
);
