import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
          divStyle = {
            background: 'url(' + seri.show.image.original + ')' + ',' + '#b3bbc1',
            backgroundBlendMode: 'darken',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          };
        }

        return (
          <div className="section" style={divStyle} key={index}>
            <Link to={`/series/${seri.show.id}`} id={seri.show.id}>
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
            </Link>
          </div>

        )
      } else {
        return null
      }

    });

    return (
      <div className="header">
        <section className="container">
          {showList}
        </section>
      </div>
    )
  }

}
