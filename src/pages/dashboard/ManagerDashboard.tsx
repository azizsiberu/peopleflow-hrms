import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTasks,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const ManagerDashboard: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <Box sx={{ p: 3 }}>
      {user?.role && (
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          Welcome, {user.roleLabel}
        </Typography>
      )}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        Manager Dashboard
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
                <FontAwesomeIcon icon={faUsers} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                Manage Team
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              View Team Members
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
                <FontAwesomeIcon icon={faCalendarCheck} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                Approve Requests
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Approve Leaves & Overtime
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerDashboard;
