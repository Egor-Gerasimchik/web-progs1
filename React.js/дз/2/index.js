let serverData = [24, "User", false, 85, -5, 0, 45, "google.com"];

let userInfo;
let digits = [];
let url;

serverData.forEach((item, i) => {
   if (typeof item == "string"){
      if (item.indexOf('.') == -1){
         url = item;
      } else {
         userInfo = item;
      }
   }
   if (typeof item == "number"){
      digits.push(item);
   }
});

console.log(userInfo);
console.log(digits);
console.log(url);


