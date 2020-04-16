import './css/DrumMachine.css';
import React from 'react';
import Display from './Display';
import Pads from './Pads';

const DrumMachine = (props) => {

  const displayRef = React.createRef();

  return (
    <div id='drum-machine' className='drum-machine__container'>
      <Display displayRef={displayRef} />
      <Pads displayRef={displayRef} keypress={props.keypress} />
    </div>
  )
}

export default DrumMachine;