import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  alpha,
} from "@mui/material";
import { setDemoUser } from "../slices/userSlice";
import demoUsers from "../utils/demoUsers"; // Import demo users

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      const demoUser = demoUsers.find(
        (user) => user.username === username && user.password === password
      );
      if (demoUser) {
        dispatch(setDemoUser(demoUser)); // Set demo user with role
      }
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: "100%",
            background: (theme) => alpha(theme.palette.background.paper, 0.8),
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            border: "1px solid",
            borderColor: (theme) => alpha(theme.palette.divider, 0.1),
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 600,
              textAlign: "center",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Sign in to PeopleFlow
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, 0.5),
                  "&:hover": {
                    backgroundColor: (theme) =>
                      alpha(theme.palette.background.paper, 0.7),
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, 0.5),
                  "&:hover": {
                    backgroundColor: (theme) =>
                      alpha(theme.palette.background.paper, 0.7),
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "12px",
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
