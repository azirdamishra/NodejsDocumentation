console.log('starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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
