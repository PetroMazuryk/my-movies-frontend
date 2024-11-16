import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './components/PublicRoute/PublicRoute.jsx';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<div>LoginPage</div>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
