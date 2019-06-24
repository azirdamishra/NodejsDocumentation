//use the DRY principle when we see that we are copying and pastiong code
// DRY = dont repeat yourself
const fs = require('fs');

var fetchNotes = () => {    //creates an array
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    //new note
    var note = {
        title: title,
        body
        // the above are two ways to mean the same thing
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {    //responsible for returning all notes in the form of an array
    return fetchNotes();
};

var readNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    //.filter() takes in a function as a parameter
    return filteredNotes[0];
};

var removeNote = (title) => {

    var notes = fetchNotes(); //stores an array of all the notes
    var filteredNotes = notes.filter((note) => note.title !== title );
    //creates an array that stores all notes whose title does not match the parameter title
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}` );
};

module.exports = {
  addNote ,
    getAll,
    readNote,
    removeNote,
    logNote

};

