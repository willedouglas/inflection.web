import React from 'react';

import { TextField as MaterialTextField } from '@material-ui/core';

const TextField = (props) => (
  <MaterialTextField {...props}>
    { props.children }
  </MaterialTextField>
);

export default TextField;
