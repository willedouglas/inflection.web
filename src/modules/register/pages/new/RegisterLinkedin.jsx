import React from 'react';

import { makeStyles } from '@components';

import { getLinkedinAuthorizationUrl } from '@utils';

import SigninLinkedin from '@assets/images/signin_linkedin.png';

const useStyles = makeStyles((theme) => ({
  linkedin: {
    marginTop: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const openLinkedinAuth = () => {
  window.location.href = getLinkedinAuthorizationUrl();
};

const RegisterLinkedin = () => {
  const classes = useStyles();

  return (
    <img
      alt="Signin Linkedin"
      className={classes.linkedin}
      src={SigninLinkedin}
      onClick={openLinkedinAuth}
    />
  );
};

export default RegisterLinkedin;
