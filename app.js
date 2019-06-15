console.log('Starting app.js');

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