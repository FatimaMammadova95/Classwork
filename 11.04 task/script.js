//Array task
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

const arr1 = [1, true, "hello"];
console.log(arr1);

const arr2 = [1, 2, 3, 4, 5];
const arr3 = arr2;
console.log(arr2);
console.log(arr3);

const arr4 = [0, 1, 2, 3, 4, 5, 6, 7];
arr4.push(8, 9);
console.log(arr4);

const arr5 = [];
arr5.push(5, 6, 7);
arr5.shift();
arr5.unshift(2);
console.log(arr5);

const arr6 = ["Fatima", "Mammadova", 19, "Quba"];
arr6[3] = "Qusar";
//arr6[arr6.length-1] = "Qusar";
console.log(arr6);

for (let value of arr) {
  console.log(value);
}

//Object task
const obj = {
  id: 1,
  firstName: "Fatima",
  lastName: "Mammadova",
  location: "Gdu 2",
};
console.log(obj);

const obj2= obj;
console.log(obj2);

obj.id = 3
console.log(obj);

for (const value in obj) {
    console.log(obj[value]);
}

for (let key in obj) {
    console.log(key);
}

delete obj.location
console.log(obj);

const newObj = Object.assign(obj)
console.log(newObj);

const user1 ={
    name: "Fatima",
    surname: "Mammadova",
    location:{
        street: "random",
        city: "Gence"
    }    
}
//console.log(user1);

const user2 = user1;
//console.log(user2);

const users = [user1,user2]
//console.log(users);
 
user2.location.city = "Baku"
console.log(users);