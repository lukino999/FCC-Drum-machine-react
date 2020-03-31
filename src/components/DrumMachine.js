import './css/DrumMachine.css';
import React from 'react';
import Display from './Display';
import Pads from './Pads';

export default class DrumMachine extends React.Component {
  render() {
    return (
      <div id='drum-machine' className='drum-machine__container'>
        <Display />
        <Pads />
      </div>
    )
  }
}
