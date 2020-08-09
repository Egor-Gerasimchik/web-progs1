function setResultB() {
  resultA.innerHTML = inTxtB.value;
}

function setResultA() {
  resultB.innerHTML = inTxtA.value;
}

btnA.addEventListener("click", setResultA);
btnB.addEventListener("click", setResultB);