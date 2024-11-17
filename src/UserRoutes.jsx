import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './components/PublicRoute/PublicRoute.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<div>LoginPage</div>} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/my-movies" element={<div>MyMoviesPage</div>} />
          <Route
            path="/my-favorite-movies"
            element={<div>yFavoriteMoviesPage</div>}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
