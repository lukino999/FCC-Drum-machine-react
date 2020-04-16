import './css/Display.css';
import React from 'react';

const Display = (props) => {
  return (
    <div className='display__container'>
      <div className='display'>
        <p ref={props.displayRef} id='display' className='display-text'>
        </p>
      </div>
    </div>
  );
}

export default Display;