import { api } from '@utils';

const apiHelper = api({
  baseURL: `${process.env.REACT_APP_INFLECTION_API_URI}`,
});

const authorize = (code) => apiHelper.post('/linkedin/authorize', { code });

const profile = (accessToken) => apiHelper.post('/linkedin/profile', { access_token: accessToken });

const submit = (subscription) => console.log('submitted! still not implemented.', subscription);

export {
  authorize,
  profile,
  submit,
};
