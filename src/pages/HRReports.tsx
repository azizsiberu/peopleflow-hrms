import React from "react";
import { Container, Typography } from "@mui/material";

const HRReports: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Laporan & Analitik HR
      </Typography>
      <Typography variant="body1">
        View HR data and analytics reports here.
      </Typography>
    </Container>
  );
};

export default HRReports;
