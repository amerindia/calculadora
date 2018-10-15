import React, { Component } from 'react';
import Frequency from './Frequency.js';
import imageMap from './Two.Map.png';

class Freq2 extends Component {
  render = () => {
    const { radius } = this.props;

    return <Frequency
      imageMap={imageMap}
      imageMapAlt="Mapa aéreo da frequência 2"
      struts={[
        ["A", radius * 0.61803, 35, 60],
        ["B", radius * 0.54653, 30, 60]
      ]}
      connectors={[
        ["Conectores de 4 vias", 10, 0],
        ["Conectores de 5 vias", 6, 12],
        ["Conectores de 6 vias", 10, 30]
      ]}
    />
  }
}

export default Freq2;
