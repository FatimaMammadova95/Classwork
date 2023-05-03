// let title = $("#title");
// const color = ["red", "green", "blue", "yellow", "orange", "brown"];

// ///1
// $("#changed").click(function () {
//   let random = color[Math.floor(Math.random() * color.length)];
//   title.css({ color: random });
// });

// ///2
// $("#show").click(function () {
//   title.show();
// });
// $("#hide").click(function () {
//   title.hide();
// });

// ////3
// $.each(color, function (index, value) {
//   console.log(value);
// });

// ////4
// const number = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
// sum = 0;
// $.map(number, function (value, index) {
//   if (value) {
//     sum += index;
//   }
// });
// console.log(sum);

////1
let capitalizeFirst = (str) => {
  return str
    .split(" ")
    .map((item) => (item[0] = item[0].toUpperCase() && item))
    .join(" ");
};
console.log(capitalizeFirst("This is a title"));
console.log(capitalizeFirst("capitalize every word"));

////2
let encoded = (str) => {
  return str
    .split(" ")
    .map((item) => (item.length > 4 ? item.split("").fill("*").join("") : item))
    .join(" ");
};
console.log(encoded("The code is fourty"));
console.log(encoded("Two plus three is five"));
console.log(encoded("aaaa aaaaa 1234 123456"));

////3
let clearFog = (str) => {
  const regex = /[fog]/i;
  return str
    // .split("")
    // .filter((item) => (item.test(regex) ? (item = "") : item));
  //   str = str.replaceAll("f", "");
  //   str = str.replaceAll("F", "");
  //   str = str.replaceAll("o", "");
  //   str = str.replaceAll("O", "");
  //   str = str.replaceAll("g", "");
  //   str = str.replaceAll("G", "");
  //   return str;
  // return str.split("").filter(item => item.toLocaleUpperCase()!=="F"||item.toLocaleUpperCase()!=="O"||item.toLocaleUpperCase()!=="G")
};
console.log(clearFog("sky"));
console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"));
