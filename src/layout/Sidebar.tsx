import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemButton,
  Box,
  alpha
} from '@mui/material';
import { RiDashboardLine, RiTeamLine, RiTaskLine } from 'react-icons/ri';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <RiDashboardLine size={22} />, path: '/' },
  { text: 'Users', icon: <RiTeamLine size={22} />, path: '/users' },
  { text: 'Tasks', icon: <RiTaskLine size={22} />, path: '/tasks' }
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: (theme) => alpha(theme.palette.divider, 0.1),
          backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.8),
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 1 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ px: 2, py: 0.5 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: '12px',
                  '&.Mui-selected': {
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'primary.main',
                    },
                  },
                  '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.action.hover, 0.1),
                  },
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    minWidth: 40,
                    color: (theme) => location.pathname === item.path 
                      ? theme.palette.primary.main 
                      : theme.palette.text.secondary
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                      fontSize: '0.95rem',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
