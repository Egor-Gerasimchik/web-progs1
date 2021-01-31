//let array = [7, 10, 14, 17, 17, 6, 14, 12, 3, 14, 15, 4, 16, 4, 19]; 
// let arr = ["sdvfbgn", "Biden"]
// let [a, b] = arr;
// console.log(a,b)
// arr = [1, 2, 3, 4];
// let [c] = arr;
// let [ , d, , e] = arr;
// console.log(c, d, e)

///////////////////////////////

// let array = [7, 10, 14, 17, 17, 6, 14, 12, 3, 14, 15, 4, 16, 4, 19];
// let [o, e] = [array.filter((item, i)=>{return item % 2}), array.filter((item, i)=>{return item % 2==0})];
// console.log(o, e);

///////////////////////////////

let serverData = [25, "Hello", 15321, "a", "2", true, -43.3];
let [boolean, digit, str] = [serverData.filter((item, i)=>{return typeof item == "boolean"}), serverData.filter((item, i)=>{return typeof item == "number"}), serverData.filter((item, i)=>{return typeof item == "string"})];


console.log(boolean, digit, str);

