import React from "react";
import { Container, Typography } from "@mui/material";

const Attendance: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Attendance & Kehadiran
      </Typography>
      <Typography variant="body1">
        Manage attendance records and shift management here.
      </Typography>
    </Container>
  );
};

export default Attendance;
