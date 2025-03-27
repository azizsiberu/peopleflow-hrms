import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const ExecutiveDashboard: React.FC = () => {
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
        Executive Dashboard
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        Welcome! You have access to executive features and reports.
      </Typography>

      <Grid container spacing={3}>
        {/* Total Company Performance */}
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
                <FontAwesomeIcon icon={faChartLine} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                Total Company Performance
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              92% Efficiency
            </Typography>
          </Paper>
        </Grid>

        {/* Employees Overview */}
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
                Total Employees
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              2,345 Employees
            </Typography>
          </Paper>
        </Grid>

        {/* Financial Overview */}
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
                <FontAwesomeIcon icon={faBriefcase} />
              </Box>
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 600 }}>
                Financial Overview
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              $12M Revenue
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional sections for Executive Dashboard */}
      <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: 600 }}>
        Quick Reports & Analytics
      </Typography>
      <Grid container spacing={3}>
        {/* Performance by Division */}
        <Grid item xs={12} md={6}>
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
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Performance by Division
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Sales: 89% | HR: 78% | IT: 95%
            </Typography>
          </Paper>
        </Grid>

        {/* Overview of Key Metrics */}
        <Grid item xs={12} md={6}>
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
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Key Metrics Overview
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              90% Customer Satisfaction | 85% Project Completion
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExecutiveDashboard;
