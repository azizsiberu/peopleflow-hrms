import React from "react";
import { Container, Typography } from "@mui/material";

const LeaveRequest: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Leave Request
      </Typography>
      <Typography variant="body1">
        Here you can submit your leave requests and view the status of your
        requests.
      </Typography>
    </Container>
  );
};

export default LeaveRequest;
