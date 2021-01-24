let numbers = [3, 2, 1, 12, 14, 64, 10]


// numbers = numbers.filter((item, i)=>{
//    return item % 2;
// });

// numbers = numbers.map((item, i)=>{
//    return item*10;
// });

numbers = numbers.filter((item, i) => {
   return item % 2
}).map((item, i) => {
   return item * 10
});
console.log(numbers);