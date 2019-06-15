console.log('Starting app.js');

/*
Yargs is a 3rd party npm module which makes the process of parsing much easier. It lets us access title and body info without needing to write a manual parser. 
Yargs.argv is where the yargs library stores its version of the command line arguments
It can parse the string properly even when we enter it in different ways. 
*/

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs', argv);

if(command === 'list'){
    console.log('listing all notes');
}else if(command === 'add'){
    console.log('adding new note');
}else if(command === 'read'){
    console.log('reading notes');
}else if(command === 'remove'){
    console.log('removing notes');
} else{
    console.log('Command not recognized');
}



