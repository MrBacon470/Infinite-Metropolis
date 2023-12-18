function initGame() {

}

function updateGame() {

}

function calculateOfflineProgress() {

}

//Start Up
window.onload = function() {
    load()
    initGame()
    calculateOfflineProgress()
}
//50ms Updates
window.setInterval(() => updateGame(), 50);
//30s Auto Save
window.setInterval(() => save(),30000)