import React from 'react';

import { StepLabel as MaterialStepLabel } from '@material-ui/core';

const StepLabel = (props) => (
  <MaterialStepLabel {...props}>
    { props.children }
  </MaterialStepLabel>
);

export default StepLabel;
