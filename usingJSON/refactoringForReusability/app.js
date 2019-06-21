console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];//now we are using yargs    //process.argv[2]; --> using process object
console.log('Command: ', command);
console.log('Yargs', argv);

if(command === 'list'){
    notes.getAll(); //doesn't take in any arguments as it returns all notes regardless
}else if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}` );
    }else{
        console.log('title taken');
    }
}else if(command === 'read'){
    notes.readNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
} else{
    console.log('Command not recognized');
}
