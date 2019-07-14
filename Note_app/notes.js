const fs = require('fs')
const chalk = require('chalk');

const getNotes =()=> {
    return 'this my frist task in node.js'
}
const addNote =(title, body)=> {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>
    note.title === title
    )
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}
const removeNote =(title)=> {
    const notes = loadNotes()
    const removeNotes = notes.filter((note)=>
         note.title !== title)
    if(notes.length > removeNotes.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(removeNotes)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
}

const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}

