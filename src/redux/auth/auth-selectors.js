import { createSelector } from 'reselect';

// export const isUserLogin = ({ auth }) => auth.isLogin;

// export const getAuth = ({ auth }) => {
//   const { isLogin, token } = auth;
//   return { isLogin, token };
// };
// export const getUser = ({ auth }) => auth.user;

const selectAuth = (state) => state.auth;

export const isUserLogin = createSelector([selectAuth], (auth) => auth.isLogin);

export const getAuth = createSelector(
  [selectAuth],
  ({ isLogin, token, verify }) => ({
    isLogin,
    token,
    verify,
  })
);

export const getUser = createSelector([selectAuth], (auth) => auth.user);

// export const isAuthenticated = (state) =>
//   Boolean(state.auth.token && state.auth.user?.verify);