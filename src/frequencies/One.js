import React, { Component } from 'react';
import Frequency from './Frequency.js';
import imageMap from './One.Map.png';

class Freq1 extends Component {
  render = () => {
    const { radius } = this.props;

    return <Frequency
      imageMap={imageMap}
      imageMapAlt="Mapa aéreo da frequência 1"
      struts={[
        ["A", radius * 1.05146, 25, 30]
      ]}
      connectors={[
        ["Conectores de 4 vias", 5, 0],
        ["Conectores de 5 vias", 6, 12]
      ]}
    />
  }
}

export default Freq1;
