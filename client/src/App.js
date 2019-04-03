import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import GitHubTable from './components/github/GitHubTable';
import SocialBar from './components/social-bar/SocialBar';
import MainCenter from './components/main-center/MainCenter';

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className="homePage">
          <NavBar></NavBar>
          <SocialBar></SocialBar>
          <MainCenter></MainCenter>
        </div>
        <div className='github-table'>
          <GitHubTable></GitHubTable> 
        </div>
      </div>
    );
  }
}

export default App;
