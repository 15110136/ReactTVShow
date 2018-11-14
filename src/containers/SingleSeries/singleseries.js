import React, { Component } from 'react'
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom'
import './singleseries.css'

export default class singleseries extends Component {
  state = {
    show: null
  }

  componentWillMount() {
    this.mounted = true;
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => {
        if (this.mounted) {
          this.setState({ show: json });
          this.mounted = false;
        }
      });
  }
  componentWillUpdate() {
    this.mounted = true;

    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => {
        if (this.mounted) {
          this.setState({ show: json });
          this.mounted = false;
        }
      });

  }
  componentWillUnmount() {
    this.mounted = false;
  }
  onHandleStyle = (show) => {
    // console.log(show.image.original);
    return {
      background: 'url(' + show.image.original + ')' + ',' + 'linear-gradient(rgba(0, 0, 0, 0.5)' + ',' + 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'darken',
      backgroundSize: 'cover',
      backgroundPosition: 'auto',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
    }
  }
  render() {
    const { show } = this.state;
    const Premiered = (show) => {
      return show.summary;
    }
    return (
      <div className="singleSeries">
        {show === null && <Loader />}
        {
          show !== null &&
          <div className="contentSingleSeries" style={this.onHandleStyle(show)} >
            <div className="info">
              <h2>{show.name}</h2>
              <p className="premiered">{show.premiered}</p>
              <p className="summary">{show.summary}</p>
            </div>
          </div>
        }
        <div className="back_btn">
          <Link to='/' className='backhome'>
          Back to HOME Page
          </Link>
        </div>

      </div>
    )
  }
}
