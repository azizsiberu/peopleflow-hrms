import React from "react";
import { Container, Typography } from "@mui/material";

const EmployeeManagement: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Employee Management
      </Typography>
      <Typography variant="body1">
        Manage employee profiles, documents, and work status here.
      </Typography>
    </Container>
  );
};

export default EmployeeManagement;
