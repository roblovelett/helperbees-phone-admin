import React, { Component } from 'react';

class User extends Component {

    constructor(props) { // Initialize the state
        super(props);
        this.state = {
            user: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        // get query, parse, fetch from api, load json
        const phone = '111-111-1111';
        
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
