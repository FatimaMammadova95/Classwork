////////// Task 1
let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"
let secretName = (arr) => {
  return arr.map((item) => item[0]).join("");
};
console.log(secretName(names1));

///////// Task 2
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

//2.1
console.log(
  users.filter(
    (item) =>
      (item.uni === "UNEC") &
      (item.surname.charAt(0).toLocaleLowerCase() === "r")
  )
);
//2.2
console.log(
  users.filter(
    (item) =>
      (+item.age === 22) & (item.name.charAt(0).toLocaleLowerCase() === "a")
  )
);
//2.3
let newArr = [...users];
users.map((item) => {
  if (item.gender === "female") {
    item.name = "Mrs." + item.name;
  } else {
    item.name = "Mr." + item.name;
  }
}),
  console.log(newArr);
//2.4
console.log(users.sort((a, b) => +a.age - +b.age));

///////// Task 3
letters = ["a", "b", "c", "d"];
numbers = [1, 2, 3, 4, 5, 6, 7];

let shuffle = (array) => {
    return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
   
};
console.log(shuffle(letters));
console.log(shuffle(numbers));


///////// Task 4
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
arr4.map(item=>item.price=item.price/2)
console.log(arr4);


///////// Task 5
let reverseNum=(num)=>{
    return 
}
console.log(reverseNum(246));