import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from '../pages/Home';

const PrivateRoute = () => {    
  const {isAuthenticated, user} = useAuth0();
  console.log(useAuth0());
  // console.log(user,isAuthenticated)
  let Isuser = isAuthenticated && user;
  return (
    Isuser? <Home/> : <Navigate to='/login' />
  )
};
export default PrivateRoute;
