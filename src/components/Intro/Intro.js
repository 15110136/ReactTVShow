import React from 'react';
import './intro.css'

const Intro=(props)=>(
  <p className="App-intro">
    {props.mess}
  </p>
);

export default Intro;