import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  alpha,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faUsers,
  faTasks,
  faRightFromBracket,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 240;

import { menuItemsByRole } from "../utils/menuConfig";
import { Role } from "../utils/role";

const userRole = Role.SuperAdmin; // This should be dynamically set based on the logged-in user

const menuItems = menuItemsByRole[userRole] || [];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid",
          borderColor: (theme) => alpha(theme.palette.divider, 0.1),
          backgroundColor: (theme) =>
            alpha(theme.palette.background.paper, 0.8),
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box sx={{ overflow: "auto", mt: 1 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ px: 2, py: 0.5 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: "12px",
                  "&.Mui-selected": {
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.2),
                    },
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                  },
                  "&:hover": {
                    backgroundColor: (theme) =>
                      alpha(theme.palette.action.hover, 0.1),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color: (theme) =>
                      location.pathname === item.path
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 500,
                      fontSize: "0.95rem",
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
