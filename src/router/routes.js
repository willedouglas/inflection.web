import Root from '../Root';
import Register from '../modules/register/pages/new/Register';
import LinkedinCallback from '../modules/linkedin/pages/callback/LinkedinCallback';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Register,
      },
      {
        path: '/auth/linkedin/callback',
        exact: true,
        component: LinkedinCallback,
      },
    ],
  },
];

export default routes;
