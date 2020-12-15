import React from 'react';

import { Avatar as MaterialAvatar } from '@material-ui/core';

const Avatar = (props) => (
  <MaterialAvatar {...props}>
    { props.children }
  </MaterialAvatar>
);

export default Avatar;
