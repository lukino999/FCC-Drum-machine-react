import './css/Pads.css';
import React from 'react';
import mapping from './mapping/mapping';


const Pads = () => {

  const samplesFolder = process.env.PUBLIC_URL + '/samples/'

  const pads = mapping.map(([k, sample]) => {
    return (
      <div key={k} className='single-pad__container flex-center'>
        <div className='drum-pad flex-center' id={sample}>
          <p>{k}</p>
          <audio src={samplesFolder + sample}
            preload=''
            className='clip'
            id={k}>
          </audio>
        </div>
      </div>
    );
  });

  return (
    <div className='pads__container flex-center'>
      {pads}
    </div>
  );
}

export default Pads;