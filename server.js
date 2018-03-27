const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('<h1>Hello express !</h1>');
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Could not connect',
        errorCode : 15632
    })
})

app.listen(8080, () => {
    console.log('Server is up on port 8080');
});