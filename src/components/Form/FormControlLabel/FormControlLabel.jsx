import React from 'react';

import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core';

const FormControlLabel = (props) => (
  <MaterialFormControlLabel {...props}>
    { props.children }
  </MaterialFormControlLabel>
);

export default FormControlLabel;
