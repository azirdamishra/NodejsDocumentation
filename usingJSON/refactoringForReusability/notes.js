console.log('starting notes.js');

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
  addNote ,
    getAll,
    readNote,
    removeNote

};

