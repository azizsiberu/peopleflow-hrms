import React from "react";
import { useSelector } from "react-redux";
import SuperAdminDashboardComponent from "./SuperAdminDashboard";
import ExecutiveDashboardComponent from "./ExecutiveDashboard";
import ManagerDashboardComponent from "./ManagerDashboard";
import SupervisorDashboardComponent from "./SupervisorDashboard";
import EmployeeDashboardComponent from "./EmployeeDashboard";
import { Box, Typography, alpha } from "@mui/material";

const Dashboard = () => {
  const user = useSelector((state: any) => state.user.user);

  switch (user?.role) {
    case 0:
      return <SuperAdminDashboardComponent />;
    case 1:
      return <ExecutiveDashboardComponent />;
    case 2:
      return <ManagerDashboardComponent />;
    case 3:
      return <SupervisorDashboardComponent />;
    case 4:
    default:
      return <EmployeeDashboardComponent />;
  }
};

export default Dashboard;
