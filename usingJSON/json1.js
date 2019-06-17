//this file is just an introduction to working with JSON

/*
var obj = {
    name: 'Adriza'
};

var StringObj = JSON.stringify(obj);    //StringObj is no longer an object but is now a string
console.log(typeof StringObj);
console.log(StringObj);
// the above is pretty similar to a javascript object but the object attribute is now in double
// quotes --> requirement of the json syntax. THe string part is also wrapped in single quotes
// as opposed to double quotes
console.log(obj);   */

/*
var personString = '{"name": "Adriza" , "age": 25}';
// used single quotes to make it a string
//{} --> used to define JSON
// use " " to set our first attribute - name
//an integer entered in JSON format doesn't have double quotes on it
//also personString.name does not exist because it is not an object
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); // returns an object
 */

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var newNoteString = fs.readFileSync('notes.json');
var note = JSON.parse(newNoteString);
console.log(note);
console.log(note.title);


