import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Home</h1>
      <ul>
        <li><Link to={'./list'}>List</Link></li>
        <li><Link to={'./user?phone=1-463-123-4447'}>user?phone=1-463-123-4447</Link></li>
        <li><Link to={'./user?phone=1-770-736-8031 x56442'}>user?phone=1-770-736-8031 x56442</Link></li>
      </ul>
    </div>
    )
  }
}
export default Home;