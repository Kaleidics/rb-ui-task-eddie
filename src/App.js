import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainContainer from './components/MainContainer/MainContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainContainer></MainContainer>
      </div>
    );
  }
}

export default App;
