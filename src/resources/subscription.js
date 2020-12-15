/* eslint-disable no-console */

import { api } from '@utils';

const apiHelper = api({
  baseURL: `${process.env.INFLECTION_API_URI}`,
});

export default {
  authorize(code) {
    return apiHelper.post('/linkedin/authorize', { code });
  },
  profile(accessToken) {
    return apiHelper.post('/linkedin/profile', { access_token: accessToken });
  },
  submitSubscription(subscription) {
    console.log('submitted! still not implemented.', subscription);
  },
};
