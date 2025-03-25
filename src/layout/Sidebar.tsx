import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { menuItemsByRole } from "../utils/menuConfig";
import { Role } from "../utils/role"; // Ensure Role is imported correctly
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const userRole = useSelector((state: RootState) => state.user?.role);

  const role = Number(userRole);

  if (!(role in menuItemsByRole)) {
    return null; // or a loading state
  }

  const menuItems = menuItemsByRole[role as Role];

  // Handle case where menu items are undefined
  if (!menuItems) {
    return <div>No menu items available for your role.</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        bottom: 0,
        bgcolor: "background.paper",
        boxShadow: 3,
      }}
    >
      <List>
        {menuItems.map(
          (
            item: { label: string; path: string } // Define item type
          ) => (
            <ListItem key={item.label}>
              <ListItemButton component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};

export default Sidebar;
