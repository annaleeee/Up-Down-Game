let computerNumber = 0
let gameOver = false
let chance = 7
let ListArray = []

let userInput = document.getElementById('user_input')
let resultArea = document.getElementById('result_area')
let chanceArea = document.getElementById('chance_area')
let goButton = document.getElementById('go_button')
let resetButton = document.getElementById('reset_button')

goButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function() {
    userInput.value = "";
})
userInput.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        play()
        userInput.value = "";
    }
})

function randomNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1
    console.log(computerNumber)
}

function play() {
    const USER_VALUE = userInput.value 
    console.log(USER_VALUE) 
    if(USER_VALUE < computerNumber) {
        resultArea.textContent = "Up ↑" 
    } else if(USER_VALUE > computerNumber) {
        resultArea.textContent = "Down ↓"
    } else {
        resultArea.textContent = "정답"
        gameOver = true
    }
    if(USER_VALUE < 1 || USER_VALUE > 100) {
        resultArea.textContent = "1 ~ 100 사이의 숫자를 입력하시오"
        return
    }
    if(ListArray.includes(USER_VALUE)) {
        resultArea.textContent = "이미 있는 값입니다. 다른 숫자를 입력하세요."
        return
    }
    chance--
    ListArray.push(USER_VALUE) // 중복된 숫자가 아니여야 입력
    chanceArea.textContent = `남은 기회 : ${chance}번`
    
    if(chance == 0) {
        gameOver = true
    }
    if(gameOver == true) {
        goButton.disabled = true
    }
}

function reset() {
    randomNumber() // 새로운 랜덤 숫자
    resultArea.textContent = "결과창"
    chance = 7
    chanceArea.textContent = `남은 기회 : ${chance}번`
}

randomNumber()
