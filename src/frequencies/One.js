import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import numeral from 'numeral';

class Freq1 extends Component {
  state = {
    radius: ''
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    let strutA;

    if (this.state.radius) {
      strutA = this.state.radius * 1.05146;
    }

    return <div>
      <TextField
        label="Dome Radius"
        type="number"
        value={this.state.radius}
        onChange={this.handleChange('radius')}
      />

      Strut A: {numeral(strutA).format('0.0[00]')}       
    </div>;
  }
}

export default Freq1;
