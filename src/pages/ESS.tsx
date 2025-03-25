import React from "react";
import { Container, Typography } from "@mui/material";

const ESS: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Employee Self-Service
      </Typography>
      <Typography variant="body1">
        Manage your profile and submit leave requests here.
      </Typography>
    </Container>
  );
};

export default ESS;
