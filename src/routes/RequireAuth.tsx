import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Role } from "../utils/role";

interface RequireAuthProps {
  allowedRoles: Role[];
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedRoles,
  children,
}) => {
  const rawRole = useSelector((state: RootState) => state.user?.role);
  const role = Number(rawRole);

  if (isNaN(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return allowedRoles.includes(role as Role) ? (
    <>{children}</>
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default RequireAuth;
