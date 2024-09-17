function play(){
    hideElementsById('home-screen')
    showElementById('play-ground')
    continueGame()
}
function continueGame(){
    const alphabet = getRandomAlphabets()
    const currentAlphabet = document.getElementById("current-alphabets")
    currentAlphabet.innerText = alphabet
}