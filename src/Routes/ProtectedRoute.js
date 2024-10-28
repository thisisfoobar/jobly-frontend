import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, currentUser, ...rest }) {
  return currentUser ? Component : <Navigate to="/login" />;
}

export default ProtectedRoute;