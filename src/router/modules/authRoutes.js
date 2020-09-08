const Auth = () => import(/* webpackChunkName: "Auth" */ '@/views/Auth');

export const authRoutes = [
  {
    path: '/auth/login',
    name: 'AuthLogin',
    component: Auth,
    meta: {
      schema: 'authLogin'
    }
  },
  {
    path: '/auth/reset-password/request-link',
    name: 'ResetPasswordRequestLink',
    component: Auth,
    meta: {
      schema: 'resetPasswordRequestLink'
    }
  },
  {
    path: '/auth/reset-password/request-link/sent',
    name: 'ResetPasswordLinkSent',
    component: Auth,
    meta: {
      schema: 'resetPasswordLinkSent'
    }
  },
  {
    path: '/auth/reset-password/change-password/:token',
    name: 'ResetPasswordChange',
    component: Auth,
    meta: {
      schema: 'resetPasswordChange'
    }
  },
  {
    path: '/auth/reset-password/success',
    name: 'ResetPasswordSuccess',
    component: Auth,
    meta: {
      schema: 'resetPasswordSuccess'
    }
  }
];
