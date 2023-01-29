'use strict'
//SELECTING ELEMENT
const messageEl = document.getElementById('message')
const startGame = document.querySelector('.start')
const newGame = document.querySelector('.newgame')
const summed = document.getElementById('sum-el')
const cards = document.getElementById('cards-el')
const theScore = document.getElementById('score')
const theHighScore = document.getElementById('high')
const letStartAgain = document.querySelector('.new')
const btnRules = document.querySelector('.rules')
const theRules = document.querySelector('.ruless')
btnRules.addEventListener('click', function (params) {
    theRules.classList.remove('hid') 
})
let hasBlackJack = false
let isAlive = true
let message = ``
function getramdomCard () {
    return Math.trunc(Math.random() * 11) + 1
}
let score = 0
let highScore = 0
let firstcard = getramdomCard()
let secondcard =  getramdomCard()
let card = [firstcard, secondcard]
let sum = firstcard + secondcard

//STARTING THE GAME
function startsGame () {
    renderGame()
}
const renderGame= function () {
    cards.textContent = `cards : `
    summed.textContent = `Sum :`
    firstcard = getramdomCard ()
     secondcard = getramdomCard ()
    for (let i = 0; i < card.length; i++) {
       cards.textContent += card[i] + ` ` 
    }
    summed.textContent = `Sum : ${sum}`
    if (sum <= 20) {
        message = `draw a new card`;
    } else if(sum === 21) {
       message = `correct!! blackjack`;
        hasBlackJack = true
        score++
        theScore.textContent = `score : ${score}`
        getramdomCard()
        card = [firstcard, secondcard]
        sum = firstcard + secondcard
        if (score > highScore) {
            highScore  = score;
            theHighScore.textContent =`highscore : ${highScore}`;
          }
    } else {
        message = `high!! play new game`;
     }
console.log(message);
messageEl.textContent = message

}
startGame.addEventListener('click', startsGame)


   //CHOSING A NEW CARD
    newGame.addEventListener('click', function () {
    let cardVariable = getramdomCard()
    card.push(cardVariable)
    cards.textContent = `Cards :`
    sum += cardVariable
    renderGame()
})

//RESTARTING THE GAME 
const anotherGame = function () {
    getramdomCard()
    card = [firstcard, secondcard]
    sum = firstcard + secondcard
    score = ``
    theScore.textContent = `score : ${score}`
    cards.textContent = `cards : `
    summed.textContent = `Sum :` 
    messageEl.textContent = ``;
       startGame()
}
letStartAgain.addEventListener('click', anotherGame)