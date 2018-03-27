const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home',
        userName: 'Sarath'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle : 'About'
    })
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