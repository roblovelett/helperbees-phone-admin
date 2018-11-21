const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/users', (req,res) => {

    let get_url = (url) => {
        let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        let httpreq = new XMLHttpRequest(); // a new request
        httpreq.open("GET",url,false);
        httpreq.send(null);
        return httpreq.responseText;          
    };

    const db = JSON.parse(get_url('http://jsonplaceholder.typicode.com/users')); 
    
    res.json(db);

    console.log('Sent users');

});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);
