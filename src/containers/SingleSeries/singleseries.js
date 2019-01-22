import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import './singleseries.css';
import renderHTML from 'react-render-html';
import homeIcon from '../../assets/home2.svg';
import ReadMoreReact from 'read-more-react';
import ReactPlayer from 'react-player'

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
  componentDidUpdate() {
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
    console.log(this.state.show);
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  onHandleStyle = (show) => {
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

    const Rating = ({ s }) => {
      if (s.rating !== null && s.rating.average !== null) {
        return (
          <p className='rating'>Rating: {s.rating.average} </p>
        )
      } else {
        return null;
      }
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
              <ReadMoreReact text={show.summary} min={80} max={200} ideal={100} />
              {/* <div className="summary">{renderHTML(show.summary)}</div> */}
              <Rating s={show} />
            </div>
          </div>
        }
        <div className="back_btn">
          <Link to='/' className='backhome'>
            <img src={homeIcon} alt='homeLogo' style={{ width: 35 + 'px', color: 'white' }} />
          </Link>
        </div>
        <ReactPlayer className="video" url='https://www.youtube.com/watch?v=aGJ3Jhb7i88' controls muted height="100vh" width="95%" />
      </div>
    )
  }
}
