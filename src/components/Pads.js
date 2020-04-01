import './css/Pads.css';
import mapping from './mapping/mapping';
import React from 'react';
import Pad from './Pad';

class Pads extends React.Component {

  render() {
    const pads = mapping.map(m => {
      return (
        <Pad
          key={m[0]}
          map={m}
          setDisplayText={this.props.setDisplayText}
          keypress={this.props.keypress}
        />
      )
    });

    return (
      <div className='pads__container flex-center'>
        {pads}
      </div>
    );

  }
}

export default Pads;