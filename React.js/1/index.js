//I

// let userName =  "Egor";
// let userBirthYear = 2007;

// console.log("Привет, " + userName + ",\nв 2025 году тебе будет " + (2025 - userBirthYear) + " лет");


// console.log("Hello this is \nnewLine")

//II

let fruits = ["Banana", "Apple", "fd"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

let fruitsReversed = fruits.reverse();
// for (let i in fruitsReversed) {
//    console.log(fruitsReversed[i]);
// }

// fruits.forEach(function(item, i) {
//    console.log(`Фрукт ${item} в позиции ${i}`)
// });

// fruits.map(function(item, i) {
//    console.log(`Фрукт ${item} в позиции ${i}`)
// });

let notEatable = fruits.map(function(item, i){
   if(item == "fd"){
      item = "Candy"
   }
   return item
})
console.log(notEatable)