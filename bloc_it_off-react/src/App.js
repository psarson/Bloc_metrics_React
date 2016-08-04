import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CommentBox from './components/CommentBox';


class Image extends Component {
    render() {
        return (
            <img src={this.props.src} className={this.props.className} alt={this.props.alt} /> 
        );
    }
}

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <div className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2> 
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Navbar /> 
        <CommentBox />
      </div>
    );
  }
}

export default App;
