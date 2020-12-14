import React from 'react';

import { Grid as MaterialGrid } from '@material-ui/core';

const Grid = (props) => (
  <MaterialGrid {...props}>
    { props.children }
  </MaterialGrid>
);

export default Grid;
