import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { getAuth } from '../../redux/auth/auth-selectors';

const PublicRoute = () => {

  const { isLogin, token ,verify} = useSelector(getAuth);
 
 

  if (isLogin && token && !verify) {
    return <Navigate to="/verify-info" replace />;
  }
  
  if (isLogin && token && verify) {
    return <Navigate to="/my-movies" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
