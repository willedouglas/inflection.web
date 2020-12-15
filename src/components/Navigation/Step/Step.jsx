import React from 'react';

import { Step as MaterialStep } from '@material-ui/core';

const Step = (props) => (
  <MaterialStep {...props}>
    { props.children }
  </MaterialStep>
);

export default Step;
