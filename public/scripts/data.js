
function getDefaultData() {
    return {

    }
}

let data = getDefaultData();
const saveName = 'IdleCitySave'

function save() {
    window.localStorage.setItem(saveName,JSON.stringify(data))
    //TODO: Generate Notifications
}

function load() {
    let save = JSON.parse(window.localStorage.getItem(saveName))

    if(save === null || save === undefined) save = getDefaultData()
    else if(save !== undefined) fixSave(data,save)

    //Update Save File Version when applicable
}

function fixSave(defaultData=getDefaultObject(), importedData) {
    if (typeof importedData === "object") {
        Object.keys(importedData).forEach(i => {
            if (defaultData[i] instanceof Decimal) {
                defaultData[i] = D(importedData[i]!==null?importedData[i]:defaultData[i])
            } else if (typeof defaultData[i]  == "object") {
                fixSave(defaultData[i], importedData[i])
            } else {
                defaultData[i] = importedData[i]
            }
        })
        return defaultData
    }
    else return getDefaultObject()
}

function importSave() {
    //Write once I have UI lol
}

function exportSave() {
    const linkObj = document.createElement('a')
    linkObj.id = 'fileExportObject'
    
    save()
    const saveFile = new Blob([atob(JSON.stringify(data))], {type:'text/plain'})
    linkObj.setAttribute('href', URL.createObjectURL(saveFile))
    linkObj.download = `${saveName}-${new Date()}.txt`
    linkObj.click()
    URL.revokeObjectURL(linkObj)
    linkObj.parentNode.removeChild(linkObj)
}
