import React, { Component } from 'react'
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom'
import './singleseries.css'

export default class singleseries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(this.props.match.params);

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }
  render() {
    const { show } = this.state;
    console.log(show);

    return (
      <div>
        {show === null && <Loader />}
        {
          show !== null &&
          <div>
            <p>Show name: {show.name}</p>
            {
              show.rating !== null && show.rating.average !== null &&
              <p>Rating: {show.rating.average}</p>
            }
            {
              show.image.medium !== null && 
              <img alt="show" src={show.image.medium}/>
            }

          </div>
        }
        <Link to='/' className='backhome'>Back to HOME Page</Link>
      </div>
    )
  }
}
