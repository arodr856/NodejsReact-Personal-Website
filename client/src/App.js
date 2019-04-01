import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GitHubTable from './components/github/GitHubTable';

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className="homePage">
          <NavBar></NavBar>
        </div>
        <div className='github-table'>
          <GitHubTable></GitHubTable> 
        </div>
      </div>
    );
  }
}

export default App;
