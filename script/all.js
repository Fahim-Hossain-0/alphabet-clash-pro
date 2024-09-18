function hideElementsById(elementId){
    const hideElement = document.getElementById(elementId)
    hideElement.classList.add('hidden')
}
function showElementsById(elementId){
    const hideElement = document.getElementById(elementId)
    hideElement.classList.remove('hidden')
}
function getRandomAlphabets(){
    const alphabetString = "ABCDEFGHIRJKLMNOPQSTUVWXYZ"
    const alphabets = alphabetString.split('')
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    console.log(alphabet)
}


function play(){
    hideElementsById('home-screen')
    showElementsById('play-ground')
    getRandomAlphabets
}
