function onSubmit(event) {
  event.preventDefault();
  story.innerHTML = event.target.id;
  let form = event.target;
  console.log(event.target);
  let name = form.userName.value;
  let age = form.userAge.value;
  let from = form.userFrom.value;
  let like = [];

  console.log("name: " + name);
  console.log("age: " + age);
  console.log("from: " + from);

  console.log("like: " + like);

  let sA = "Жил был, человек по имени " + name + ".";
  let sB = " Был он из " + from + ".";
  let sC = " Было ему " + age + ".";

  let userLike = document.getElementsByName("userLike");

  for (let i = 0; i < userLike.length; i++) {
    if (userLike[i].checked) {
      like.push(userLike[i].value);
    }
  }
  let sD = "Нравилось ему " + like + ".";
  story.innerHTML = sA + sB + sC + sD;
}

popitka.addEventListener("submit", onSubmit);
