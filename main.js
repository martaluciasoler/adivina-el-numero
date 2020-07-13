'user strict';
const number = document.querySelector('.numnber');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const pista = document.querySelector('.pista');
const counter = document.querySelector('#counter');
const numberPlay = getRandomNumber(100); // el 100 es el parametro  (max)

//esta función genera un numero aleatorio pondremos el (valor) a su constante sustitullendola por (max)
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//podemos ver su ejecucion con console.log('minumero aleatorio es,randomNumber);

function tryNumber(event) {
  // cuando vemos un parentesis despues de una función (son los parametros que se ejecutan)  even."preventDeafaun"( cumple una funcion determinada y siempre se escribe en la primera linea)

  event.preventDefault();
  let userNumber = parseInt(input.value); // parseInt o number `pasan a numero y entero'. // input.value me dará el valor del input en este caso.
  let error = parseInt(counter.innerHTML) + 1;
  if (userNumber > numberPlay && userNumber <= 100) {
    // si (userName) es mayor que (numberPlay) y (username) es menor o igual a 100
    pista.innerHTML = 'Demasiado alto'; //escribe en .pista de HTML "demasiado alto";
  } else if (userNumber < numberPlay && userNumber > 0) {
    // si (userNumber) es menor que (numberPlay) y (userName) es mayor que 0;
    pista.innerHTML = 'demasiado bajo'; //escribe en .pista de HTML "demasiado bajo";
  } else if (userNumber === numberPlay) {
    // si (userNumber) es = que (numberPlay);
    pista.innerHTML = '¡has ganado campeona!'; //escribe en .pista de HTML "has ganado campeona";
  } else if (userNumber > 100 || userNumber === 0) {
    // si (numberPlay) es mayor que 100  o (userName) = 0
    pista.innerHTML = '¡el numero debe estar entre 1 y 100!'; //escribe en .pista de HTML "el numero debe estar entre ; y 1 y 100
  }
  counter.innerHTML = error;
}

button.addEventListener('click', tryNumber); //
