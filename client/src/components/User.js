import React, { Component } from 'react';
import queryString from 'query-string';

class User extends Component {

    constructor(props) { // Initialize the state
        super(props);
        this.state = {
            user: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const url = window.location.href;
        const urlObj = queryString.parseUrl(url); // https://foo/bar?phone=111 : {url: 'https://foo/bar, query: { phone: '111'}}
        
        fetch('/api/user?phone=' + urlObj.query.phone) // fetch api
        .then(res => res.json()) // make json
        .then(json => { // loaded is true
            this.setState({
                user: json,
                isLoaded: true
           });
        });
        
        // need validation of api fetch, output null
    }

    render() {
        let { isLoaded, user } = this.state; // set props of state
        if (isLoaded) {
            return (
                <div className="App">
                    <h1>User</h1>
                    {JSON.stringify(user)}
                </div>
            )  
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default User;
