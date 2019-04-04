import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      activeFriend: null
    }
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(res => {
            this.setState({friends: res.data})
        })
        .catch(err => {
            console.log(err);
        })
  }

  addFriend = (newFriend) => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateFriend = (updatedFriend) => {
    axios
      .put(`http://localhost:5000/friends/${this.state.activeFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  setActiveFrient = (event) => {
    event.preventDefault()
    let varb = {};
    for(let i=0; i<this.state.friends.length; i++) {
      if(event.target.id == this.state.friends[i].id) {
          varb = this.state.friends[i]
      }
    }
    this.setState({
      activeFriend: varb
    })
  }

  deleteFriend = (event) => {
    event.preventDefault()
    let varb = {};
    for(let i=0; i<this.state.friends.length; i++) {
      if(event.target.id == this.state.friends[i].id) {
          varb = this.state.friends[i]
      }
    }
    axios 
      .delete(`http://localhost:5000/friends/${varb.id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
      <Link to="/"><div>Back to friends list</div></Link>
      <Link to="/form"><div>Add a friend</div></Link>
      <Route exact path="/" render={() => (
        <FriendsList 
          friends={this.state.friends} 
          setActiveFrient={this.setActiveFrient}
          deleteFriend={this.deleteFriend}
        />)}
      />
      <Route path="/form" render={() => (
        <Form 
        addFriend={this.addFriend}
        />)}
      />
      <Route path="/updateform" render={() => (
        <UpdateForm
          updateFriend={this.updateFriend}/>)}/>
      </div>
    );
  }
}

export default App;
