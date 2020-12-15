import React from 'react';

import { Typography as MaterialTypography } from '@material-ui/core';

const Typography = (props) => (
  <MaterialTypography {...props}>
    { props.children }
  </MaterialTypography>
);

export default Typography;
