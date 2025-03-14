import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
  const userRole = useSelector((state: RootState) => state.user?.role);

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="app">
        <Header />
        <div className="main-container">
          {userRole && <Sidebar />}
          <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default' }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Box>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
