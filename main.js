const number = document.querySelector(".numnber");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const pista = document.querySelector(".pista");
const counter = document.querySelector("#counter");
const numberPlay = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function tryNumber(event) {
  event.preventDefault();
  let userNumber = parseInt(input.value);

  if (userNumber > numberPlay && userNumber <= 100) {
    pista.innerHTML = "Demasiado alto";
  } else if (userNumber < numberPlay && userNumber > 0) {
    pista.innerHTML = "demasiado bajo";
  } else if (userNumber === numberPlay) {
    pista.innerHTML = "¡has ganado campeona!";
  } else if (userNumber > 100 || userNumber === 0) {
    pista.innerHTML = "¡el numero debe estar entre 1 y 100!";
  }
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

button.addEventListener("click", tryNumber);
