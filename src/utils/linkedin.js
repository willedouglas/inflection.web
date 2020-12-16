const getLinkedinAuthorizationUrl = () => `
https://www.linkedin.com/oauth/v2/authorization
?response_type=code
&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}
&redirect_uri=${process.env.REACT_APP_LINKEDIN_REDIRECT_URI}
&scope=r_liteprofile%20r_emailaddress`;

export {
  getLinkedinAuthorizationUrl,
};
