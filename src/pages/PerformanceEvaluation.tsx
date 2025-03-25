import React from "react";
import { Container, Typography } from "@mui/material";

const PerformanceEvaluation: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Penilaian Kinerja
      </Typography>
      <Typography variant="body1">
        Manage performance evaluations, KPIs, and 360° feedback here.
      </Typography>
    </Container>
  );
};

export default PerformanceEvaluation;
