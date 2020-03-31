import './css/App.css';
import React from 'react';
import DrumMachine from './DrumMachine';

export default class App extends React.Component {

  onKeyPress = e => {
    console.log('e', e);
  }

  componentDidMount() {
    document.body.classList.add('body');
    document.querySelector('#root').classList.add('fill-parent');
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  render() {
    return (
      <div className='fill-parent'>
        <DrumMachine />
      </div>
    )
  }
}
