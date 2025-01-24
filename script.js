const INITIAL_SCORE = 20
const MAX_NUMBER = 20

initData()

function initData() {
  let score = INITIAL_SCORE
  let highscore = 0
  let number = Math.trunc(Math.random() * MAX_NUMBER) + 1
}

/* seleccionar todos los elementos del DOM que necesitamos */
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

checkBtn.addEventListener('click', checkNumber)

function checkNumber() {
  // obtenemos el número pulsado
  // si no es un número que lo corrija
  // si es un número y no es correcto... -> comprobamos score: ¿perdemos partida?
  //                                                actualizamos nuestras variables y el DOM
  // si es un número y es correcto....
}
