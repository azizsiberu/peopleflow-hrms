import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import Attendance from "../pages/Attendance";
import LeaveRequest from "../pages/LeaveRequest";
import Payslip from "../pages/Payslip";

const EmployeeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<EmployeeDashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/leave-request" element={<LeaveRequest />} />
      <Route path="/payslip" element={<Payslip />} />
    </Routes>
  );
};

export default EmployeeRoutes;
