import React from "react";
import { Container, Typography } from "@mui/material";

const Payslip: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Payslip
      </Typography>
      <Typography variant="body1">
        Here you can view and download your payslips.
      </Typography>
    </Container>
  );
};

export default Payslip;
