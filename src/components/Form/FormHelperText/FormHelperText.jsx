import React from 'react';

import { FormHelperText as MaterialFormHelperText } from '@material-ui/core';

const FormHelperText = (props) => (
  <MaterialFormHelperText {...props}>
    { props.children }
  </MaterialFormHelperText>
);

export default FormHelperText;
