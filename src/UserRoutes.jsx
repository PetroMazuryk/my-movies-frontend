import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './components/PublicRoute/PublicRoute.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const MyMoviesPage = lazy(() =>
  import('./pages/MyMoviesPage/MyMoviesPage.jsx')
);
const MyFavoriteMoviesPage = lazy(() =>
  import('./pages/MyFavoriteMoviesPage/MyFavoriteMoviesPage.jsx')
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

const VerifyInfoPage = lazy(() =>
  import('./pages/VerifyInfoPage/VerifyInfoPage.jsx')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-info" element={<VerifyInfoPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/my-movies" element={<MyMoviesPage />} />
          <Route
            path="/my-favorite-movies"
            element={<MyFavoriteMoviesPage />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
