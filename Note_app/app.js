var validator = require('validator');
const notes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail('foo@bar.com'))
// console.log(validator.isURL('http/med.io'))
// console.log(chalk.green.bold.bgWhite.underline.inverse('success'));
yargs.version('1.1.0')


// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding note!')
// }else if (command === 'remove'){
//     console.log('Removing note!')
// }

//add, remove, read, list
//Crete remove command
yargs.command({
    command:'add',
    describe:'add a New note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
        },
        body:{
            describe:'Note body for my frist app ',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title,argv.body)
    }
})
//Remove command 
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{ 
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Read command 
yargs.command({
    command:'read',
    describe:'Read a New note',
    handler(){
        console.log('Read a new note!')
    }
})
//List command 
yargs.command({
    command:'list',
    describe:'List a New note',
    handler(){
        console.log('List a new note!')
    }
})
// console.log(yargs.argv)
yargs.parse()
