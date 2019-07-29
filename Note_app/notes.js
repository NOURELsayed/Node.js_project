const fs = require('fs')
const chalk = require('chalk');

const getNotes =()=> {
    return 'this my frist task in node.js'
}
const addNote =(title, body)=> {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note)=>
    note.title === title)
    debugger
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
const readNote  =(title, body)=> {
    const notes = loadNotes()
    const note = notes.find((note)=>
    note.title === title
    )
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
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
const  ListNote =(title)=> {
    const notes = loadNotes()
        console.log(chalk.red.inverse('your Notes'))
        notes.forEach((note)=> {
            console.log(note.title)
        });
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
    removeNote: removeNote,
    ListNote: ListNote,
    readNote:readNote
}

