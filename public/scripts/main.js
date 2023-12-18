const tabNames = ['Zoning','Utilities','Services','Town Hall','Finances','Specialization','Settings']

function initGame() {
    //HTML Generation
    for(let i = 0; i < tabNames.length; i++) {
        addHTML('navBar',`<button id="navButton${i}">${tabNames[i]}</button>`)
        DOMCacheGetOrSet(`navButton${i}`).addEventListener('click',() => switchTab(i))
    }
}

function updateGame() {

}

function calculateOfflineProgress() {

}

function switchTab(id) {
    for(let i = 0; i < tabNames.length; i++) {
        DOMCacheGetOrSet(`${(tabNames[i].replace(/\s+/g,'')).toLowerCase()}Tab`).style.display = id === i ? 'block' : 'none'
        DOMCacheGetOrSet(`navButton${i}`).classList = id === i ? 'selected' : 'normal'
    }
    data.currentTab = id
}

//Start Up
window.onload = function() {
    load()
    initGame()
    calculateOfflineProgress()
    switchTab(data.currentTab)
}
//50ms Updates
window.setInterval(() => updateGame(), 50);
//30s Auto Save
window.setInterval(() => save(),30000)