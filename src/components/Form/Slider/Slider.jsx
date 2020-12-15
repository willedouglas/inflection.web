import React from 'react';

import { Slider as MaterialSlider } from '@material-ui/core';

const Slider = (props) => (
  <MaterialSlider {...props}>
    { props.children }
  </MaterialSlider>
);

export default Slider;
