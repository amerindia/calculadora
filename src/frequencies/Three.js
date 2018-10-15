import React, { Component } from 'react';
import Frequency from './Frequency.js';
import imageMap from './Three.Map.png';

class Freq3 extends Component {
  render = () => {
    const { radius } = this.props;

    return <Frequency
      imageMap={imageMap}
      imageMapAlt="Mapa aéreo da frequência 3"
      struts={[
        ["A", radius * 0.34862, 30, 30, 60],
        ["B", radius * 0.40355, 40, 55, 90],
        ["C", radius * 0.41241, 50, 80, 120]
      ]}
      connectors={[
        ["Conectores de 4 vias", 15, 15, 0],
        ["Conectores de 5 vias", 6, 6, 12],
        ["Conectores de 6 vias", 25, 40, 80]
      ]}
    />
  }
}

export default Freq3;
