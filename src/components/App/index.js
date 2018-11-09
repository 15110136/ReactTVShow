import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showname1: '',
      showname2: '',
      type: '',
      summary: '',
      image: ''
    }
  }

  setInfo = () => {
    
  }
  componentWillMount() {

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header onReciveInfo={this.setInfo} />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
