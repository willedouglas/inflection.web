import React from 'react';

import { Paper as MaterialPaper } from '@material-ui/core';

const Paper = (props) => (
  <MaterialPaper {...props}>
    { props.children }
  </MaterialPaper>
);

export default Paper;
