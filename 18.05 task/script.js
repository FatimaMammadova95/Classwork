///////////////////////////////1

// function fun1(num) {
//   let mult = 1;
//   for (let i = 1; i < num; i++) {
//     mult *= i;
//   }
//   return mult;
// }

// function fun1(num) {
//   if (num <= 0) {
//     return 1;
//   } else if (num) {
//     return num * fun1(num - 1);
//   }
// }

// console.log(fun1(4));
// console.log(fun1(5));
// console.log(fun1(0));
// console.log(fun1(-1));

///////////////////////////////2

// function fun2(num) {
//   let mult = 1;
//   for (let i = 1; i <= num; i+=2) {
//     mult *= i;
//   }
//   return mult;
// }

// function fun2(num) {
//   if (num <= 0) {
//     return 1;
//   } else if (num) {
//     return num * fun2(num - 2);
//   }
// }

// console.log(fun2(5));
// console.log(fun2(9));
// console.log(fun2(1));
// console.log(fun2(-3));

///////////////////////////////3

// function sumArray(arr){
//    return arr.flat(Infinity).reduce((acc,curr)=>acc+curr,0)
// }


function sumArray([a, ...rest]){
  return (
    (rest.length && sumArray(rest)) + (Array.isArray(a) ? sumArray(a) : a)
  );
};


console.log(sumArray([4, 9, [2, [1]], 8, 9]));
