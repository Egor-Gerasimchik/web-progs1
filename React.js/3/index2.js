//Задание №2


let serverData = [25, "Hello", 15321, 'a', '2', true, -43.3];

let number = [];
let string = [];
let boolean = [];




serverData.forEach((item, i) => {
    if (typeof item == "number") number.push(item);
    if (typeof item == "string") string.push(item);
    if (typeof item == "boolean") boolean.push(item);
    console.log(`Element ${item} is a ${typeof item}, so I'll push it to ${typeof item}.`);
})

console.log(number);
console.log(string);
console.log(boolean);