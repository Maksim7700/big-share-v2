import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('USER_KEY') !== null;
};

const RequireAuth = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default RequireAuth;