import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, currentUser, setCurrentUser, ...rest }) {
  return currentUser ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;