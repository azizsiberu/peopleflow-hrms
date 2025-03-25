import React from "react";
import { Container, Typography } from "@mui/material";

const Payroll: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Payroll & Gaji
      </Typography>
      <Typography variant="body1">
        Manage payroll, tax calculations, and automatic deductions here.
      </Typography>
    </Container>
  );
};

export default Payroll;
