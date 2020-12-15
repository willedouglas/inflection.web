import React from 'react';

import { Stepper as MaterialStepper } from '@material-ui/core';

const Stepper = (props) => (
  <MaterialStepper {...props}>
    { props.children }
  </MaterialStepper>
);

export default Stepper;
