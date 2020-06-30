import './css/App.css';
import React from 'react';
import DrumMachine from './DrumMachine';

export default class App extends React.Component {

  state = { keypress: '' };

  onKeyDown = e => {
    this.setState({ keypress: e.key.toUpperCase() });
  }

  componentDidMount() {
    document.body.classList.add('body');
    document.querySelector('#root').classList.add('fill-parent');
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div className='fill-parent top-margin'>
        <DrumMachine keypress={this.state.keypress} />
        <footer>
          FreeCodeCamp Drum Machine &copy;&nbsp;Luca&nbsp;M&nbsp;-&nbsp;
        <a href='https://github.com/lukino999/FCC-Drum-machine-react' target='_blank'>source</a>
        </footer>
      </div>
    )
  }
}
