import './css/DrumMachine.css';
import React from 'react';
import Display from './Display';
import Pads from './Pads';

const DrumMachine = (props) => {
  return (
    <div id='drum-machine' className='drum-machine__container'>
      <Display />
      <Pads keypress={props.keypress} />
    </div>
  )
}

export default DrumMachine;