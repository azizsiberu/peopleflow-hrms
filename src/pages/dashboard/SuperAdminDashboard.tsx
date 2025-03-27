import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faCog,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const SuperAdminDashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        Super Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 123, 255, 0.1)",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faUserShield} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                Manage Users
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Add, Remove, or Update Users
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 193, 7, 0.1)",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faCog} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                System Settings
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Configure System
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 123, 255, 0.1)",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faUsers} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                View Reports
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              See All Reports
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuperAdminDashboard;
