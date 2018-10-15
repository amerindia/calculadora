import React, { Component } from 'react';
import Frequency from './Frequency.js';
import imageMap from './Five.Map.png';

class Freq5 extends Component {
  render = () => {
    const { radius } = this.props;

    return <Frequency
      imageMap={imageMap}
      imageMapAlt="Mapa aéreo da frequência 5"
      struts={[
        ["A", radius * 0.19814743, 30, 30, 60],
        ["B", radius * 0.23179025, 30, 30, 60],
        ["C", radius * 0.22568578, 60, 60, 120],
        ["D", radius * 0.24724291, 60, 70, 120],
        ["E", radius * 0.25516701, 50, 70, 120],
        ["F", radius * 0.24508578, 50, 80, 120],
        ["G", radius * 0.26159810, 30, 35, 60],
        ["H", radius * 0.23159760, 30, 30, 60],
        ["I", radius * 0.24534642, 10, 20, 30]
      ]}
      connectors={[
        ["Conectores de 4 vias", 25, 25, 0],
        ["Conectores de 5 vias", 6, 6, 12],
        ["Conectores de 6 vias", 29, 120, '??']
      ]}
    />
  }
}

export default Freq5;
