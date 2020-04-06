import './css/Pads.css';
import mapping from './mapping/mapping';
import React from 'react';
import Pad from './Pad';

const Pads = (props) => {

  const renderPads = mapping.map(m => {
    return (
      <Pad
        key={m[0]}
        map={m}
        keypress={props.keypress}
      />
    )
  });

  return (
    <div className='pads__container flex-center'>
      {renderPads}
    </div>
  );

}

export default Pads;