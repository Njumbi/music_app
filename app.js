const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const axios = require('axios');
const {
    report
} = require('process');

const MUSIC_KEY = ""

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res, next) => {
    // get music data
    res.render('trends', {
        path: "trends",
        song: "songs",

    })
})


app.listen(7000, () => {
    console.log('app started')
})