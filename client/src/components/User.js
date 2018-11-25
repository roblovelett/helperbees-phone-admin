import React, { Component } from 'react';
import express from 'express';

class User extends Component {

    constructor(props) { // Initialize the state
        super(props);
        this.state = {
            user: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        const queryParser = express();

        const phone = queryParser.get('/user?phone=:phone', (req, res) => { //GET /user?phone=111-111-1111 x111
            /*
                react router removed query prop, using express for parsing 
                (see: https://expressjs.com/en/api.html#req.query)
                
                    "As req.query’s shape is based on user-controlled input, 
                    all properties and values in this object are untrusted 
                    and should be validated ..."
                
                Use "express-validator" package in this instance, but limited 
                in time for dev.
            */
           res.send(req.query.phone);
        });
        
        fetch('/api/user?phone=' + phone) // fetch phone thru api
        .then(res => res.json()) // make json
        .then(json => { // loaded is true
            this.setState({
                user: json,
                isLoaded: true
            })
        });
    }

    render() {
        let { isLoaded, user } = this.state; // set props of state
        if (isLoaded) {
            return (
                <div className="App">
                    <h1>List</h1>
                    <ul>
                        {user.map(user => (
                            <li key={user.id}>
                                Name: {user.name} | Email: {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            );  
        } else {
            return (
                <div>Loading...</div>
            );
        };
    }
}

export default User;
