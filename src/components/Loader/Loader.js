import React, { Component } from 'react'
import loader from '../../loader.gif';

export default class Loader extends Component {
  render() {
    return (
      <div>
        <img style={{width:75}} alt='load icon' src={loader} />
      </div>
    )
  }
}
