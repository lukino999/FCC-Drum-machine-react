import React from 'react'


export default class Pad extends React.Component {
  onPadClick = (e, k) => {
    // display sample name
    this.props.displayRef.current.innerHTML = this.props.map[1];

    //
    this.resetAnimation();

    this.player.pause();
    this.player.currentTime = 0;
    this.player.play();
  }


  //
  resetAnimation() {
    this.padRef.classList.remove('bounceIn');
    setTimeout(() => {
      this.padRef.classList.add('bounceIn');
    }, 1);
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
        <div
          id={sample}
          className='drum-pad flex-center bounceIn'
          ref={ref => this.padRef = ref}
        >
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
