import React from 'react';

import { Box as MaterialBox } from '@material-ui/core';

const Box = (props) => (
  <MaterialBox {...props}>
    { props.children }
  </MaterialBox>
);

export default Box;
