import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: [],
      seriesName: '',
      show:'Thor'
    }
  }


  render() {
    return (
      <div>
        <section className="container">
          <div className="section first">
            <div className="cont_title">
              <h1>kenai<br />fjords</h1>
              <h3>National Park</h3>
            </div>
            <div className="cont_desc">
              <p>Rappel into a crevasse, kayak through icebergs, and watch a glacier recede.</p>
            </div>
          </div>
          <div className="section">
            <div className="cont_title">
              <h1>Hawai'i<br />Volcanoes</h1>
              <h3>National Park</h3>
            </div>
            <div className="cont_desc">
              <p>Rappel into a crevasse, kayak through icebergs, and watch a glacier recede.</p>
            </div>
          </div>
          <div className="section">
            <div className="cont_title">
              <h1>Carlsbad<br />Caverns</h1>
              <h3>National Park</h3>
            </div>
            <div className="cont_desc">
              <p>Rappel into a crevasse, kayak through icebergs, and watch a glacier recede.</p>
            </div>
          </div>
          <div className="section">
            <div className="cont_title">
              <h1>Bryce<br />Canyon</h1>
              <h3>National Park</h3>
            </div>
            <div className="cont_desc">
              <p>Rappel into a crevasse, kayak through icebergs, and watch a glacier recede.</p>
            </div>
          </div>
          <div className="section">
            <div className="cont_title">
              <h1>Dry<br />Tortugas</h1>
              <h3>National Park</h3>
            </div>
            <div className="cont_desc">
              <p>Rappel into a crevasse, kayak through icebergs, and watch a glacier recede.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
