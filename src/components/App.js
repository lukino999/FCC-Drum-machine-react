import './css/App.css';
import React from 'react';
import DrumMachine from './DrumMachine';

export default class App extends React.Component {

  state = {keypress: ''};

  onKeyPress = e => {
    this.setState({keypress: e.key.toUpperCase()});
  }

  componentDidMount() {
    document.body.classList.add('body');
    document.querySelector('#root').classList.add('fill-parent');
    document.addEventListener('keydown', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
  }

  render() {
    return (
      <div className='fill-parent'>
        <DrumMachine keypress={this.state.keypress}/>
      </div>
    )
  }
}
