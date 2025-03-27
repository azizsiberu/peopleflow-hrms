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
  InputAdornment,
  IconButton,
} from "@mui/material";
import { setDemoUser } from "../slices/userSlice";
import { loginUser } from "../api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      try {
        const data = await loginUser(username, password);
        console.log(
          "Logged in user role:",
          data.role,
          "(",
          data.roleLabel,
          ")"
        );
        dispatch(
          setDemoUser({
            username: data.username,
            role: data.role,
            roleLabel: data.roleLabel,
          })
        );
        navigate("/dashboard", { replace: true });
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage("Username atau password salah.");
      }
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
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      ) : (
                        <FontAwesomeIcon icon={faEye} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
            {errorMessage && (
              <Typography color="error" sx={{ mt: 1, fontSize: "0.875rem" }}>
                {errorMessage}
              </Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
