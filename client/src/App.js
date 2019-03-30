import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className="homePage">
          <NavBar></NavBar>
        </div>
      </div>
    );
  }
}

export default App;
