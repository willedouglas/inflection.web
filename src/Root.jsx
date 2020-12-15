import React from 'react';
import { renderRoutes } from 'react-router-config';

import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from '@components';

const useStyles = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
}));

const Root = ({ route }) => {
  const classes = useStyles();

  return (
    <div className="root-container">
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Inflection
          </Typography>
        </Toolbar>
      </AppBar>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default Root;
