let obj = {};
console.log(obj);

obj["grade"] = 5;
obj["name"] = "Demid";
console.log(obj);

obj["grade"]
obj.name
console.log(obj["grade"], obj.name)

obj["print"] = ()=>{
    console.log("hi my grade =", obj.grade);
}
obj.print();
console.log(obj);

obj["innerObj"] = {
    "digit": -258,
    boolean: true,
    print: ()=>{
        console.log("Я внутренний объект")
    }
}
obj.innerObj.print();
console.log(obj);


// const users = [
//     ["Anna", "Bob", "Derrik", "Katya"], 
//     [14, 12, 15, 24],
//     ["Moscow", "Cloverfield", "Kork", "Praha"]
// ];

// users = {};
// users["name"] = ["Anna", "Bob", "Derrik", "Katya"];
// users["city"] = ["Moscow", "Cloverfield", "Kork", "Praha"];
// users["age"] = [14, 12, 15, 24];

let users = {
    Anna: {
        age: 14,
        city: "Moscow"
    },
    Bob: {
        age: 12,
        city: "Cloverfield"
    },
    Derrik: {
        age: 15,
        city: "Kork"
    },
    Katya: {
        age: 24,
        city: "Praha"
    }
}
for (let key in users) {
    console.log(key)
    console.log(`Пользователь ${key} живёт в ${users[key].city}`)
}