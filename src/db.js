
module.exports = () => {
    
    let get_url = (url) => {
        let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        let httpreq = new XMLHttpRequest(); // a new request
        httpreq.open("GET",url,false);
        httpreq.send(null);
        return httpreq.responseText;          
    };

    db = JSON.parse(get_url('http://jsonplaceholder.typicode.com/db')); 

    return db;
    
}
