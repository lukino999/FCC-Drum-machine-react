import React from 'react'
import mapping from './mapping/mapping';


export default class Pad extends React.Component {

  onPadClick = (e, k) => {
    this.player.play();
    
  }

  render() {
    const samplesFolder = process.env.PUBLIC_URL + '/samples/';
    const [k, sample] = this.props.map;
    return (
      <div
        key={k}
        className='single-pad__container flex-center'
        onClick={(e) => { this.onPadClick(e, k) }}>
        <div className='drum-pad flex-center' id={sample}>
          <p>{k}</p>
          <audio
            src={samplesFolder + sample + '.wav'}
            preload=''
            className='clip'
            id={k}
            ref={ref => this.player = ref}
          >
          </audio>
        </div>
      </div>
    )
  }
}
