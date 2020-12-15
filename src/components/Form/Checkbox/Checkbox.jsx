import React from 'react';

import { Checkbox as MaterialCheckbox } from '@material-ui/core';

const Checkbox = (props) => (
  <MaterialCheckbox {...props}>
    { props.children }
  </MaterialCheckbox>
);

export default Checkbox;
