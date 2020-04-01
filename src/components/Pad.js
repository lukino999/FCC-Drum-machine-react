import React from 'react'


export default class Pad extends React.Component {
  onPadClick = (e, k) => {
    document.querySelector('#display').innerHTML = this.props.map[1];
    this.player.pause();
    this.player.currentTime = 0;
    this.player.play();
  }

  shouldComponentUpdate(next) {
    const id = this.props.map[0];
    
    if (next.keypress === id) {
      this.onPadClick(null, id);
    }

    return true;
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
