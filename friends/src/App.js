import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import FriendsList from './components/FriendsList';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';

const NavButtons = styled.button`
    width: 150px;
    margin: 5px 20px;
`

const AppContainer = styled.div`
  margin: auto;
  width: 80%;
  text-align: center;
`

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

  setActiveFriend = (event) => {
    console.log(event.target.id)
    let varb = {};
    for(let i=0; i<this.state.friends.length; i++) {
      if(event.target.id == this.state.friends[i].id) {
        console.log(this.state.friends[i].id)
        varb = this.state.friends[i]
        console.log(varb)
      }
    }
    this.setState({
      activeFriend: varb
    })
    console.log(this.state.activeFriend)
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
      <AppContainer>
      <Link to="/"><NavButtons>Back to friends list</NavButtons></Link>
      <Link to="/form"><NavButtons>Add a friend</NavButtons></Link>
      <Route exact path="/" render={(props) => (
        <FriendsList 
          {...props}
          friends={this.state.friends} 
          setActiveFriend={this.setActiveFriend}
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
          updateFriend={this.updateFriend}
        />)}
      />
      </AppContainer>
    );
  }
}

export default App;
