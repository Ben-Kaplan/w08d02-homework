import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Login from './Login';
import MainContainer from './MainContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: '',
      news: [],
    }
  }
  login = (username) => {
    this.setState({
      username: username,
      loggedIn: true
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
