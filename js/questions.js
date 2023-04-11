import { questions } from './data.js'
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

/*render: 화면에 출력함. 10개의 각질문들을 하나씩 가져와 출력해주는 함수  */
function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  //mbti = ''+'i'
  currentNumber = currentNumber + 1
  console.log('currentNumber=' + currentNumber)

  if (currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  renderQuestion()
}
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti  //쿼리스트링
}

choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})


renderQuestion()