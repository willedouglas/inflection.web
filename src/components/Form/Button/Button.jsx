import React from 'react';

import { Button as MaterialButton } from '@material-ui/core';

const Button = (props) => (
  <MaterialButton {...props}>
    { props.children }
  </MaterialButton>
);

export default Button;
