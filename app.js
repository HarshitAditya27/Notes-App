const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const getNotes = require('./notes.js')

//Customize yargs version 
yargs.version('1.1.0')
//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        }
    },
    body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'remove a rule',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
//Create list command 
yargs.command({
    command: 'list',
    describe: 'list a line',
    handler: function () {
        notes.listNotes()
    }
})
//Create read command 
yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
console.log(yargs.argv)