'user strict';
const number = document.querySelector('.numnber');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const pista = document.querySelector('.pista');
const counter = document.querySelector('#counter');
const numberPlay = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function tryNumber(event) {
  event.preventDefault();
  let userNumber = parseInt(input.value);
  let error = parseInt(counter.innerHTML) + 1;
  if (userNumber > numberPlay && userNumber <= 100) {
    pista.innerHTML = '¿Donde vas calamar?¡DEMASIADO ALTO!';
  } else if (userNumber < numberPlay && userNumber > 0) {
    pista.innerHTML = '¡CÁSPITA ¡DEMASIADO BAJO!';
  } else if (userNumber === numberPlay) {
    pista.innerHTML = '¡HAS GANADO COLEGUI!';
  } else if (userNumber > 100 || userNumber === 0) {
    pista.innerHTML = 'Culpa mía se me olvido decir del 1 y 100,SORRY!';
  }
  counter.innerHTML = error;
}

button.addEventListener('click', tryNumber);
