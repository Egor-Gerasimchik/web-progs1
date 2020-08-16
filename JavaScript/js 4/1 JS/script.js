let step = 10;

function game(event) {
  console.log(event.keyCode);
  if (event.keyCode == 32) {
    console.log("Нажал игрок 1");
  } else if (event.keyCode == 38) {
    console.log("Нажал игрок 2");
  } else {
    alert("Неправильно нажата клавиша");
  }
}

p1.addEventListener("keyup", game);
p2.addEventListener("space", game);

document.addEventListener("keyup", game);
