import { createSelector } from 'reselect';

// export const isUserLogin = ({ auth }) => auth.isLogin;

// export const getAuth = ({ auth }) => {
//   const { isLogin, token } = auth;
//   return { isLogin, token };
// };
// export const getUser = ({ auth }) => auth.user;

const selectAuth = (state) => state.auth;

export const isUserLogin = createSelector([selectAuth], (auth) => auth.isLogin);

export const getAuth = createSelector([selectAuth], ({ isLogin, token }) => ({
  isLogin,
  token,
}));

export const getUser = createSelector([selectAuth], (auth) => auth.user);
