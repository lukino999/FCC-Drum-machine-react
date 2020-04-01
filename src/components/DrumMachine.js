import './css/DrumMachine.css';
import React from 'react';
import Display from './Display';
import Pads from './Pads';

export default class DrumMachine extends React.Component {
  state = { sample: ''};

  setDisplayText = (text) => {
    console.log('text', text);
    this.setState({sample: text});
  }

  render() {
    return (
      <div id='drum-machine' className='drum-machine__container'>
        <Display sample={this.state.sample}/>
        <Pads 
          setDisplayText={this.setDisplayText}
          keypress={this.props.keypress}
        />
      </div>
    )
  }
}
