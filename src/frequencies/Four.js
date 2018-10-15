import React, { Component } from 'react';
import Frequency from './Frequency.js';
import imageMap from './Four.Map.png';

class Freq4 extends Component {
  render = () => {
    const { radius } = this.props;

    return <Frequency
      imageMap={imageMap}
      imageMapAlt="Mapa aéreo da frequência 4"
      struts={[
        ["A", radius * 0.25318, 30, 60],
        ["B", radius * 0.29524, 30, 60],
        ["C", radius * 0.29453, 60, 120],
        ["D", radius * 0.31287, 70, 120],
        ["E", radius * 0.32492, 30, 60],
        ["F", radius * 0.29859, 30, 60]
      ]}
      connectors={[
        ["Conectores de 4 vias", 20, 0],
        ["Conectores de 5 vias", 6, 12],
        ["Conectores de 6 vias", 65, 150]
      ]}
    />
  }
}

export default Freq4;
