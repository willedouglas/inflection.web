import React from 'react';

import { AppBar as MaterialAppBar } from '@material-ui/core';

const AppBar = (props) => (
  <MaterialAppBar {...props}>
    { props.children }
  </MaterialAppBar>
);

export default AppBar;
