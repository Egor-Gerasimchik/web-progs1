let users = [
    ["Anna", "Bob", "Derrik", "Katya"], 
    [14, 12, 15, 24], 
    ["Moscow", "Cloverfield", "Kork", "Praha"]
];

let user1 = [];
let user2 = [];
let user3 = [];
let user4 = [];

users.forEach((item, i) => {
    item.forEach((name, idx) => {
        if(idx == 0){
            user1.push(name);
        }
        if(idx == 1){
            user2.push(name);
        }
        if(idx == 2){
            user3.push(name);
        }
        if(idx == 3){
            user4.push(name);
        }
    })
});


console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);