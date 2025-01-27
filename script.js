const INITIAL_SCORE = 20
const MAX_NUMBER = 20

let number, highscore, score

// el estado de mi aplicación se basa en:
// -number: número aleatorio
// score
// highscore
// si uno de estos cambia, se actualiza el DOM a posteriori

initData()

function initData() {
  score = INITIAL_SCORE
  highscore = 0
  number = Math.trunc(Math.random() * MAX_NUMBER) + 1
  console.log(number, '*****************************')
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
  const guess = Number(guessField.value)

  // si no es un número que lo corrija y tiene que estar entre 1 y 20
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('😢 Introduce un número entre 1 y 20')
  } else if (guess === number) {
    displayMessage('🎉 Número correcto!')
    numberField.textContent = number
    numberField.style.width = '30rem'
    numberField.style.fontSize = '10rem'
    numberField.style.backgroundColor = 'red'
    document.body.style.backgroundColor = 'green'
    checkBtn.disabled = true
  } else {
    if (score > 1) {
      const message =
        guess > number ? '😢 Te has pasado!' : '😢 Te has quedado corto!'
      displayMessage(message)
    } else {
      displayMessage('😢 Perdiste!')
      checkBtn.disabled = true
    }
    score--
    scoreField.textContent = score
  }
}

function displayMessage(message) {
  messageField.textContent = message
}
