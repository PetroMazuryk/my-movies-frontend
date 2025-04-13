

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/auth/auth-selectors';

const PrivateRoute = () => {
  const {  token, verify } = useSelector(getAuth);

  if (!token) return <Navigate to="/login" replace />;

  if (token && !verify) {
    return <Navigate to="/verify-info" replace />;
  }

  if (token && verify) {
    return <Outlet />;
  }

  return null;
};

export default PrivateRoute;
