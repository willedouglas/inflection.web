import React from 'react';

import { Select as MaterialSelect } from '@material-ui/core';

const Select = (props) => (
  <MaterialSelect {...props}>
    { props.children }
  </MaterialSelect>
);

export default Select;
