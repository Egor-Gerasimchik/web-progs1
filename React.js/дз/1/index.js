// Задание №1


let numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18]
//нечётные odd
//чётные even


let odd = numbers.filter((item, i)=>{
   return item % 2
})

let even = numbers.filter((item, i)=>{
   return item % 2 == 0
})


odd = even.map((item, i) => {
   return item ** 3              //нечётные числа возводим в 3 степень **
});
console.log(odd);

even = even.map((item, i) => {
   return item / (i+1)**2        //чётным числам порядковый номер +1 т.к на 0 делить плохо
});
console.log(even);





