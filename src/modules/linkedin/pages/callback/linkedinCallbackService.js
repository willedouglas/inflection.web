import subscriptionResource from '@resources/subscription';

const getLinkedinProfileData = async (code) => {
  try {
    const { data: authorizeResponse } = await subscriptionResource.authorize(code);
    const { access_token: accessToken } = authorizeResponse;
    const { data: profileData } = await subscriptionResource.profile(accessToken);

    return profileData;
  } catch (e) {
    return e.response && e.response.data;
  }
};

export {
  getLinkedinProfileData,
};
