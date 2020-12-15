import React from 'react';

import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';

const CircularProgress = (props) => (
  <MaterialCircularProgress {...props}>
    { props.children }
  </MaterialCircularProgress>
);

export default CircularProgress;
