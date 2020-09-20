let step = 10;

function setCSS(element, rule, value) {
  let css = window.getComputedStyle(element)[rule].replace("px", "");

  element.style[rule] = parseInt(css) + value + "px";
}

function finish() {
  let h1 = p1.style.height.replace("px", "");
  let h2 = p2.style.height.replace("px", "");
  let hr = window.getComputedStyle(fin)["margin-top"].replace("px", "");
  let finishLine = window.innerHeight - hr;
  console.log(h1);
  console.log(h2);
  console.log(hr);
  console.log(finishLine);

  if (parseInt(h1) >= parseInt(finishLine)) {
    alert("Win player 1");
    document.removeEventListener("keyup", game);
  } else if (parseInt(h2) >= parseInt(finishLine)) {
    alert("Win player 2");
    document.removeEventListener("keyup", game);
  }
}

function game(event) {
  console.log(event.keyCode);
  if (event.keyCode == 32) {
    let h1 = p1.style.height;
    h1 = h1.replace("px", "");
    h1 = parseInt(h1) + step;
    p1.style.height = h1 + "px";

    console.log("Нажал игрок 1");
  } else if (event.keyCode == 38) {
    setCSS(p2, "height", step);
    console.log("Нажал игрок 2");
  } else {
    alert("Неправильно нажата клавиша");
  }
  finish();
}
document.addEventListener("keyup", game);