import  { profile, authorize } from '@resources/subscription';

const getLinkedinProfileData = async (code) => {
  try {
    const { data: authorizeResponse } = await authorize(code);
    const { access_token: accessToken } = authorizeResponse;
    const { data: profileData } = await profile(accessToken);

    return profileData;
  } catch (e) {
    return e.response && e.response.data;
  }
};

export {
  getLinkedinProfileData,
};
