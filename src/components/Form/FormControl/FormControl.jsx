import React from 'react';

import { FormControl as MaterialFormControl } from '@material-ui/core';

const FormControl = (props) => (
  <MaterialFormControl {...props}>
    { props.children }
  </MaterialFormControl>
);

export default FormControl;
