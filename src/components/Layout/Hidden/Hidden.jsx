import React from 'react';

import { Hidden as MaterialHidden } from '@material-ui/core';

const Hidden = (props) => (
  <MaterialHidden {...props}>
    { props.children }
  </MaterialHidden>
);

export default Hidden;
