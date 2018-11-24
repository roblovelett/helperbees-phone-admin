import React, { Component } from 'react';

class List extends Component {

  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/api/users') // fetch api
      .then(res => res.json()) // make json
      .then(json => { // loaded is true
        this.setState({
          users: json,
          isLoaded: true
        })
      });
  }

  render() {
    let { isLoaded, users } = this.state; // set props of state
    if (isLoaded) {
      return (
        <div className="App">
            <h1>List</h1>
          <ul>
            {users.map(users => (
                <li key={users.id}>
                  Name: {users.name} | Email: {users.email}
                </li>
            ))}
          </ul>
        </div>
      );  
    } else {
      return (<div>Loading...</div>);
    }
  }
}

export default List;
