import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeRoutes from "./routes/EmployeeRoutes"; // Import Employee Routes
import { CssBaseline, Box } from "@mui/material";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: React.FC = () => {
  const userRole = useSelector((state: RootState) => state.user?.role);

  return (
    <BrowserRouter>
      <Box
        className="app-container"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <CssBaseline />
        <Header />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          {userRole && <Sidebar />}
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
          >
            <Routes>
              <Route path="/employee/*" element={<EmployeeRoutes />} />{" "}
              {/* Employee routes */}
              <Route path="/employee/*" element={<EmployeeRoutes />} />{" "}
              {/* Employee routes */}
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
