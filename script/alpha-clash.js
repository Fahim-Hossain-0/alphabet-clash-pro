
function continueGame(){
    const alphabet = getRandomAlphabet()
    console.log(alphabet )
    const currentAlphabet = document.getElementById("current-alphabet")
    currentAlphabet.innerText = alphabet
    setBackgroundColorById(alphabet) 
}
function play(){
    hideElementsById('home-screen')
    showElementById('play-ground')
    continueGame()
}