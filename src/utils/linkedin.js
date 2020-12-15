const getLinkedinAuthorizationUrl = () => `
https://www.linkedin.com/oauth/v2/authorization
?response_type=code
&client_id=${process.env.LINKEDIN_SECRET_ID}
&redirect_uri=${process.env.LINKEDIN_REDIRECT_URI}
&scope=r_liteprofile%20r_emailaddress`;

export {
  getLinkedinAuthorizationUrl,
};
