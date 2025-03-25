import React from "react";
import { Container, Typography } from "@mui/material";

const LeaveManagement: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Pengelolaan Cuti & Izin
      </Typography>
      <Typography variant="body1">
        Manage leave requests and approvals here.
      </Typography>
    </Container>
  );
};

export default LeaveManagement;
