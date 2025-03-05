import React from 'react';
import { Box, Typography, Grid, Paper, alpha } from '@mui/material';
import { RiBarChartLine, RiTeamLine, RiTaskLine } from 'react-icons/ri';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '16px',
      background: (theme) => alpha(theme.palette.background.paper, 0.8),
      backdropFilter: 'blur(10px)',
      border: '1px solid',
      borderColor: (theme) => alpha(theme.palette.divider, 0.1),
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box
        sx={{
          p: 1,
          borderRadius: '12px',
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          ml: 2,
          fontWeight: 600,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>
    </Box>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      {value}
    </Typography>
  </Paper>
);

const Dashboard: React.FC = () => {
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
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Active Users"
            value="2,345"
            icon={<RiTeamLine size={24} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Total Tasks"
            value="12,456"
            icon={<RiTaskLine size={24} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            title="Progress"
            value="85%"
            icon={<RiBarChartLine size={24} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
