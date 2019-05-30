import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import GitHubTable from './components/github/GitHubTable';
import SocialBar from './components/social-bar/SocialBar';
import MainCenter from './components/main-center/MainCenter';

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">

        <section className='showcase home-page'>
          <NavBar/>
          <MainCenter top='25%'/>
          <SocialBar/>
        </section>
        
        <section className='github-table'>
          <GitHubTable/>
        </section>
        
        <div className='test'></div>
      </div>
    );
  }
}

export default App;
