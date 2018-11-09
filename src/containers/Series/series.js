import React, { Component } from 'react'
import SeriesList from '../../components/SeriesList/SeriesList'
import Loader from '../../components/Loader/Loader'
import Intro from '../../components/Intro/Intro'
import './series.css'
import EffectBackGround from '../../components/EffectBackground/EffectBackGround';


export default class series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetch: false
  }

  onSeriesChange = e => {
    this.setState({ seriesName: e.target.value, isFetch: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetch: false }));
  }

  render() {
    const { series, seriesName, isFetch } = this.state;
    return (
      <div className="series">
        <Intro mess="Search TV shows" />

        <div>
          <input value={seriesName} type="text" name="name" className="question" id="nme" required autoComplete="off" onChange={this.onSeriesChange} placeholder="What's your show?" />
        </div>
        <div>
          {
            series.length === 0 && seriesName.trim() === ''
            &&
            <p>Please enter a series name</p>
          }
          {
            series.length === 0 && seriesName.trim() !== '' &&
            <p>Not found series {seriesName}</p>
          }
          {
            isFetch && <Loader />
          }
          {
            !isFetch && <SeriesList list={series} />
          }
        </div>
        {/* <EffectBackGround /> */}
      </div>
    )
  }
}
