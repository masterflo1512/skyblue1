// let shopping = ["pain", "lait", "fromage", "houmous", "nouilles"];

// console.log(shopping[0]);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // shopping[0] = "crème de sésame";
// // console.log(shopping);

// // let random = ["arbre", 795, [0, 1, 2]];

// // console.log(random[2][2]);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // let arr = [1, 2, 3, 1];
// // function getDubleElement(array, value) {
// //   return array.filter((v) => v === value).length;
// // }
// // console.log(getDubleElement(arr, 1));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // var arr = [1, 2, 3, 1];

// // function getCount(arr, par) {
// //   let count = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     let count = arr[i];
// //   }
// //   return count;
// // }
// // getCount([1, 2, 3, 1], 1);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // const getCount = (arr, par) => {
// //   let count = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === par) {
// //       count++;
// //     }
// //   }
// //   return count;
// // };
// // console.log(getCount([1, 2, 3, 1], 1));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // function repeatStringNumTimes(str, num) {
// //   return str.repeat(num);
// // }

// // console.log(repeatStringNumTimes("Hello ", 5));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // function repeatStringNumTimes(str, num) {
// //   let rep = "";
// //   for (let i = 0; i < str; i++) {
// //     rep += str;
// //   }
// //   return rep;
// // }

// // console.log(repeatStringNumTimes("Hello ", 5));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // function repeatString(str, num) {
// //   let repString = "";
// //   let i = 0;
// //   while (i < num) {
// //     repString += str;
// //     i++;
// //   }
// //   return repString;
// // }

// // repeatString("Hello ", 5);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // getEvenNumbers([1,2,100,121,133,200])

// // const getEvenNumbers = number => {
// //   return number % 2;
// // }

// // const restOfdivideByTwo = number => {
// //   return number % 2;
// // };

// // const evenNumber = (number) => {
// //   return number % 2 === 0;
// // };

// // const filterEvenNumbers = (numbers) => {
// //   const evenNumbers = [];

// //   for (let i = 0; i < numbers.length; i++) {
// //     // console.log("for", numbers[i]);
// //     if (evenNumber(numbers[i])) {
// //       evenNumbers.push(numbers[i]);
// //       // console.log("if", numbers[i]);
// //     }
// //   }

// //   return evenNumbers;
// // };
// // console.log(filterEvenNumbers([1, 4, 6, 7]));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // function getEvenNumbers(array, number) {
// //   const newArray = [];
// //   for (let i = 0; i < Number.length; i++) {
// //     if (array[i] % 2 === 0) {
// //       newArray.push(array[i]);
// //     }
// //   }
// //   return newArray;
// // }
// // console.log(getEvenNumbers([1, 2, 100, 121, 133, 200]));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // function getEvenNumbers(array) {
// //   let newArray = [];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] % 2 === 0) {
// //       newArray.push(array[i]);
// //     }
// //   }
// //   return newArray;
// // }
// // console.log(getEvenNumbers([1, 2, 100, 121, 133, 200]));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // let data = [1, 2, 1, 2, 3];
// // let uniqueData = [...new Set(data)];

// // console.log(uniqueData);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // let a = [1, 2, 3, 1, 2];
// // let b = new Set(a);
// // console.log(b);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // let data = [1, 2, 1, 2, 3];
// // let uniqueData = data.filter((c, index) => {
// //   return data.indexOf(c) === index;
// // });

// // console.log(uniqueData);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // let data = [1, 2, 1, 2, 3];
// // Array.from(new Set(data));
// // console.log(data);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // const array = ['🐑', 1, 2, '🐑', '🐑', 3];

// // Array.from(new Set(array));
// // console.log(???)

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let data = [1, 2, 1, 2, 3];

// let uniqueData = data.filter((value, index) => {
//   return data.indexOf(value) === index;
// });

// console.log(uniqueData);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let data = [1, 2, 1, 2, 3];
// let uniqueData = [];
// for (let i = 0; i < data.length; i++) {
//   if (uniqueData.indexOf(data[i]) === -1) {
//     uniqueData.push(data[i]);
//   }
// }

// console.log(uniqueData);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let data = [1, 2, 1, 2, 3];
// let uniqueData = [];
// data.forEach((item) => {
//   if (!uniqueData.includes(item)) {
//     uniqueData.push(item);
//   }
// });
// console.log(uniqueData);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Current Index -> indexOf(),
// For value “Lion”, we have: 0 -> 0, 4 -> 0. (Equality doesn’t holds)
// For value “Rabbit”, we have: 1 -> 1. (Equality holds, unique element)
// For value “Mouse”, we have: 2 -> 2. (Equality holds, unique element)
// For value “Monkey”, we have: 3-> 3. (Equality holds, unique element)
// For value “Ape”, we have: 5 -> 5. (Equality holds, unique element)
// Filtered these unique elements and stored them in a unique array and returned them.
// // Remove duplicates in array using filter method
// let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]
// let usingFilter = () => {
// return unique = animals.filter(function(item,index){
//       return animals.indexOf(item) == index;
//    });
// }
// console.log(usingFilter())
// Output: ['Lion', 'Rabbit', 'Mouse', 'Monkey', 'Ape']

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let reverse = [1, 2, 3, 4];
// function reverse(array) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.reverse();

console.log(reversedNumbers);

But keep in mind that the reverse method will also modify the original array:
console.log(numbers);
// [5, 4, 3, 2, 1]

how you can reverse an array without changing the original?
1_Spread Operator:
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

console.log(numbers);
// [1, 2, 3, 4, 5]
2_The slice method :
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

console.log(numbers);
// [1, 2, 3, 4, 5]        */

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function reverse(array) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(reverse([1, 2, 3, 4]));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let myFreinds = [1, 2, "max", "mat", "eve"];
// let onlyNames = [];

// // if (typeof myFreinds[0] === "string") {
// //   onlyNames.push(myFreinds[0]);
// // }
// // if (typeof myFreinds[1] === "string") {
// //   onlyNames.push(myFreinds[1]);
// // }
// // if (typeof myFreinds[2] === "string") {
// //   onlyNames.push(myFreinds[2]);
// // }

// // console.log(onlyNames);
//     *******************************

// let myFreinds = [1, 2, "max", "mat", "eve"];
// let onlyNames = [];
// for (let i = 0; i < myFreinds.length; i++) {
//   if (typeof myFreinds[i] === "string") {
//     onlyNames.push(myFreinds[i]);
//   }
// }

// console.log(onlyNames);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const getFirstValue = [1, 2, 3];
console.log(getFirstValue[0]);
