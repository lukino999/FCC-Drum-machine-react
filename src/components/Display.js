import './css/Display.css';
import React from 'react';

const Display = (props) => {
  return (
    <div className='display__container'>
      <div className='display'>
        <p id='display' className='display-text'>
          {props.sample}
        </p>
      </div>
    </div>
  );
}

export default Display;