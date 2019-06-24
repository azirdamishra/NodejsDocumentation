const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {                    //options object starts after :
    describe: 'Title of note',    //what is to be passed in as title
    demand: true, //tells us whether this(title) is a required option
    //its default is false
    alias: 't'  //what is the shortened or another name for the argument
};

const bodyOptions = {
    describe: 'info inside the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    //we are here providing options to the users
    // this will print out onto the console when we type into the terminal node app add
    .command('add', 'add a new note', {
        title: titleOptions,
        body: bodyOptions

    })
    .command('list', 'list all nodes')
    .command('read', 'Read a note', {
       title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions,
    })
    .help()
    .argv;
var command = argv._[0];//now we are using yargs    //process.argv[2]; --> using process object
// console.log('Command: ', command);
// console.log('Yargs', argv);
// these are not required as they just print out the values of the command taken in
// and the argument

if(command === 'list'){
    var allNotes = notes.getAll(); //doesn't take in any arguments as it returns all notes regardless
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    }); //called once for each element in the notes array
    //simplifying the above statement
    // allNotes.forEach((note) =>  notes.logNote(note));
}else if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('note created');
        notes.logNote(note);
    }else{
        console.log('title taken');
    }
}else if(command === 'read'){
    var note = notes.readNote(argv.title);
    if(note){
        console.log('note was found');
        notes.logNote(note);
    }else{
        console.log('note not found');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note was not found';
    console.log(message);
} else{
    console.log('Command not recognized');
}