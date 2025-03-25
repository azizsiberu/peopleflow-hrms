import React from "react";
import { Container, Typography } from "@mui/material";

const EmployeeDashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Employee Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your dashboard! Here you can view your information,
        attendance, and any pending requests.
      </Typography>
    </Container>
  );
};

export default EmployeeDashboard;
