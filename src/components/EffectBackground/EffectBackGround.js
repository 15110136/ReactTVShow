import React, { Component } from 'react'
import './effect.css'

export default class EffectBackGround extends Component {
  render() {
    return (
      <div className="content">
        <svg viewBox="0 0 1500 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="text--line">
            SUTRIX
      </text>
          </symbol>
          <clipPath id="cp-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="text--line">
            SUTRIX
      </text>
          </clipPath>
          <g clipPath="url(#cp-text)" className="shadow">
            <rect width="100%" height="100%" className="anim-shape anim-shape--shadow" />
          </g>
          <g clipPath="url(#cp-text)" className="colortext">
            <rect width="100%" height="100%" className="anim-shape" />
            <rect width="80%" height="100%" className="anim-shape" />
            <rect width="60%" height="100%" className="anim-shape" />
            <rect width="40%" height="100%" className="anim-shape" />
            <rect width="20%" height="100%" className="anim-shape" />
          </g>
          <use xlinkHref="#s-text" className="text--transparent" />
        </svg>
      </div>

    )
  }
}
