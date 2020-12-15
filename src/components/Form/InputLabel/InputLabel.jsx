import React from 'react';

import { InputLabel as MaterialInputLabel } from '@material-ui/core';

const InputLabel = (props) => (
  <MaterialInputLabel {...props}>
    { props.children }
  </MaterialInputLabel>
);

export default InputLabel;
