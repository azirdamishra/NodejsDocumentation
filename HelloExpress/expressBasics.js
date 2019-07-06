const express = require('express');

var app = express(); //as a function

app.get('/', (req, res) => {    //request and respond are the full forms
    //the first argument is the url that would fire the next argument which we have made a
    //function here which sends a text message as response to url /
    res.send('Hello Express!');
});

app.get('/123', (req, res) => {
    res.send('<h1> Hello Express !</h1>');
});

app.get('/234', (req, res) => {
    res.send({      //req is used to request to servers
        name: 'Adriza',
        likes: [
            'sports',
            'books',
            'music'
        ]
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'this is an error page'
    });
});

app.listen(3000);
