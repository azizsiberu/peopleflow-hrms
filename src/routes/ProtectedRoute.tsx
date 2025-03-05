import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ProtectedRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const userRole = useSelector((state: RootState) => state.user?.role); // Ensure user is defined

  return (
    <Route
      {...rest}
      element={userRole ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
