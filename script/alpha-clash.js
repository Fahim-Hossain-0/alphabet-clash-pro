function handleKeyboardButtonPress(event) {
    const playerPressed = event.key
    if(playerPressed==='Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1
        setTextElementValueById('current-score',updateScore)
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1
        setTextElementValueById('current-life',updateLife)
        if(updateLife === 0){
            gameOver()
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)
function play() {
    hideElementById('home-screen');
    hideElementById('score')
    showElementById('play-ground');
    setTextElementValueById('current-score',0)
    setTextElementValueById('current-life',3)

    continueGame();
}
function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('score')
    const finalScore = getTextElementValueById('current-score')
    console.log(finalScore)
    setTextElementValueById('final-score',finalScore)
    const currentAlphabet = getElementTextById('current-alphabet')
    console.log( "player",currentAlphabet)
    removeBackgroundColorById(currentAlphabet)
}