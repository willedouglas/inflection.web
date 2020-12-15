import React from 'react';

import { MenuItem as MaterialMenuItem } from '@material-ui/core';

const MenuItem = (props) => (
  <MaterialMenuItem {...props}>
    { props.children }
  </MaterialMenuItem>
);

export default MenuItem;
