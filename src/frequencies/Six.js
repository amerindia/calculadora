import React, { Component } from 'react';
import Frequency from './Frequency.js';
import imageMap from './Six.Map.png';

class Freq6 extends Component {
  render = () => {
    const { radius } = this.props;

    return <Frequency
      imageMap={imageMap}
      imageMapAlt="Mapa aéreo da frequência 6"
      struts={[
        ["A", radius * 0.16256722, 30, 60],
        ["B", radius * 0.19047686, 30, 60],
        ["C", radius * 0.18190825, 60, 120],
        ["D", radius * 0.20281969, 90, 180],
        ["E", radius * 0.18738340, 30, 60],
        ["F", radius * 0.19801258, 30, 120],
        ["G", radius * 0.20590774, 130, 240],
        ["H", radius * 0.21535373, 65, 120],
        ["I", radius * 0.21662821, 60, 120]
      ]}
      connectors={[
        ["Conectores de 4 vias", 30, 0],
        ["Conectores de 5 vias", 6, 12],
        ["Conectores de 6 vias", 160, '??']
      ]}
    />
  }
}

export default Freq6;
