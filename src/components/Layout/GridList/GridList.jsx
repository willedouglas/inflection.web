import React from 'react';

import { GridList as MaterialGridList } from '@material-ui/core';

const GridList = (props) => (
  <MaterialGridList {...props}>
    { props.children }
  </MaterialGridList>
);

export default GridList;
