import React from 'react';

import { Toolbar as MaterialToolbar } from '@material-ui/core';

const Toolbar = (props) => (
  <MaterialToolbar {...props}>
    { props.children }
  </MaterialToolbar>
);

export default Toolbar;
