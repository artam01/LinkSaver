

let hasBlackJack = false
let isAlive = false
let cards = []
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name :"Per",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function startGame(){
    isAlive = true
    firstCard = getRandom()
    secondCard = getRandom()
    console.log(firstCard)
    console.log(secondCard)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    cardsEl.textContent = "Cards: "+cards
    sumEl.textContent="Sum: " + sum
    console.log(sum)
    renderGame()

}

function newCard(){
  
   if (isAlive === true && hasBlackJack === false){
  
     let card =getRandom()
     sum += card
     cards.push(card)
     renderGame()
    }
}
function getRandom(){
    let randomNumber = Math.floor( Math.random() *  13) + 1

    if(randomNumber >10){
        return 10
    }
   else if (randomNumber===1) {
        return 11
    }else{

    return randomNumber
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i=0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
 sumEl.textContent="Sum: " + sum
if (sum <= 20){
    message = ("Do you want to draw a new card?")
}else if(sum === 21){
     message = ("wohooo! You are a winner!") 
    hasBlackJack = true
}else{
    message = ("You're out of the game!") 
    isAlive = false
}

messageEl.textContent=message
}

let hands = ["rock", "paper","scissor"]

function getHand(){
    let randomIndex=Math.floor(Math.random() *3)
    return hands[randomIndex]
}

console.log(getHand())