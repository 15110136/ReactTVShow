import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    }
  }

  render() {

    const { list } = this.props;

    const showList = list.map((seri, index) => {
      if (index <= 3) {
        var divStyle = null;
        if (seri.show.image !== null) {
          var divStyle = {
            background: 'url(' + seri.show.image.original + ')'+','+'#b3bbc1',
            backgroundBlendMode:'darken',
            backgroundSize: 'cover',
            backgroundPosition:'center',
            
          };
        }


        return (
          <div className="section" style={divStyle} key={index}>
            <div className="cont_title">
              <h1>{seri.show.name}</h1>
              <h3>{seri.show.type}</h3>
            </div>
            <div className="cont_desc">
              {
                seri.show.schedule.days !== null &&
                <p>{seri.show.schedule.days}</p>
              }
            </div>
          </div>

        )
      }

    });

    return (
      <div className="header">
        <section className="container">
          {showList}
        </section>
        {/* <section className="container">
          <div className="section">
            <div className="cont_title">
              <h1><br />fjords</h1>
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
        </section> */}
      </div>
    )
  }

}
