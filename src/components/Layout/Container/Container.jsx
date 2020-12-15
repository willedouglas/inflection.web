import React from 'react';

import { Container as MaterialContainer } from '@material-ui/core';

const Container = (props) => (
  <MaterialContainer {...props}>
    { props.children }
  </MaterialContainer>
);

export default Container;
