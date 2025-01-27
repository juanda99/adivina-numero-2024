const INITIAL_SCORE = 20
const MAX_NUMBER = 20

let number, highscore, score

/* seleccionar todos los elementos del DOM que necesitamos */
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const guessField = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

// el estado de mi aplicación se basa en:
// -number: número aleatorio
// score
// highscore
// si uno de estos cambia, se actualiza el DOM a posteriori

initData()

function initData() {
  score = INITIAL_SCORE
  scoreField.textContent = score
  highscore = highscore || 0
  number = Math.trunc(Math.random() * MAX_NUMBER) + 1
  console.log(number, '*****************************')
}

checkBtn.addEventListener('click', checkNumber)

againBtn.addEventListener('click', playAgain)

// si pulsamos la tecla ENTER debería pulsar el botón checkButton
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkNumber()
  }
})

function playAgain() {
  initData()
  numberField.textContent = '?'
  numberField.style.width = '15rem'
  numberField.style.fontSize = '6rem'
  numberField.style.backgroundColor = 'white'
  document.body.style.backgroundColor = '#222'
  checkBtn.disabled = false
  // actualizo el campo highscore y highscoreField con el localStorage
  // si no hay highscore en el localStorage, highscore es 0
  // highscore tiene que ser number!!!
  highscore = Number(localStorage.getItem('highscore')) || 0
  highscoreField.textContent = highscore
}

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
    if (score > highscore) {
      highscore = score
      highscoreField.textContent = highscore
      // guardamos el valor en el localStorage
      localStorage.setItem('highscore', highscore)
    }
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
