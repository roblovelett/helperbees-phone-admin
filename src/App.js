import React, { Component } from 'react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users') // fetch api
      .then(res => res.json()) // make json
      .then(json => { // loaded is true
        this.setState({
          items: json,
          isLoaded: true
        })
      });

  }

  render() {

    let { isLoaded, items } = this.state; // set props of state

    if (!isLoaded) {
      return (<div>Loading...</div>);
    } else {
      return (<div className="App"> is Loaded.</div>);  
    };
  }
}

export default App;