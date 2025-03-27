import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, alpha } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clearUserRole } from "../slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole = useSelector((state: RootState) => state.user?.role);

  const handleLogout = () => {
    dispatch(clearUserRole());
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: (theme) => alpha(theme.palette.divider, 0.1),
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            color: (theme) => theme.palette.text.primary,
          }}
        >
          PeopleFlow
        </Typography>
        {userRole && (
          <Box>
            <Button
              color="primary"
              onClick={handleLogout}
              startIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
              sx={{
                textTransform: "none",
                borderRadius: "12px",
                px: 2,
                py: 1,
                fontSize: "0.9rem",
                fontWeight: 500,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                color: "primary.main",
                "&:hover": {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.2),
                },
              }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
