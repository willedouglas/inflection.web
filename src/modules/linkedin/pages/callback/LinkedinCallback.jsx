import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, CircularProgress } from '@components';

import { getLinkedinProfileData } from './linkedinCallbackService';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
}));

const getUrlParamsByKey = (params, key) => {
  const urlParams = new URLSearchParams(params);
  const searchedParam = urlParams.get(key);
  return searchedParam;
};

const LinkedinCallBack = ({ location }) => {
  const classes = useStyles();
  const history = useHistory();

  const redirectRegister = (params) => {
    history.push('/', params);
  };

  const handleInit = async () => {
    const params = location.search;
    const code = getUrlParamsByKey(params, 'code');
    const profileData = await getLinkedinProfileData(code);
    redirectRegister(profileData);
  };

  useEffect(async () => {
    handleInit();
  });

  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};

export default LinkedinCallBack;
