import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: [],
      seriesName: '',
      show: 'avenger'
    }
  }

  componentDidMount() {
    fetch(`http://api.tvmaze.com/search/shows?q=${this.state.show}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ series: json });
      });
  }

  render() {
    const { series} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Header list={series}/>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
