import React from 'react';
import { Box, Typography, alpha } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid',
        borderColor: (theme) => alpha(theme.palette.divider, 0.1),
      }}
    >
      <Typography 
        variant="body2" 
        align="center"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        © {new Date().getFullYear()} PeopleFlow. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
