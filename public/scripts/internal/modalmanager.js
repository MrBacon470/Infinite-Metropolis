//Custom Modal Window Manager by VoidCloud

function createAlert(title,content,color="") {
    const alertHTML = `
        <div id="alertModal" class="modalContainer${color} flexCol">
            <h2>${title}</h2>
            <p>${content}<p>
            <button id="alertModalButton">Close Alert</button>
        </div>
    `
    addHTML('gameHolder',alertHTML)
    document.getElementById('alertModalButton').addEventListener('click',() => {document.getElementById('alertModal').remove()})
}

function createPrompt(title,content) {

}

function createInput(title,content) {

}