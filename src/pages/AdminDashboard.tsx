import React from "react";
import { Container, Typography } from "@mui/material";

const AdminDashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the admin dashboard! Here you can manage users and the
        system.
      </Typography>
    </Container>
  );
};

export default AdminDashboard;
