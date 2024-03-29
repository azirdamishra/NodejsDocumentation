//no change made in app.js 
/* in this wode we have added and read notes using JSON and tried to counter error of no initial file for reading, 
reading corrupted data --> for this we have used try catch , and how to not write the note in the file created if the 
title of the note is the same */

console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    //new note
    var note = {
        title: title, //title property = title variable argument
        body
    };

    try {
        var noteString = fs.readFileSync('notes-data.json');
        //if noteString fails that is fine since we have already defined notes to be an empty array
        //if the file does not exist that is fine as well because its empty anyway
        //this statement gets executed
        notes = JSON.parse(noteString);
        //need not be executed as the file might contain corrupted data
    } catch (e) {

    }
    
    /* stores the notes already stored in the notes array that have the same title
     as the note we are trying to create
      notes.filter is an array method that takes in a singular argument for all the elements
      of the array (but takes them all in one by one). it  returns true if the conditions
      match and keeps that item in the array which gets stored in duplicate notes
      Else duplicate notes will be empty*/
    
    //filter here checks the value of title against the value of note.title and returns a boolean

    var duplicateNotes = notes.filter((note) => {   
        return note.title === title;
    });
    //the above statement written using es6 arrow functions will be
    //var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        //adding note to the note array
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //everytime we try to add a
        //new note the old ones get wiped out because we haven't loaded the previous ones
        //to not let that happen we use fs.readFileSync
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading note' , title);
};

var removeNote = (title) => {
    console.log('Removing note' , title);
}

module.exports = {
  addNote ,  //this is equal to addNote: addNote where the first is the object attribute and
            // the second one is its value //due to es6 syntax
    getAll,
    readNote,
    removeNote

};

