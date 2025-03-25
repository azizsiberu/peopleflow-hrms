import React from "react";
import { Container, Typography } from "@mui/material";

const Benefits: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Manajemen Benefit
      </Typography>
      <Typography variant="body1">
        Manage employee benefits such as insurance, retirement funds, and
        compensation here.
      </Typography>
    </Container>
  );
};

export default Benefits;
