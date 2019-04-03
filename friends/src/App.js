import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(res => {
            this.setState({friends: res.data})
            console.log(this.state.friends[0].age);
        })
        .catch(err => {
            console.log(err);
        })

    const tempState = this.state.friends
  }

  render() {
    // console.log(this.state.friends[0]['age'])
    return (
      <FriendsList friends={this.state.friends}/>
    );
  }
}

export default App;
