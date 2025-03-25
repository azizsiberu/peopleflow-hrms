import React from "react";
import { Container, Typography } from "@mui/material";

const Recruitment: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Recruitment & Onboarding
      </Typography>
      <Typography variant="body1">
        Manage job openings and track candidates here.
      </Typography>
    </Container>
  );
};

export default Recruitment;
