const express = require('express');
const path = require('path');
const app = express();
const _ = require('underscore');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// get db
let get_url = (url) => {
    let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    let httpreq = new XMLHttpRequest(); // a new request
    httpreq.open("GET",url,false);
    httpreq.send(null);
    return httpreq.responseText;          
};

const db = JSON.parse(get_url('http://jsonplaceholder.typicode.com/users'));

// An api endpoint that returns a short list of items
app.get('/api/users', (req, res) => {
    res.json(db);
    console.log('sent users');
});

app.get('/api/user', (req, res) => {
    let obj = _.findWhere(db, {phone: req.query.phone});
    res.json(obj);
    console.log('sent user with phone: ' + req.query.phone);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);
